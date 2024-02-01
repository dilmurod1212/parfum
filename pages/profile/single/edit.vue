<template>
    <div>
        <h2 class="text-proxima text-black font-bold text-xl mb-5 pb-2 border-b-[1.2px] border-b-slate-100  ">
        Персональные данные
       </h2>
       <UIUploadingProfile accept="image/*"/>
      <form action="">
        
        <div class="flex items-center flex-wrap justify-between mt-5 gap-3 mb-5 pb-5 border-b-[1.2px] border-b-slate-100 ">
           <div class="w-[49%]">
            <FormLabel text="Имя"  class="font-bold font-proxima  text-lg text-black"/>
            <FormInput placeholder="Имя"
            v-model="formData.name"
            :error="v$.name.$error"
             />
            </div>
             <div class="w-[49%]">
            <FormLabel text="Фамилия"  class="font-bold font-proxima  text-lg text-black"/>
            <FormInput placeholder="Фамилия"
            v-model="formData.lastName"
            :error="v$.lastName.$error"
            
             />
            </div>
           <div class="w-[49%]">
            <FormLabel text="Адрес"  class="font-bold font-proxima  text-lg text-black"/>
            <FormInput placeholder="Адрес" 
            v-model="formData.address"
            :error="v$.address.$error"/>
            </div>
       </div>
      </form>
      

        <div class="w-full justify-end flex mt-5 gap-5">
                   <NuxtLink to="/profile/single">
                     <UIButton text="Отменить" size="md" variant="light" class="">
                        
                    </UIButton>
                   </NuxtLink>
                   
                     <UIButton 
                     @click="submitForm"
                     text="Сохранить" size="md" variant="red" class="">
                       
                    </UIButton>
                  
        </div>
    </div>
</template>
<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
const rules = computed(() => {
  return {
    name: { required },
    lastName: { required },
    address: { required },
  }
})
const formData = reactive({
  name: '',
  lastName: '',
  address: '',
})
const v$ = useVuelidate(rules, formData)
const submitForm = () => {
  v$.value.$touch()
}
definePageMeta({
  layout: "profile"
})
</script>

