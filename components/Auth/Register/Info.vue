
<template>
    <div class="text-left h-full flex flex-col">
      <p class="font-bold text-2xl">{{ $t('registration') }}</p>
      <form action="" class="pt-4 grow my-[52px]">
        <p class="text-xl font-semibold">{{ $t('enterInfo') }}</p>
        <FormLabel :text="$t('fullName')" />
        <FormInput
          v-model="values.name"
          :placeholder="$t('enterFullName')"
          :error="v$.name.$error"
        />
        <FormLabel :text="$t('phoneNumber')" />
        <FormInput
          v-model="values.phone"
          v-maska="'(##) ###-##-##'"
          :error="v$.phone.$error"
          placeholder="(__) ___-__-__"
          class="w-full rounded-lg">
          <template #prefix>
            <div class="bg-gray-200 px-2 rounded-l-lg h-full flex-center">
              +998
            </div>
          </template>
        </FormInput>
      </form>
      <div class="mt-auto">
        <UIButton
          :text="$t('registration')"
          :variant="['red']"
          class="w-full"
         
        @click="submitForm"
        />
        <h1 class="">{{ $t("allreadyHaveAccount") }}</h1>
        <UIButton
          :text="$t('enter')"
          :variant="['gray']"
          class="w-full"
          @click="authStore.currentStep = 'login'"
        />
      </div>
    </div>
</template>
<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
interface Props {
  form: {
    v$: any,
    values: any
  }
}
const props = defineProps<Props>()
const authStore = useAuthStore()
const emit = defineEmits<{
  (e: 'on-change', val: string): void
}>()

const { values, v$} = unref(props.form)

const submitForm = async () => {
  v$.name.$touch()
  v$.phone.$touch()
  
  if (v$.name.$invalid || v$.phone.$invalid) return

  emit('on-change', 'otp')
}

</script>
<style scoped>
h1 {
  font-family: sans-serif;
  color: gray;
  text-align: center;
  font-size: 12px;
  max-width: 100%;
  position: relative;
  padding: 12px 0;
}
h1:before {
  content: '';
  display: block;
  width: 80px;
  height: 1px;
  background: gray;
  left: 0;
  top: 50%;
  position: absolute;
}
h1:after {
  content: '';
  display: block;
  width: 80px;
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