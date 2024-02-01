<template>
  <div class="border-t-4 pt-9 border-[#F62458]">
    <div
      class="container bg-gray-50 py-4 px-5 flex items-center justify-between rounded-xl max-lg:flex-wrap"
    >
      <div class="flex items-center max-md:block">
        <img src="/images/logo.svg" alt="parfum logo" class="cursor-pointer" />
        <div class="flex items-center max-lg:mt-2 max-md:my-2 md:hidden">
        <img src="/images/appstore.svg" alt="App store icon" class="mr-4 cursor-pointer">
        <img src="/images/playmarket.svg" alt="Play market icon" class="cursor-pointer">
    </div>
   <p class="flex items-center font-semibold text-gray-700 hover:text-[#F62458] transition-all duration-300 ease-in-out group"> <i class="icon-phone-calling text-2xl mx-2 text-gray group-hover:text-[#F62458] transition-all duration-300 ease-in-out"></i>998 (95) 145 55 66</p>
   <p class="flex items-center font-semibold text-gray-700 mx-4 hover:text-[#F62458] transition-all duration-300 ease-in-out group"><i class="icon-letter-regular text-2xl mx-2 text-gray group-hover:text-[#F62458] transition-all duration-300 ease-in-out"></i>tashkentparfume@gmail.com
</p>
      </div>
      <div class="flex items-center max-lg:mt-2 max-md:hidden">
        <img src="/images/appstore.svg" alt="App store icon" class="mr-4 cursor-pointer">
        <img src="/images/playmarket.svg" alt="Play market icon" class="cursor-pointer">
    </div>
    </div>
    <div class="container grid grid-cols-2 my-7 gap-12 p-0 max-lg:grid-cols-1">
        <div class="flex justify-between items-center max-md:grid max-md:grid-cols-2">
            <ul>
                <p class="text-dark text-base mb-3 font-semibold">{{ $t('forCustomers') }}</p>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('aboutStore') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('recommendation') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('brands') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('confidentiality') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('feedback') }}</li>
            </ul>
            <ul>
                <p class="text-dark text-base mb-3 font-semibold">{{ $t('sections') }}</p>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('perfumery') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('bodyAndBath') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('hair') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('face') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer">{{ $t('allSections') }}</li>
            </ul>
            <ul>
                <p class="text-dark text-base mb-3 font-semibold">{{ $t('user') }}</p>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer"
                @click="openAuth('login')"
                >{{ $t('enter') }}</li>
                <li class="text-gray-100 font-semibold text-sm my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer"
                @click="openAuth('register')"
                >{{ $t('registration') }}</li>
                <p class="text-dark text-base mb-3 font-semibold">{{ $t('ourSocials') }}</p>
               <div class="flex items-center">
                <i  class="text-gray-100 font-semibold text-2xl my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out  cursor-pointer icon-facebook-square"></i>
                <i  class="text-gray-100 font-semibold text-2xl my-2 hover:text-[#F62458] mx-3 transition-all duration-300 ease-in-out cursor-pointer icon-instagram-square"></i>
                <i  class="text-gray-100 font-semibold text-2xl my-2 hover:text-[#F62458] transition-all duration-300 ease-in-out cursor-pointer icon-telegram-square"></i>
               </div>
                
            </ul>
        </div>
        <div class="bg-gray-50 p-5 rounded-xl flex items-center justify-between max-lg:max-w-[85%] max-lg:w-full max-lg:m-auto max-md:max-w-[100%]">
            <div class="w-full">
                <p class="text-xl font-bold text-dark">{{ $t('telegramNews') }}</p>
                <div class="bg-blue p-3 flex items-center rounded-xl mt-3 border border-transparent group hover:border hover:border-blue-600 hover:text-blue-600 transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="/images/telegram.svg" alt="telegram icon" class="mr-2">
                   {{ $t('viaTelegram') }}</div>
            </div>
            <img src="/images/Send.svg" alt="SEND LOGO" class="ml-10">
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import auth from '~/middleware/auth';
import { useAuthStore } from '~/stores/auth';
const authStore = useAuthStore()
const show = computed(() => authStore.modalShow)
const currentStep = computed(() => authStore.currentStep)
const openAuth = (e: string) => {
  authStore.currentStep = e
  authStore.modalShow = true
}
</script>