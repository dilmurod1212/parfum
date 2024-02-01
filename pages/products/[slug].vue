<template>
  <div class="container">
    <UIBreadCrumb v-bind="{ routes }" />
    <!--    <pre>{{ product }}</pre>-->
    <div class="grid grid-cols-5 gap-5">
      <div class="col-span-4">
        <div class="flex border p-6 bg-white rounded-xl w-full">
          <div class="max-w-[300px]">
            <SectionPhotoSlider
              :img="product?.images"
              :activeSlideIndex="activeIndex"
              :product="product"
            />
          </div>
          <div class="ml-[25px] w-full">
            <div class="flex items-center justify-between">
              <ul>
                <li
                  class="text-sm text-gray cursor-pointer list-none p-1 rounded-md inline-block bg-gray-400"
                >
                  {{ product?.category?.title }}
                </li>
              </ul>
              <div class="flex items-center">
                <UIRatingStars />
                <p class="ml-1">({{ product?.rate }})</p>
              </div>
            </div>
            <p class="text-dark text-xl my-4 font-semibold border-b pb-4">
              {{ product?.title }}
            </p>
            <p class="text-dark text-base font-semibold">Тип: {{}}</p>
            <div class="flex items-center my-2">
              <img
                v-for="elements in 5"
                :key="elements"
                class="max-w-[36px] w-full max-h-[36px] h-full rounded-sm mr-3"
                src="https://swiperjs.com/demos/images/nature-1.jpg"
                alt=""
              />
            </div>
            <p class="text-dark text-base font-semibold">
              Объём:
              <span class="text-gray font-medium">
                {{ product?.unit_value }} мл</span
              >
            </p>
            <div class="flex items-center my-2 border-b pb-4">
              <p
                class="bg-white text-black text-base font-medium py-2 px-4 rounded-md cursor-pointer hover:border-red border-2"
              >
                {{ product?.unit_value }} мл
              </p>
            </div>
            <p class="text-dark text-2xl font-semibold">
              {{ formatMoneyDecimal(product?.price) }} UZS
            </p>
            <p
              class="text-red text-xl mb-7"
              :class="[
                product?.price_without_discount
                  ? 'line-through'
                  : '!text-black !text-[40px]',
              ]"
            >
              {{
                product.price_without_discount
                  ? product.price_without_discount
                  : '----'
              }}
            </p>
            <div class="flex items-center my-4 w-full">
              <UIButton class="w-full" text="Добавить в корзину">
                <template #prefix>
                  <i class="icon-basket text-xl"></i>
                </template>
              </UIButton>
              <UIButton class="w-full mx-3" variant="gray" text="Поделиться">
                <template #prefix>
                  <i class="icon-basket text-xl"></i>
                </template>
              </UIButton>
              <UIButton class="max-[50px] group" variant="gray" text="">
                <template #suffix>
                  <i class="icon-heart text-xl group-hover:text-red m-auto"></i>
                </template>
              </UIButton>
            </div>
          </div>
        </div>
        <div class="rounded-xl border my-6 p-6 bg-white">
          <p class="text-[32px] font-semibold text-dark mb-5">О продукте</p>

          <span class="font-semibold text-lg">Описание:</span>
          <div
            class="flex flex-col my-1 mb-10"
            v-html="product?.description"
          ></div>

          <div>
            <p class="font-semibold text-black flex flex-col">
              <span class="text-gray-extra text-base">Год выпуска:</span
              >{{ product?.year }}
            </p>
            <p class="font-semibold text-black flex flex-col my-3">
              <span class="text-gray-extra text-base">Объём:</span
              >{{ product?.weight }}
            </p>
            <p class="font-semibold text-black flex flex-col my-3">
              <span class="text-gray-extra text-base">Бренд:</span
              >{{ product?.manufacturer?.title }}
            </p>
            <p class="font-semibold text-black flex flex-col my-3">
              <span class="text-gray-extra text-base">Страна изготовитель:</span
              >{{ product?.manufactured_country }}
            </p>
            <p class="font-semibold text-black flex flex-col">
              <span class="text-gray-extra text-base">Целевая аудитория:</span
              >{{ product?.targeted_audience }}
            </p>
          </div>
        </div>
        <div class="rounded-xl border my-6 p-6 bg-white">
          <div class="flex items-center justify-between">
            <p class="text-[32px] font-semibold text-dark">
              Отзывы
              <span class="text-gray text-lg"
                >({{ product?.comment_count }})</span
              >
            </p>
            <UIButton text="добавить отзыв" variant="gray" />
          </div>
          <div>
            <div class="" v-if="product?.comment_count">
              <div class="flex items-center my-5 bg-gray-50 p-4 rounded-md">
                <div class="mr-5">
                  <p class="text-black text-[32px] font-semibold">4.5</p>
                  <UIRatingStars :rating="product?.rate" />
                  <p>({{ product?.rate + ' отзыва' }})</p>
                </div>
                <div class="pl-5 border-l">
                  <UIRating percentage="70" sequence="1" />
                  <UIRating percentage="55" sequence="2" />
                  <UIRating percentage="20" sequence="3" />
                  <UIRating percentage="25" sequence="4" />
                  <UIRating percentage="10" sequence="5" />
                </div>
              </div>
              <UIComment />
            </div>
            <div v-else class="mt-14">
              <img src="/images/Bill.svg" alt="" class="m-auto" />
              <p class="text-dark font-bold text-2xl text-center">
                Ещё нет отзывов
              </p>
              <p class="text-gray text-md font-semibold text-center">
                Оставленные отзывы будут видны всем
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <p class="text-[32px] font-semibold text-dark">Схожие продукты</p>
          <p
            class="flex items-center text-lg text-gray font-medium hover:text-red cursor-pointer transition-all duration-300 ease-in-out"
          >
            Все товары
            <i class="icon-arrow-right text-xl font-semibold ml-2"></i>
          </p>
        </div>
        <div class="grid grid-cols-4 gap-4 my-6">
          <CardsProduct v-for="el in similarData" :option="el" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/virtual'

import { Pagination, Navigation, Virtual } from 'swiper/modules'
import Dialog from '~/components/Cards/Dialog.vue'
const modules = reactive([Pagination, Navigation, Virtual])
const route = useRoute()
const activeIndex = ref(1)
function activeSlide(idx: number) {
  activeIndex.value = idx
}
const isHeartSolid = ref(false)
const slides = ref(
  Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`),
)
let swiperRef = null
let appendNumber = 500
let prependNumber = 1

const setSwiperRef = (swiper: any) => {
  swiperRef = swiper
}
const slideTo = (index: any) => {
  swiperRef.slideTo(index - 1, 0)
}
const append = () => {
  slides.value = [...slides.value, 'Slide ' + ++appendNumber]
}
const prepend = () => {
  slides.value = [
    `Slide ${prependNumber - 2}`,
    `Slide ${prependNumber - 1}`,
    ...slides.value,
  ]
  prependNumber -= 2
  swiperRef.slideTo(swiperRef.activeIndex + 2, 0)
}
const rating = ref(0)
const stars = [1, 2, 3, 4, 5]
const setRating = (newRating: any) => {
  rating.value = newRating
}
const { data } = await useFetch(`
https://toshkent-parfum.uz/api/v1/products/detail/`)
const product = ref({})
async function fetchData(el: any) {
  const { data } = await useFetch(
    `https://toshkent-parfum.uz/api/v1/products/detail/${el}`,
  )
  const productDetail = computed(() => data.value)
  product.value = productDetail.value
}

const routes = computed(() => [
  {
    label: 'Продукты',
    link: '/',
  },
  {
    label: product.value.title,
  },
])
onMounted(() => {
  fetchData(route.params?.slug)
})
// watch(
//   () => route.params?.slug,
//   () => {
//     fetchData(route.params?.slug)
//   },
// )

const similarData = ref([])
async function fetchSimillar() {
  const { data } = await useFetch(
    `https://toshkent-parfum.uz/api/v1/products/67193/similar/?size=4`,
  )
  similarData.value = data.value?.results
}
fetchSimillar()
</script>
