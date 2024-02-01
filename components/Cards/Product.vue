<template>
  <div
    class="product-card relative border border-gray-50 hover:border-gray-100 rounded-xl bg-gray-50 group cursor-pointer transition-all overflow-hidden flex flex-col"
  >
    <div v-show="option?.sale_price" class="absolute top-3 left-2 z-10">
      <div class="">
        <div
          class="border border-solid border-white border-opacity-[36%] w-[54px] h-8 bg-green border-white/40 badge rounded-xl -rotate-[8deg] flex items-center justify-center text-2xl"
        >
          <i
            class="icon-sale text-white rotate-[8deg] inline-block leading-6"
          ></i>
        </div>
      </div>
    </div>
    <div
      @click="like = !like"
      class="favorite-icon p-[6px] z-10 rounded-md bg-white/60 border border-white hover:border-red/70 group inline-block absolute top-3 right-3 transition-all"
    >
      <i
        class="text-xl m-auto block text-red transition-all"
        :class="[
          like
            ? 'icon-heart-solid'
            : 'icon-heart text-red transition-all ease-linear duration-300',
        ]"
      ></i>
    </div>
    <div class="product-swiper">
      <Swiper
        :slidesPerView="1"
        :centeredSlides="true"
        :grabCursor="true"
        :spaceBetween="20"
        :loop="true"
        :speed="900"
        :modules="modules"
        :pagination="{ clickable: true }"
      >
        <SwiperSlide v-for="el in option.images">
          <nuxt-img
            :src="el.compressed"
            alt=""
            class="min-w-[100px] w-full aspect-square object-cover bg-white"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="p-2 flex flex-col grow">
      <nuxt-link
        :to="{
          path: `/products/${option.slug}`,
          params: { slug: option.slug },
        }"
        class="flex flex-col grow"
      >
        <p class="text-xs text-red line-clamp-1">
          {{ option.manufacturer.title }}
        </p>
        <h2
          class="line-clamp-2 text-sm mt-1 group-hover:text-red transition-colors flex-grow"
        >
          {{ option.title }}
        </h2>
        <div class="my-auto">
          <p v-show="option?.sale_price" class="text-red text-xs line-through">
            {{ formatMoneyDecimal(option.sale_price) }} UZS
          </p>
          <p class="my-auto font-bold">
            {{ formatMoneyDecimal(option.price) }} UZS
          </p>
          <div>
            <span><i class="icon-star text-[#F8AF02]"></i></span>
            <span><i class="icon-star text-[#F8AF02]"></i></span>
            <span><i class="icon-star text-[#F8AF02]"></i></span>
            <span><i class="icon-star text-[#F8AF02]"></i></span>
            <span><i class="icon-star text-[#F8AF02]"></i></span>
          </div>
        </div>
      </nuxt-link>
      <UIButton text="В корзину" class="w-full mt-auto">
        <template #prefix>
          <i class="icon-basket-regular text-xl"></i>
        </template>
      </UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">

const like = ref(false)

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/modules'
const modules = reactive([EffectCoverflow, Pagination, Navigation, Autoplay])

// https://toshkent-parfum.uz/api/v1/orders/cart/products/

// import { useFavoritesStore } from '~/stores/favourities';
// const favoritesStore = useFavoritesStore();
// const isFavorite = ref<boolean>(false);

// // Check if the current product is in favorites
// watchEffect(() => {
//   isFavorite.value = favoritesStore.favorites.includes(props.option.id);
// });

// const toggleFavorite = () => {
//   const productId = props.option.id;
//   if (isFavorite.value) {
//     favoritesStore.removeFromFavorites(productId);
//   } else {
//     favoritesStore.addToFavorites(productId);
//   }
// };

interface Props {
  option: {
    id: number
    title: string
    slug: string
    rate: number
    comment_count: number
    price: string
    sale_price: null
    result_price: string
    weight: string
    images: {
      default: string
      compressed: string
      extra_large: string
      large: string
      medium: string
      small: string
      extra_small: string
    }[]
    is_new: boolean
    is_liked: boolean
    is_cart: boolean
    unit: {
      id: number
      title: string
    }
    unit_value: number
    manufacturer: {
      id: number
      title: string
    }
    realtime_count: number
  }
}
defineProps<Props>()
</script>

<style>
.product-card:hover {
  box-shadow: 0 8px 40px #2828281f;
}

.product-swiper .swiper-pagination-bullet {
  background-color: black !important;
  width: 4px !important;
  height: 4px !important;
  transition: all 0.3s;
}

.product-swiper .swiper-pagination-bullet-active {
  background: black !important;
  height: 4px;
  width: 4px;
  opacity: 1 !important;
  transition: all 0.3s;
}
</style>
