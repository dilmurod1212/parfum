<template>
  <div class="text-left flex flex-col h-full">
    <i
      class="icon-arrow-left text-4xl hover:text-gray transition-all duration-300 ease-in-out cursor-pointer"
      @click="authStore.currentStep = 'login'"
    ></i>
    <div class="pt-4 my-[20px] grow">
      <p class="font-bold text-2xl">{{ $t('restorePassword') }}</p>
      <form action="">
        <FormLabel :text="$t('phoneNumber')" />
        <FormInput placeholder="(__)___-__-__"
        v-model="values.phone"
        @input="phoneNumber"
        :error="v$.phone.$error"
        v-maska="'(##) ###-##-##'"
        >
          <template #prefix>
            <div class="bg-gray-200 px-2 rounded-l-lg h-full flex-center">
              +998
            </div>
          </template>
        </FormInput>
      </form>
    </div>
    <div class="mt-[260px]">
      <UIButton class="w-full mt-auto" :text="$t('confirm')" @click="submitForm"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const emit = defineEmits<{
  (e: 'on-change', val: string): void
}>()
interface Props {
  form: {
    v$: any
    values: any
  }
}
const props = defineProps<Props>()
const { values, v$ } = unref(props.form)

const submitForm = async()=>{
   v$.phone.$touch()
  if(v$.phone.$invalid) return
  emit('on-change', 'otp')
  
}

</script>