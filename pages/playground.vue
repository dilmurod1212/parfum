<template>
  <div class="container py-8">
    <UButton>Button</UButton>
  </div>

  <!--  -->
  <div class="mt-[20px]">
    <div>
      <div
        class="grid grid-cols-3 items-center justify-between gap-10 p-[20px]"
      >
        <div class="bg-slate-500" v-for="(product, i) in products" :key="i">
          <img :src="product.image" alt="" />
          <p>${{ product.price }}</p>

          <button class="bg-red-300" @click="cartStore.add(product)">
            add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--  -->

  <div
    class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-x-6 gap-y-6 md:space-y-0 my-6"
  >
    <CardsAdd
      v-for="item in productDat"
      :key="item.id"
      :options="item"
      @addToFavorites="addToFavorites"
    />
  </div>
</template>

<script setup lang="ts">
const items = await useFetch(
  'https://toshkent-parfum.uz/api/v1/products/?size=12&page=1&is_recommendation=true',
)
const productDat = computed(() => items.data.value?.results)

const favoriteItems = ref<any[]>([])
const localItem = process.client ? localStorage.getItem('list') : null

if (localItem) {
  console.log(localItem)

  favoriteItems.value = JSON.parse(localItem)
}

const addToFavorites = (item: any) => {
  favoriteItems.value.push(item)
  localStorage.setItem('list', JSON.stringify(favoriteItems.value))
}

const removeFromFavorites = (item: any) => {
  const index = favoriteItems.value.findIndex(
    (favItem) => favItem.id === item.id,
  )
  if (index !== -1) {
    favoriteItems.value.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(favoriteItems.value))
  }
}

const show = ref(false)
const product = await useFetch(
  'https://toshkent-parfum.uz/api/v1/products/?size=12&page=1&is_recommendation=true',
)
const productData = computed(() => product.data.value?.results)

import { products } from '~/data/data'
import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()
</script>
