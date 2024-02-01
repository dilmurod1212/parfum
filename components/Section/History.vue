<template>
  <div class="py-8 bg-white" :class="wrapperClass">
    <UITitle :title="$t('stories')" wrapper-class="container mt-0" />
    <div class="main-swiper">
      <swiper
      :slidesPerView="3.2"
      :spaceBetween="10"
      :breakpoints="{
      '640': {
        slidesPerView: 4.4,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 5.8,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 6.4,
        spaceBetween: 20,
      },
       '1200': {
        slidesPerView: 8.4,
        spaceBetween: 20,
      },
    }"

      :speed="200"
      class="my-swiper relative">
      <swiper-slide
        v-slot="{isActive}"
        v-for="(el, idx) in stories"
        :key="el.id"
        @click="showHistoryModal(idx)"
        class="rounded-xl mr-4 p-1 sm:p-2   h-fit   border-[1.6px] border-[#CDCDD0] group cursor-pointer inline-block"
        :class="{ '!border-red': el.has_seen, 'bg-red':isActive }"
      >
        <img
          :src="el?.image_src.default"
          alt="history-card"
          class=" w-full object-cover rounded-lg group-hover:scale-95 transition-all"
          :class="{ 'img-shadow': el.has_seen }"
        />
      </swiper-slide>
    </swiper>
    </div>
    <UIModal
      v-if="modalStata"
      @on-click="showHistoryModal"
      :options="stories"
      :count="count"
      :show="modalStata"
    >
    </UIModal>
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
const store = useStoriesStore()
store.fetchStories()
const stories = computed(()=>{
  return store.storiesData
})


const modalStata = ref(false)
interface Props {
  options?: {
    id: number
    img: string
    descr?: string
    title?: string
  }[]
  wrapperClass?: string
}
defineProps<Props>()

const count = ref(0)
function showHistoryModal(idx: number): void {
  count.value = idx
  modalStata.value = !modalStata.value
  if (modalStata.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
}
</script>

<style scoped lang="scss">
.img-shadow {
  box-shadow: 0px 4px 16px 0px rgba(255, 142, 142, 0.4);
}

</style>
