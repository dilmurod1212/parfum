<template>
  <div class="brand-card bg-white rounded-2xl p-4 flex flex-col">
    <div class="flex items-center space-x-3 group">
      <div class="inline shrink-0">
        <div class=""></div>
      </div>
      <div class="flex flex-col w-full">
        <div class="inline">
          <div class="">
            <nuxt-link
              to="/products?manufacturers=809"
              class="text-dark font-semibold text-xl leading-130 duration-300 group-hover:text-red"
              >{{ option?.title }}</nuxt-link
            >
          </div>
        </div>
        <div class="inline">
          <div class="">
            <p class="text-gray-100 font-normal text-xs leading-[16px]"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 mt-4 grow-[1]">
      <nuxt-link :to="`products/${product1.slug}`" class="relative group col-span-2 max-h-[200px]"
        ><div class="inline">
          <div class="">
            <nuxt-img
              :src="product1.images[0].default"
              :alt="product1.title"
              class="w-full object-cover rounded-lg max-h-[200px] h-full"
            />
            <div
              class="shadow-img absolute bottom-0 p-2 duration-300 opacity-0 group-hover:opacity-100 flex items-end justify-start rounded-b-lg"
            >
              <p class="text-white font-semibold text-sm leading-[17px]">
                {{ formatNumber(product1.price) }} сум
              </p>
            </div>
          </div>
        </div></nuxt-link
      ><nuxt-link :to="`products/${product2.slug}`" class="relative group max-h-[120px]"
        ><div class="inline">
          <div class="">
            <nuxt-img
              :src="product2.images[0].default"
              alt="image-parfume"
              class="w-full object-cover rounded-lg h-[120px]"
            />
            <div
              class="shadow-img absolute bottom-0 p-2 duration-300 opacity-0 group-hover:opacity-100 flex items-end justify-start rounded-b-lg"
            >
              <p class="text-white font-semibold text-sm leading-[17px]">
                {{ formatNumber(product2.price) }} сум
              </p>
            </div>
          </div>
        </div></nuxt-link
      ><nuxt-link :to="`products/${product3.slug}`" class="relative group max-h-[120px]"
        ><div class="inline">
          <div class="">
            <nuxt-img
              :src="product3.images[0].default"
              alt="image-parfume"
              class="w-full object-cover rounded-lg h-[120px]"
            />
            <div
              class="shadow-img absolute bottom-0 p-2 duration-300 opacity-0 group-hover:opacity-100 flex items-end justify-start rounded-b-lg"
            >
              <p class="text-white font-semibold text-sm leading-[17px]">
                {{ formatNumber(product3.price) }} сум
              </p>
            </div>
          </div>
        </div></nuxt-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '@/utils/index'

interface Props {
  option: {
    id: number
    title: string
    products: {
      id: number
      title: string
      slug: string
      rate: number
      comment_count: number
      price: number
      sale_price: null
      result_price: number
      weight: number
      images: {
        default: string
        compressed: string
      }[]
    }[]
  }
}
const props = defineProps<Props>()
const product1 = props.option?.products[0]
const product2 = props.option?.products[1]
const product3 = props.option?.products[2]
</script>

<style scoped>
.brand-card:hover {
  border: 1px px solid #eaebed;
  box-shadow: 0 8px 40px #2828281f;
  cursor: pointer;
}
.shadow-img {
  background: linear-gradient(
    180deg,
    rgba(26, 26, 26, 0),
    rgba(26, 26, 26, 0.8) 73.96%,
    #1a1a1a
  );
  height: 80px;
  width: 100%;
}
</style>
