<template>
  <div class="bg-gray-50 py-6">
    <div class="container">
      <!-- <pre>{{ brands }}</pre> -->
      <UIBreadCrumb v-bind="{ routes }" />
      <UITitle :title="$t('all_brands')" wrapper-class="">
        <FormInput
          placeholder="Поиск"
          type="text"
          v-model="search"
          class="w-[278px] px-2 bg-[#b8b8b939] border-black/10"
        >
          <template #prefix>
            <i class="icon-search-regular"></i>
          </template>
          <template #suffix>
            <i
              @click="search = ''"
              class="icon-close-circle text-red opacity-0 transition-all cursor-pointer"
              :class="{ 'opacity-100 transition-all': search.length }"
            ></i>
          </template>
        </FormInput>
      </UITitle>
      <div>
        <div v-if="pending">load....</div>
        <div
          v-else
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 gap-y-6 md:space-y-0 mb-6"
        >
          <CardsBrand v-for="el in brands" :key="el" :option="el" />
        </div>
        <UIButton text="Загрузить еще" variant="light" class="m-auto">
          <template #prefix>
            <i class="icon-arrow-down-solid text-xl"></i>
          </template>
        </UIButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { debounce } from '~/utils'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const search = ref('')

// https://toshkent-parfum.uz/api/v1/products/manufacture/?page=2&search=&size=24
// -----------------
//  https://toshkent-parfum.uz/api/v1/products/manufacture/?size=24&page=1&search=este
const brands = ref([])
async function fetchBrands() {
  const { data, pending, error, refresh } = await useFetch(
    `https://toshkent-parfum.uz/api/v1/products/manufacture/?page=1&search=&size=24`,
  )
  brands.value = data?.value.results
}
fetchBrands()
async function searchBrands(slug: string) {
  const { data, pending, error, refresh } = await useFetch(
    `https://toshkent-parfum.uz/api/v1/products/manufacture/?size=24&page=1&search=${slug}`,
  )
  brands.value = data?.value.results
}
watch(
  () => search.value,
  () => {
    debounce('searchBrand', () => {
      searchBrands(search.value)
    })
  },
)
const routes = computed(() => [
  {
    label: 'Все бренды',
    link: '/',
  },
])
</script>

<style scoped></style>
