<template>
  <div @focusout="closeList" class="rounded-lg h-auto z-10 p-0 bg-red relative">
    <FormInput
      :placeholder="$t('search')"
      type="text"
      v-model="search"
      class="px-2 bg-[#b8b8b939] w-full flex-grow"
    >
      <template #prefix>
        <i class="icon-search-regular"></i>
      </template>
      <template #suffix>
        <i
          @click="closeList"
          class="icon-close-circle text-red opacity-0 transition-all cursor-pointer"
          :class="{ 'opacity-100 transition-all': search.length }"
        ></i>
      </template>
    </FormInput>
    <ul
      v-if="search.length && showList"
      class="rounded-lg w-full border-1 border-white/20 bg-white backdrop-blur-lg pl-4 mt-4 absolute max-h-[250px] overflow-y-auto shadow-xl"
    >
      <nuxt-link
        :to="`products/${item.slug}`"
        @click="closeList"
        v-if="products.length"
        v-for="(item, idx) in products"
        :key="idx"
        class="p-4 pl-0 group flex items-center justify-between border-b md:border-b-white/[0.08] border-b-dark/50 last:border-none cursor-pointer hover:opacity-75"
      >
        <div class="flex items-center gap-x-2">
          <nuxt-img
            :src="
              item?.images[0].default
                ? item?.images[0].default
                : '/images/category1.png'
            "
            class="w-6 h-6 object-cover"
          />
          <Highlighter
            class="my-highligh"
            :style="{ color: 'inherit' }"
            highlightClassName="highlight"
            :searchWords="keyword"
            :autoEscape="false"
            :textToHighlight="item.title"
          />
        </div>
        <i class="icon-chevron-right group-hover:text-red transition-all"></i>
      </nuxt-link>
      <li v-else class="flex flex-col justify-center items-center pl-0 p-4">
        <NuxtImg src="/images/search-not-data.png" class="h-[100px]" />
        <p class="md:w-2/3 w-full text-center mt-4">
          По вашему запросу ничего не найдено
        </p>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'

import { debounce } from '~/utils'

const products = ref([])
const load = ref(false)
import Highlighter from 'vue-highlight-words'

const showList = ref(false)

const search = ref('')
const show = ref(false)

async function searchProducts(slug: string) {
  const { data, pending } = await useFetch(
    `https://toshkent-parfum.uz/api/v1/products/?search=${slug}&page=1&size=10`,
  )
  products.value = data.value.results
  load.value = pending.value
}
watch(
  () => search.value,
  (val) => {
    showList.value = true
    if (search) {
      debounce('search', () => {
        searchProducts(search.value)
      })
    }
  },
)
const closeList = () => {
  setTimeout(() => {
    showList.value = false
    search.value = ''
  }, 500)
}

const keyword = computed(() => {
  return search.value.split(' ')
})
</script>
