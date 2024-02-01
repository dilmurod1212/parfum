<template>
  <div class="h-full">
    <Transition mode="out-in" name="fade">
      <AuthRegisterInfo v-if="currentStep === 'info'" @on-change="currentStep = $event" :form="{v$, values: form}"/>
      <AuthOTP v-else-if="currentStep === 'otp'" @on-change="currentStep = $event" :form="{v$, values: form}"/>
      <AuthRegisterPassword v-else-if="currentStep === 'password'" @on-change="currentStep = $event" :form="{v$, values:form}"/>
    </Transition>
  </div>
</template>
<script setup>
import { useVuelidate } from '@vuelidate/core'
import { maxLength, minLength, required, sameAs  } from '@vuelidate/validators'

const steps = {
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

const rules = computed(() => {
  return {
    name: { required },
    phone: { required, minLength: minLength(14) },
    otp: {required, minLength: minLength(6), maxLength: maxLength(6)},
    password: {required},
    confirmPassword: {required, sameAs: sameAs(form.value.password)},

  }
})
const v$ = useVuelidate(rules, form)
</script>