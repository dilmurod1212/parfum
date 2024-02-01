<template>
  <div class="">
    <div
      @click="$emit('onClick')"
      class="overlay z-30 w-screen h-screen fixed top-0 left-0 bg-black/60 backdrop-blur-lg flex justify-center items-center"
      :class="overlayClass"
    ></div>
    <div
      class="z-40 fixed left-1/2 top-1/2 translate-y-[-50%] translate-x-[-50%] gap-1"
    >
<!--      <div class="w-full h-1 bg-gray-700 rounded-md mb-2">-->
<!--        <div-->
<!--          :style="{ width: progressBarWidth }"-->
<!--          class="bg-white h-full w-full rounded-md"-->
<!--        ></div>-->
<!--      </div>-->
      <Swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :initial-slide="count"
        :slidesPerView="1"
        :centeredSlides="true"
        :spaceBetween="20"
        :speed="900"
        :loop="true"
        :autoplay="{
          delay:2500,
          disableOnInteraction: false,
        }"
        :navigation="{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }"
        :modules="modules"
        class="w-[260px] p-4 mx-auto"
      >
        <SwiperSlide
          v-for="el in options"
          v-slot="{isActive}"
          class="relative my-auto max-w-[260px]"
        >
          <div class="w-[260px]">
            <div class="relative rounded-lg overflow-hidden flex z-40">
              <img
                :src="el?.image_src.default"
                alt="history-card"
                class="w-[260px] h-[450px] object-cover"
              />
              <div class="absolute bottom-0 left-0 p-3 pt-16 shadow-text">
                <p class="text-sm text-[#CDCDD0] mb-1">{{ el.title }}</p>
                <h2 class="text-lg text-white font-semibold">
                  {{ el.descr }}
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <div
          class="swiper-button-next-custom absolute top-1/2 -right-12 translate-y-[-50%] z-40 hover:bg-slate-600 bg-[#9E9EA5] rounded cursor-pointer p-2 inline-block transition-all"
        >
          <i
            class="icon-arrow-right text-2xl flex items-center justify-center text-white"
          ></i>
        </div>

        <div
          class="swiper-button-prev-custom absolute top-1/2 -left-12 translate-y-[-50%] z-40 hover:bg-slate-600 bg-[#9E9EA5] rounded cursor-pointer p-2 inline-block transition-all"
        >
          <i
            class="icon-arrow-left text-2xl flex items-center justify-center text-white"
          ></i>
        </div>
      </div>
      <UIButton
        text="Подробнее"
        variant="red"
        wrapper-class="w-full mt-1 z-40"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
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
interface Props {
  count:number
  show:boolean
  options: {
    id: number
    img_src:string
    has_seen:boolean
    items:{
      description:string
      id: number
      img_src:string
      has_seen:boolean
      title:string
      url:string
      video?:string
    }[]
  }
  overlayClass?: string
}
const props = defineProps<Props>()

// ------------
// const totalDuration = 4000
// const updateInterval = 100
//
// const reactiveData = props.options.map((item) => reactive(item))
// const currentData = ref(reactiveData[0])
// const progressBarWidth = ref('0%')
//
// let elapsedTime = 0
//
// const updateProgressBar = () => {
//   elapsedTime += updateInterval
//   const progressPercentage = (elapsedTime / totalDuration) * 100
//   progressBarWidth.value = `${progressPercentage}%`
//
//   if (elapsedTime >= totalDuration) {
//     elapsedTime = 0
//     progressBarWidth.value = '0%'
//     updateData()
//   }
// }
//
// const updateData = () => {
//   const currentIndex = reactiveData.indexOf(currentData.value)
//   const nextIndex = (currentIndex + 1) % reactiveData.length
//   currentData.value = reactiveData[nextIndex]
// }
//
// onMounted(() => {
//   setInterval(updateProgressBar, updateInterval)
// })
//
// onBeforeUnmount(() => {
//   clearInterval(updateProgressBar)
// })
//
// // -----------


</script>

<style scoped>
.shadow-text {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.01) 0%, #090808 100%);
}
</style>
