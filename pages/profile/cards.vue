<template>
    <div class="flex items-center justify-between mb-5 pb-2 border-b-[1.2px] border-b-slate-100">
       <h2 class="text-proxima text-black font-bold text-xl  ">
        Мои карты
       </h2>
        <UIButton
            text="Добавить"
            size="md"
            variant="light"
            wrapperClass=""
            class="text-red"
            @click="openDialog"
          >
            <template #prefix> <i class="icon-add-circle font-bold text-red"></i>
             </template>
          </UIButton>
    </div>
  

  <!-- modal card -->
  <UIDialog
      v-bind="{ show: dialogVisible }"
      @on-close="closeDialog"
      :size="['min']"
    >
       <template #header>
        <div class="p-5">Добавить карту</div>
       <i
        class="icon-close-circle relative -left-3 text-4xl text-gray-300 top-0 cursor-pointer active:scale-95 hover:text-red duration-300 transition-all ease-in-out"
        @click="closeDialog"
      ></i>
      </template>
          <form action="">
                <div class="flex items-center justify-between gap-3  w-[90%] relative left-5">
                    <div class="w-[70%] text-start"> 
                        <FormLabel text="Номер карты"/>
                          <FormInput 
                          v-maska="'####-####-####-####'"
                          v-model="formData.number"
                          :error="v$.number.$error"
                          placeholder="____-____-____-____"/>
                        
                    </div>
                    <div class="w-[25%] text-start">
                          <FormLabel text="Срок"/>
                          <FormInput
                          v-maska="'##/##'"
                          v-model="formData.chapter"
                          :error="v$.chapter.$error"
                          placeholder="__/__/"/>
                    </div>
                </div> 
          </form>
      <template #footer>
        <div class="flex justify-center w-full">
        <UIButton
        @click="submitForm"
            text="Отправить"
            variant="red"
            size="md"
            class="mt-3 w-[90%] mb-5"
          >
          </UIButton>
       
        </div>
      </template>
  </UIDialog>

              <!-- pusto -->
       <!-- <div class="w-full  justify-center items-center flex">
            <div class="w-[50%]  pb-[155px]  mt-20">
            <center>
                    <img src="/images/nothing.png" alt="">
                <h2 class="text-black font-proxima font-bold text-2xl mt-5">Пусто 😕</h2>
                <p class="text-gray-400 text-md ">У вас еще нет карты</p>

            </center>
            </div>
       </div> -->


            <!-- cards -->
    <div class="grid grid-cols-2  gap-3 w-full ">
        <div
        
         class="border-2  rounded-md border-slate-100 p-2  flex items-center justify-between cursor-pointer">
            <div class="flex items-center justify-between gap-2">
                 <div
                 @click="openD"
                  class="p-3 bg-slate-800 rounded-md">
                    <img src="/images/humo.png" alt="">
                </div>
                <p class="text-black font-bold font-proxima text-lg">8600 81** **** 1234 </p>
            </div>
            <i 
            @click="openTrash"
            class="icon-trash hover:text-red cursor-pointer transition-500 ease-out duration-500 text-2xl text-gray-400"></i>
        </div>
        <div
         class="border-2  rounded-md border-slate-100 p-2  flex items-center justify-between cursor-pointer">
            <div class="flex items-center justify-between gap-2">
                 <div
                 @click="openD"
                  class="p-3 bg-slate-800 rounded-md">
                    <img src="/images/humo.png" alt="">
                </div>
                <p class="text-black font-bold font-proxima text-lg">8600 81** **** 1234 </p>
            </div>
            <i
            @click="openTrash"
             class="icon-trash hover:text-red cursor-pointer transition-500 ease-out duration-500 text-2xl text-gray-400"></i>
        </div>

    </div>


  <UIDialog
      v-bind="{ show: Visible }"
      @on-close="closeD"
      :size="['min']"
    >
       <template #header>
        <div class="p-5">Добавить карту</div>
       <i
        class="icon-close-circle relative -left-3 text-4xl text-gray-300 top-0 cursor-pointer active:scale-95 hover:text-red duration-300 transition-all ease-in-out"
        @click="closeD"
      ></i>
      </template>
      <div class="w-[90%] left-5 relative text-start">
            <FormLabel text="Называния карты"  class="font-bold font-proxima  text-lg text-black"/>
            <FormInput placeholder="Называния карты"
            v-model="formData.cardName"
            :error="v$.cardName.$error"
             />  
      </div>
     <div class="flex items-center justify-between gap-3 mt-5  w-[90%] relative left-5">
          <div class="w-[70%] flex-start text-start"> 
                          <FormLabel text="Номер карты"/>
                          <FormInput 
                          v-maska="'####-####-####-####'"
                          v-model="formData.numberCard"
                          :error="v$.numberCard.$error"
                          placeholder="____-____-____-____"/>                       
          </div> 
           <div class="w-[25%] text-start">
                         <FormLabel text="Срок"/>
                          <FormInput
                          v-maska="'##/##'"
                          v-model="formData.chapterCard"
                          :error="v$.chapterCard.$error"
                          placeholder="__/__/"/>
          </div>
      </div> 
      <template #footer>
        <div class="flex mt-3  mb-5 justify-between items-center w-[90%] relative left-5">
           <div class=" flex items-center justify-center p-[9px] bg-light text-red hover:bg-light-extra rounded-md">
              <i class="icon-trash text-red cursor-pointer transition-500 ease-out duration-500 text-2xl"></i>
           </div>
        <UIButton
        @click="submitForm"
            text="Сохранить"
            variant="red"
            size="md"
            class="w-[80%]"
          >
          </UIButton>
       
        </div>
      </template>
  </UIDialog>


  <UIDialog
      v-bind="{ show: trashVisible }"
      @on-close="closeTrash"
      :size="['min']"
    >
       <template #header>
        <div class="p-5">Удалить карту</div>
       <i
        class="icon-close-circle relative -left-3 text-4xl text-gray-300 top-0 cursor-pointer active:scale-95 hover:text-red duration-300 transition-all ease-in-out"
        @click="closeTrash"
      ></i>
      </template>
      <h4 class="text-start  relative left-5 mb-3 mt-2 text-gray-500">Вы действительно хотите удалить эту карту?</h4>
        
      <template #footer>
        <div class="flex mt-3 gap-4 mb-5 justify-between items-center w-[90%] relative left-5">
        <UIButton
            text="Отменить"
            variant="light"
            size="md"
            class="w-[50%]"
            @click="closeTrash"
          >
          </UIButton>
           <UIButton
            text="Удалить"
            variant="red"
            size="md"
            class="w-[50%]"
            @click="closeTrash"
          >
          </UIButton>
       
        </div>
      </template>
  </UIDialog>



</template>
<script setup lang="ts">

import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
const rules = computed(() => {
  return {
    number: { required },
    numberCard: { required },
    cardName: { required },
    chapter: { required },
    chapterCard: { required },


  }
})
const formData = reactive({
  number: '',
  numberCard: '',
  chapterCard: '',
  cardName: '',

})
const v$ = useVuelidate(rules, formData)
const submitForm = () => {
  v$.value.$touch()
}
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



const Visible = ref(false);

const openD = () => {
  Visible.value = true;
};

const closeD = () => {
  Visible.value = false;
};


const trashVisible = ref(false);

const openTrash = () => {
  trashVisible.value = true;
};

const closeTrash = () => {
  trashVisible.value = false;
};
</script>