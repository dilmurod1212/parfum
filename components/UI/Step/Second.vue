<template>
    <div>
         <p class="text-2xl text-dark font-semibold border-b pb-4">
           Контактные данные
         </p>
         <form action="" class="grid grid-cols-2 gap-5">
           <div>
             <FormLabel text="Имя" />
             <FormInput placeholder=" "
             v-model="values.fullName"
             :error="v$.fullName.$error"
             />
           </div>
           <div>
             <FormLabel text="Номер телефона" />
             <FormInput
               v-model="values.number"
               v-maska="'(##) ###-##-##'"
               :error="v$.number.$error"
               placeholder="(__) ___-__-__"
               class="w-full rounded-lg"
             >
               <template #prefix>
                 <div
                   class="bg-gray-200 px-2 rounded-l-lg h-full flex-center"
                 >
                   +998
                 </div>
               </template>
             </FormInput>
           </div>
           <transition name="fade" mode="out-in">
             <div :key="addNewNum">
               <UIButton
                 text=" Добавить доп. номер телефона"
                 variant="light"
                 @click="addNewNum = true"
                 v-if="!addNewNum"
               >
                 <template #prefix>
                   <i
                     class="icon-phone border rounded-full mr-2 text-lg text-red border-red"
                   >
                   </i>
                 </template>
               </UIButton>

               <FormInput
                 v-else
                 v-model="values.phone"
                 v-maska="'(##) ###-##-##'"
                 placeholder="(__) ___-__-__"
                 class="w-full rounded-lg"
               >
                 <template #prefix>
                   <div
                     class="bg-gray-200 px-2 rounded-l-lg h-full flex-center"
                   >
                     +998
                   </div>
                 </template>
                 <template #suffix>
                   <i
                     class="icon-close-circle text-xl text-gray cursor-pointer"
                     @click="resetNewNumber"
                   ></i>
                 </template>
               </FormInput>
             </div>
           </transition>
         </form>
       </div>
</template>
<script setup lang="ts">
import Steps from 'primevue/steps'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
const addNewNum = ref(false)
interface Props{
  form: {
    v$: any
    values: any
  }
}
const props = defineProps<Props>()

const resetNewNumber = () => {
setTimeout(() => {
addNewNum.value = false
}, 100)
}
const { values, v$ } = unref(props.form)
</script>