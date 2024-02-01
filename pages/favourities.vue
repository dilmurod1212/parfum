<template>
  <div class="bg-slate-100">

    <div class="container">
      <UIBreadCrumb v-bind="{ routes }" />
    </div>
     <h1 class="container font-bold text-3xl text-black font-proxima mt-5">Избранные</h1>
        <div class="container pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-x-6 gap-y-6 md:space-y-0 my-6">
                <div v-for="favoriteItem in favoriteItems" :key="favoriteItem.id">
                              <div
                                class="product-card relative border border-gray-50 hover:border-gray-100 rounded-xl bg-gray-50 group cursor-pointer transition-all overflow-hidden flex flex-col"
                              >
                                <div v-show="favoriteItem.sale_price" class="absolute top-3 left-2 z-10">
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
                              
                                  class="favorite-icon p-[6px] z-10 rounded-md bg-slate-100 border border-white hover:border-red/70 group inline-block absolute top-3 right-3 transition-all"
                                >
                                  <i
                                  @click="removeFromFavorites(favoriteItem)"
                                    class="icon-heart-solid  text-xl m-auto block text-red  font-bold hover:scale-110 active:icon-heart transition-all"
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
                                          <SwiperSlide>
                                            <img
                                              src="/images/category2.png"
                                              alt=""
                                              class="min-w-[100px] w-full aspect-square object-cover bg-white"
                                            />
                                          </SwiperSlide>
                                        </Swiper>
                                      </div>
                                <div class="p-2 flex flex-col grow">
                                  <nuxt-link to="/" class="flex flex-col grow">
                                    <p class="text-xs text-red line-clamp-1">
                                      {{ favoriteItem.manufacturer.title }}
                                    </p>
                                    <h2
                                      class="line-clamp-2 text-sm mt-1 group-hover:text-red transition-colors flex-grow"
                                    >
                                      {{ favoriteItem.title }}
                                    </h2>
                                    <div class="my-auto">
                                      <p v-show="favoriteItem.sale_price" class="text-red text-xs line-through">
                                        {{favoriteItem.sale_price }} UZS
                                      </p>
                                      <p class="my-auto font-bold">{{ favoriteItem.price }} UZS</p>
                                      <div>
                                        <span><i class="icon-star text-[#F8AF02]"></i></span>
                                        <span><i class="icon-star text-[#F8AF02]"></i></span>
                                        <span><i class="icon-star text-[#F8AF02]"></i></span>
                                        <span><i class="icon-star text-[#F8AF02]"></i></span>
                                        <span><i class="icon-star text-[#F8AF02]"></i></span>
                                      </div>
                                    </div>
                                  </nuxt-link>
                                  <UIButton
                                  text="В корзину" class="w-full mt-auto">
                                    <template #prefix>
                                      <i class="icon-basket-regular text-xl"></i>
                                    </template>
                                  </UIButton>
                                </div>
                              </div>
                </div>       
        </div>
              
<!-- pusto -->
            <div v-if="favoriteItems.length === 0">
                    <div class="flex items-center justify-center mt-10 pb-20">
                        <div>
                          
                        <center>
                          <img src="/images/pusto.svg" alt="">
                          <p class="font-bold text-3xl font-proxima text-black">Пусто 😕</p>
                          <p class="text-gray-500 font-proxima ">Вы еще не добавили ни одного товара в корзину</p>
                        </center>
                        </div>
                    </div>
            </div>
<!-- pusto -->
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
const items = await useFetch(
  'https://toshkent-parfum.uz/api/v1/products/?size=12&page=1&is_recommendation=true'
)
const productDat = computed(() => items.data.value?.results)


const favoriteItems = ref<any[]>([]);
const localItem = process.client ? localStorage.getItem('list') : null

if(localItem) { 
  console.log(localItem);
  
  favoriteItems.value = JSON.parse(localItem)
}

const addToFavorites = (item:any) => {
  favoriteItems.value.push(item);
  localStorage.setItem('list', JSON.stringify(favoriteItems.value))
};


const removeFromFavorites = (item: any) => {
  const index = favoriteItems.value.findIndex((favItem) => favItem.id === item.id);
  if (index !== -1) {
    favoriteItems.value.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(favoriteItems.value));
  }
};


const route = useRoute()
const routes = computed(() => [
  {
    label: 'Избранные',
    link: '/',
  },
])
</script>
<style>
.product-card:hover {
  box-shadow: 0 8px 40px #2828281f;
}

.product-swiper .swiper-pagination-bullet {
  background-color: black !important;
  width: 4px;
  height: 4px;
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
