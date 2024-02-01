<template>
<div>
    <h2 class="text-proxima text-black font-bold text-xl mb-5 pb-2 border-b-[1.2px] border-b-slate-100 ">Помощь</h2>
    <div class="border-2 border-slate-100 rounded-md flex items-center justify-between ">
        <div class="flex w-[50%] gap-3 items-center justify-start p-[16px]">
            <i class="icon-phone text-3xl text-red font-bold"></i>
            <div>
                <p class="text-slate-300 font-proxima text-xl">Номер телефона</p>
                <a href="+998 71 234 56 78" class="text-black font-bold hover:text-red transition-600 duration-700 font-proxima text-xl">+998 71 234 56 78</a>
            </div>
        </div>

        <div class="flex w-[50%] gap-3 items-center justify-start p-[16px] border-l-2 border-l-slate-100">
             <i class="icon-letter text-3xl text-red font-bold"></i>
            <div>
                <p class="text-slate-300 font-proxima text-xl">Электронная почта</p>
                <a href="tashkent.parfume@gmail.com" class="text-black font-bold hover:text-red transition-600 duration-700 font-proxima text-xl">tashkent.parfume@gmail.com</a>
            </div>
        </div>
    </div>
    <div class="rounded-md flex items-center gap-7 justify-between ">
         <div 
         @click="openDialog"
         class="new p-3 w-[50%] flex items-center rounded-xl mt-3 border border-transparent group hover:border hover:border-red-600 text-red  font-bold  active:scale-95  transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="/images/danger.png" alt="telegram icon" class="mr-2">
                   Сообщить об ошибке
            </div>
            <a href="https://t.me/toshkent_parfume" class="bg-blue w-[50%] p-3 flex items-center rounded-xl mt-3 border border-transparent group hover:border hover:border-blue-600 text-blue-700 font-bold  active:scale-95  transition-all duration-300 ease-in-out cursor-pointer">
                    <img src="/images/teg.png" alt="telegram icon" class="mr-2">
                   {{ $t('viaTelegram') }}
            </a>
     </div>


   <UIDialog
      v-bind="{ show: dialogVisible }"
      @on-close="closeDialog"
      :size="['min']"
    >


      <!-- Your dialog content goes here -->
       <template #header>
        <div class="p-5" >Сообщить об ошибке</div>
       <i
        class="icon-close-circle relative -left-3 text-4xl text-gray-300 top-0 cursor-pointer active:scale-95 hover:text-red duration-300 transition-all ease-in-out"
        @click="closeDialog"
      ></i>
      </template>
   

            <div>
              <UIFileUploader accept="image/*"/>
            </div>

      <template #footer>
        <div class="flex justify-center w-full">
        <UIButton
            text="Отправить"
            variant="red"
            size="md"
            class="mt-3 w-[90%] mb-5"
          >
          </UIButton>
       
        </div>
      </template>
    
    </UIDialog>




</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "profile"
})
const dialogVisible = ref(false);

const openDialog = () => {
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};
</script>
<style scoped>
.new{
 background: rgba(246, 37, 89, 0.1);
}
</style>