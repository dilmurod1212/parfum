<template>
  <div class="flex flex-col">
    <div
      class="max-w-[300px] w-full overflow-hidden rounded-xl max-h-[455px] h-[365px]"
    >
      <Swiper
        :effect="'cube'"
        :grabCursor="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :cubeEffect="{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }"
        :pagination="false"
        :modules="modules"
        class="mySwiper"
      >
        <SwiperSlide v-for="(el, idx) in img" :key="idx"
          ><img :src="el?.default"
        /></SwiperSlide>
      </Swiper>
    </div>
    <div class="w-full my-4">
      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="5"
        :slidesPerView="6"
        :centeredSlides="true"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(slideContent, index) in product?.images"
          :key="index"
          :virtualIndex="index"
          class=" "
        >
          <div class="h-[32px] w-[32px] overflow-hidden rounded">
            <img
              class="w-full h-full !rounded-none cursor-pointer border-2 border-gray-200"
              :src="slideContent?.default"
              alt=""
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import { EffectCube, Pagination, Thumbs } from 'swiper/modules'
const modules = reactive([EffectCube, Pagination, Thumbs])
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
const props = defineProps<{
  img: any
  activeSlideIndex: number
  product: object
}>()
</script>
<style>
.swiper {
  height: 100%;
  border-radius: 12px;
}
.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
</style>
