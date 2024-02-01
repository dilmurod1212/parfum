<template>
<div class="bg-slate-100 p-3">
        <div class="container">
            <UIBreadCrumb v-bind="{ routes }" />
        </div>
        <div class="container ">
        <h1 class="font-bold text-3xl">Корзина</h1>
      
      <div class="flex justify-between gap-2 flex-wrap  items-start mt-5">  
        <div class="gap-5 rounded-xl p-[10px] bg-white w-[69%] sm:w-[100%]">
            <div  v-for="item in cartStore.cartContent" :key="item.id" class="flex last:border-none  border-b-[1.2px] border-b-slate-100 justify-between gap-[22px] p-3  items-center">
                      <div class="flex justify-between gap-5 ">
                        <div class="border-[1.2px] border-slate-200 rounded-lg  w-[110px] h-[120px] object-cover">
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
                      class="w-full h-full"
                    >
                      <SwiperSlide v-for="el in 4" :key="el" class="flex items-center justify-center">
                        <img
                          :src="item.image"
                          alt=""
                          class="rounded-lg w-[100px] h-[100px] mt-3 object-cover ml-2"
                        />
                      </SwiperSlide>
                    </Swiper>
                          </div>
                        </div>
                      <div class="relative">
                        <p class="font-proxima text-[19px] w-[320px]  font-bold text-black">{{ item.name }}</p>
                        <img :src="item.star" alt="">
                      
                        <div class="flex justify-start text-[14px] w-[170px] absolute bottom-0 cursor-pointer group">
                          <i class="icon-heart  text-slate-400 m-auto font-bold text-xl block group-hover:text-red group-hover:transition-all group-hover:duration-500 ease-out"></i>
                          <p class="text-slate-400 group-hover:text-red group-hover:transition-all group-hover:duration-500 ease-out">Добавить в избранное</p>
                        </div>
                      </div>
            </div>

                      <div class="flex   items-start justify-between  gap-[50px] border-l-[1px] p-[12px] border-slate-100">
                          <div>
                              <p class="text-black text-bold text-[20px]"><strong>{{ item.price }} UZS</strong></p>
                              <p class="text-slate-300 text-[14px] capitalize">{{ Number(item.price) * Number(item.quantity) }} uzs x {{ item.quantity}}</p>
                               <UICounter :max="5" :min="1"/>
                          </div>
                              <button @click="cartStore.remove(item.id)" class="bg-slate-200 p-[6px] hover:transition-400 hover:duration-500 ease-in-out flex items-center justify-center rounded-lg hover:bg-slate-300">
                                        <i class="icon-trash text-slate-500 "></i>
                              </button>
                            
                      </div>

            </div>

            <div 
            v-if="!cartStore.cartContent?.length"
            class="flex items-center justify-center mt-10 mb-10">
                <div>
                  
                 <center>
                  <img src="/images/pusto.svg" alt="">
                   <p class="font-bold text-3xl font-proxima text-black">Пусто 😕</p>
                  <p class="text-gray-500 font-proxima ">Вы еще не добавили ни одного товара в корзину</p>
                 </center>
                </div>
            </div>
        </div>
         <CardsSubtotal />
      </div>
    </div>
</div>

</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart"
const cartStore = useCartStore()



const route = useRoute();  
const routes = computed(() => [
  {
    label: "Корзина",
    link: '/',
  },
])


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
</script>
<style>
.product-swiper .swiper-pagination-bullet {
  background-color: black !important;
  width: 5px;
  height: 5px;
  transition: all 0.3s;
  margin-top: 20px !important;
}

.product-swiper .swiper-pagination-bullet-active {
  background: black !important;
  height: 5px;
  width: 5px;
  opacity: 4 !important;
  transition: all 0.3s;
  margin-top: 20px !important;
}
</style>
