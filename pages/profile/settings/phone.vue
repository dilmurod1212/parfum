<template>
<div>
    <h2 class="text-proxima text-black font-bold text-xl mb-5 pb-2 border-b-[1.2px] border-b-slate-100 ">Изменение номера телефона</h2> 
         <div class="flex items-center justify-between gap-4 mt-4 ">
                <div class="w-[50%]">
                    <h4 class="text-start font-bold font-proxima  text-black">Пароль</h4>
                    <input type="input"  placeholder="Введите пароль" class="text-black mt-2 w-full outline-none bg-slate-200 rounded-md p-2 placeholder:text-gray-400">
                </div> 
                <div class="w-[50%]">
                    <h4 class="text-start font-bold font-proxima  text-black">Новый номер телефона</h4>
                    <input type="number"  placeholder="(__) ___-__-__" class="text-black mt-2 w-full outline-none bg-slate-200 rounded-md p-2 placeholder:text-gray-400">
                </div> 
         </div>
         <div class="w-full flex items-center justify-end mt-5 gap-4">
               <NuxtLink to="/profile/settings">
                 <UIButton
                    text="Отменить"
                    variant="gray"
                    size="lg"
                    class=" px-9"
                >
                </UIButton>
               </NuxtLink>

                 <UIButton
                    text="Сохранить"
                    variant="red"
                    size="lg"
                    class=" px-9"
                >
                </UIButton>
         </div>
</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'profile'
})
</script>