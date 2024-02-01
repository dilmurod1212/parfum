<template>
<div class="newsItems      w-[30%]">
<div class=" gap-[10px]  rounded-lg bg-white  p-5">
            <div class="flex pb-3 justify-between items-center border-b-[1px] border-slate-100">
              <p class="font-proxima text-[20px] leading-7 font-bold text-slate-400">Итого:</p>
              <p class="text-black text-xl font-bold"> {{ cartStore.total }} <span class="text-slate-400 font-bold">uzs</span></p>
            </div>
             <div class="flex mt-2 mb-2 justify-between items-center border-b-[1px] border-slate-100  h-[40px]">
              <p class="font-proxima font-bold text-[16px] leading-7 text-slate-500">Всего:</p>
              <p class="font-bold  text-black">{{ cartStore.total }} uzs</p>
            </div>
             <div class="flex mt-2 mb-2 justify-between items-center border-b-[1px] border-slate-100 h-[40px]">
              <p class="font-proxima font-bold text-[16px] leading-7 text-slate-500">Скидка:</p>
              <p class="font-bold  text-black"> 0 uzs</p>
            </div>
             <div class="flex mt-2 mb-2 justify-between items-center border-b-[1px] border-slate-100 h-[40px]">
              <p class="font-proxima font-bold text-[16px] leading-7 text-slate-500">Использованный кешбек:</p>
              <p class="font-bold  text-black"> 0 uzs</p>
            </div>
             <div class="flex mt-2 mb-2 justify-between items-center  h-[40px]">
              <p class="font-proxima font-bold text-[16px] leading-7 text-slate-500">НДС:</p>
              <p class="font-bold  text-black"> 0 uzs (12%)</p>
            </div>
             <div class="flex w-full justify-between  items-center  h-[40px]">
              <p class="font-proxima font-bold text-red text-[16px] leading-7">Кэшбек:</p>
              <p class="font-bold  text-red"> 0 uzs</p>
            </div>
             <div class="flex mt-2 mb-2 justify-between  items-center  h-[40px]">
              <p class="font-proxima font-bold text-[16px] leading-7 text-slate-500">Остаток кэшбека:</p>
              <p class="font-bold  text-black"> 0 uzs</p>
            </div>
             <div 
             @click="removeElement"
             class="flex mt-2 mb-2 gap-2 justify-start  items-center cursor-pointer  h-[40px]">
              <p class="font-proxima font-bold text-[16px] leading-7 text-slate-700">Товары </p>
              <p class="font-bold  text-slate-500">({{ cartStore.productsTotal }})</p>
              <i 
              v-if="shouldRenderLink"
              class="icon-chevron-down transition-all duration-300 ease-in-out rotate-180 font-bold text-2xl "></i>
              <i 
              v-if="!shouldRenderLink"
              class="icon-chevron-down transition-all duration-300 ease-in-out font-bold text-2xl "></i>

            </div>

                <div v-if="shouldRenderLink" class="transition-all duration-1000 ease-out">
                    <div v-if="cartStore.cartContent.length" class="w-full ">
                                <div v-for="item in cartStore.cartContent" :key="item.id" class="mt-4 flex items-start justify-between gap-4">
                                    <div class="overflow-x-hidden w-[300px]">
                                      <p class="font-proxima text-md   font-bold text-slate-500">{{ item.name }}</p>
                                      <p class="text-black text-sm capitalize">{{ item.price }} uzs x {{ item.quantity}}</p>
                                    </div>
                                      <p class="text-black text-bold w-[200px] text-md"><strong>{{ item.price }} UZS</strong></p>
                                </div>
                    </div>
                </div>
    </div>
   <NuxtLink to="/ordering">
     <UIButton
            text="Перейти к оформлению"
            variant="red"
            size="md"
            class="mt-3 w-full mb-5"
          >
    </UIButton>
   </NuxtLink>
</div>
  
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart'
const cartStore = useCartStore()

const shouldRenderLink = ref(false)
function removeElement() {
    shouldRenderLink.value = !shouldRenderLink.value
}
</script>

