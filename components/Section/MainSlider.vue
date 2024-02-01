<template>
  <div class="">
    <swiper
      :slidesPerView="1.1"
      :v-model="swiperIndex"
      :options="swiperOptions"
      :centeredSlides="true"
      :grabCursor="true"
      :spaceBetween="20"
      :loop="true"
      :autoplay="{ delay: 2000 }"
      :speed="900"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '768': {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(el, idx) in info"
        :key="idx"
        v-slot="{ isActive }"
        class="swiper-slide rounded-md"
        data-swiper-autoplay="2000"
      >
        <div
          class="relative flex justify-start items-end object-cover bg-no-repeat bg-cover w-full max-sm:h-[250px] md:h-[300px] lg:h-[441px] flex-col rounded-md new"
          :style="{ backgroundImage: `url('${el.name}')` }"
        >
          <div
            :class="{ hello: isActive }"
            class="dev w-full h-full rounded-md"
          >
            <div class="absolute bottom-10 left-10">
              <p
                class="font-proxima text-white text-[40px] font-normal leading-7"
              >
                {{ el.title }}
              </p>
              <p
                class="mt-3 font-proxima text-white text-md font-normal leading-7"
              >
                {{ el.descr }}
              </p>
              <UIButton
                class="px-6 py-3 justify-center items-start gap-4 rounded-md bg-opacity-30 bg-white mt-3"
                text="Подробнее о товаре"
              ></UIButton>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
<script setup lang="ts">
const swiperIndex = ref(0)
const swiperOptions = ref({
  // Add Swiper options here (e.g., navigation, pagination)
  // For example:
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
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
const info = reactive([
  {
    id: 1,
    name: '/images/mainslider1.png',
    title: 'Коллекция самой лучшей парфюмерии',
    descr:
      '​Парфюмерия от премиумных  брендов как Dior, Armani, Carolina Herrera CH',
  },
  {
    id: 2,
    name: '/images/mainslider2.png',
    title: 'Премиум парфюмерия',
    descr:
      'Парфюмерия от премиумных  брендов как Dior, Armani, Carolina Herrera CH',
  },
  {
    id: 1,
    name: '/images/mainslider1.png',
    title: 'Коллекция самой лучшей парфюмерии',
    descr:
      'Парфюмерия от премиумных  брендов как Dior, Armani, Carolina Herrera CH',
  },
  {
    id: 3,
    name: '/images/mainslider2.png',
    title: 'Премиум парфюмерия',
    descr:
      'Парфюмерия от премиумных  брендов как Dior, Armani, Carolina Herrera CH',
  },
])
</script>
<style>
.dev {
  background: linear-gradient(150deg, #f7f8fa, rgba(190, 25, 25, 0.05) 100%);
}
.hello {
  background: linear-gradient(
    150deg,
    rgb(44, 43, 43) -30%,
    rgba(190, 25, 25, 0.05) 100%
  );
}
</style>
