<template>
 <div class="h-full">
  <Transition mode="out-in" name="fade">
   <AuthResetPasswordPhone v-if="currentStep === 'info'" @on-change="currentStep = $event" :form="{v$, values: form}"/>
    <AuthOTP v-else-if="currentStep === 'otp'" @on-change="currentStep = $event" :form="{v$, values:form}"/>
    <AuthRegisterPassword v-else-if="currentStep === 'password'" @on-change="currentStep = $event" :form="{v$, values:form}"/>
  </Transition>
 </div>
</template>
<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { maxLength, minLength, required, sameAs  } from '@vuelidate/validators'
import parsePhoneNumber from 'libphonenumber-js'
const steps ={
  info: 'info',
  otp: 'otp',
  password: 'password'
}
const currentStep = ref('info')


const form = ref({
  name: '',
  phone: '',
  otp: '',
  password: '',
  confirmPassword: ''
})
function isPhone(value: string) {
  if (!value?.length) {
    return true
  }
  const phoneNumber = parsePhoneNumber(value, 'UZ')
  return phoneNumber?.isValid()
}
const rules = computed(()=>{
  return{
    name: { required },
    phone: { required, isPhone, minLength: minLength(14)},
    otp: {required, minLength: minLength(6), maxLength: maxLength(6)},
    password: {required},
    confirmPassword: {required, sameAs: sameAs(form.value.password)},
  }
})
const v$ = useVuelidate(rules, form)
</script>