<template>
  <transition name="fade" mode="out-in">
    <div class="text-left">
      <p class="font-semibold text-2xl">{{ $t('welcome') }}</p>
      <div class="my-[52px]">
        <p class="font-semibold text-xl">{{ $t('enter') }}</p>
        <form action="" class="pt-4 grow">
          <FormLabel :text="$t('phoneNumber')" />
          <FormInput
          v-model="formData.phone"
          v-maska="'(##) ###-##-##'"
          :error="v$.phone.$error"
          placeholder="(__) ___-__-__"
          class="w-full rounded-lg"
          @enter="submitForm"
          >
          <template #prefix>
            <div class="bg-gray-200 px-2 rounded-l-lg h-full flex-center">
              +998
            </div>
          </template>
        </FormInput>
          <FormLabel :text="$t('password')"/>
          <FormInput
           v-model="inputVal" 
          :type="inputType"
           :placeholder="$t('enterPassword')"
           :error="v$.password.$error"
           >
            <template #suffix>
                <i :class="['icon-eye text-2xl text-gray cursor-pointer', {'icon-eye-closed': showPassword}]" @click="checkInput"></i>
            </template>
          </FormInput>
        </form>
        <p @click="$emit('on-change', 'password')" class="text-red-100 text-sm text-right my-4 hover:text-red transition-all duration-300 ease-in-out cursor-pointer">{{ $t('forgetPassword') }}</p>
      </div>
      <div class="mt-auto">
      <UIButton :text="$t('enter')" :variant="['red']" class="w-full" @click="submitForm"/>
      <p class="subText">{{ $t('or') }}</p>
      <UIButton :text="$t('registration')" :variant="['gray']" class="w-full" @click="$emit('on-change', 'register')"/>
    </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required  } from '@vuelidate/validators'
import { useAuthStore } from '~/stores/auth'
const inputVal = ref('')
const showPassword =ref(false)
const checkInput =()=>{
   showPassword.value = !showPassword.value
}
const inputType = computed(()=> showPassword.value ? 'text' : 'password')

const formData = reactive({
  password: '',
  phone: '',
})
const rules = computed(() => {
  return {
    password: { required },
    phone: { required },
  }
})
const submitForm = async () => {
  v$.value.$touch()
  if (v$.value.$invalid) return
  emit('on-change', 'otp')
}
const v$ = useVuelidate(rules, formData)
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.subText {
  font-family: sans-serif;
  color: gray;
  text-align: center;
  font-size: 12px;
  max-width: 100%;
  position: relative;
  padding: 12px 0;
}
.subText:before {
  content: '';
  display: block;
  width: 140px;
  height: 1px;
  background: gray;
  left: 0;
  top: 50%;
  position: absolute;
}
.subText:after {
  content: '';
  display: block;
  width: 140px;
  height: 1px;
  background: gray;
  right: 0;
  top: 50%;
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>