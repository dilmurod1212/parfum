<template>
  <div>
    <button @click="show = true">Click</button>
   <div class="flex justify-between items-center border max-w-[738px] w-full m-auto rounded-2xl">
    <UIDialog :show="show" @on-close="show = false" authMode="auth" class="w-[50%] flex flex-col">
        <template #header>
            <p class="font-semibold text-2xl">Добро пожаловать 👋</p>
        </template>
        <div class="flex-grow">
            hellllo
        </div>
        
    </UIDialog>
    <div class="w-[50%] bg-red py-10 px-6 rounded-r-2xl">
        <img src="/images/logo.svg" alt="" class="m-auto cursor-pointer">
        <p class="text-center text-white my-5">Парфюме́рия — совокупность изделий, применяемых для ароматизации тела, одежды, белья и воздуха в помещениях.</p>
        <img src="/images/AuthBanner.svg" alt="" class="m-auto">
        <div class="flex items-center justify-between pt-7">
            <img src="/images/appstore.svg" alt="" class="cursor-pointer">
            <img src="/images/playmarket.svg" alt="" class="cursor-pointer">
        </div>
    </div>
   </div>
  </div>
</template>
<script setup lang="ts">
const show = ref(false)

</script>