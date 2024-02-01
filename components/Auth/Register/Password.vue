<template>
  <div class="flex flex-col h-full">
    <div class="text-left">
      <i class="icon-arrow-left text-4xl hover:text-gray transition-all duration-300 ease-in-out cursor-pointer"
      @click="$emit('on-change', 'info')"
      ></i>
    </div>
    <div class="grow my-[80px] pt-4 text-left">
      <p class="text-2xl font-semibold">{{ $t('newPassword') }}</p>
      <form action="" class="text-left">
        <FormLabel :text="$t('password')"/>
        <FormInput :placeholder="$t('enterPassword')"
          :error="v$.password.$error"
          :type="inputType"
          v-model="values.password"
        >
          <template #suffix>
            <i :class="['icon-eye text-2xl text-gray cursor-pointer', {'icon-eye-closed': showPassword}]" @click="checkInput"></i>
          </template>
        </FormInput>
        <FormLabel :text="$t('confirmation')"/>
        <FormInput :placeholder="$t('reenterPassword')"
        :error="v$.confirmPassword.$error"
        :type="inputType"
        v-model="values.confirmPassword"
        >
      <template #suffix>
        <i :class="['icon-eye text-2xl text-gray cursor-pointer', {'icon-eye-closed': showPassword}]" @click="checkInput"></i>
      </template>
      </FormInput>
      </form>
    </div>
    <UIButton :text="$t('confirm')" :variant="['red']" @click="submitForm"/>
  </div>
</template>
<script setup lang="ts">
interface Props{
  form: {
    v$: any
    values: any
  }
}
const showPassword = ref(false)
const props = defineProps<Props>()
  const { values, v$ } = unref(props.form)
  const checkInput=()=>{
  showPassword.value = !showPassword.value
}
const inputType = computed(()=> showPassword.value ? 'text' : 'password')
const submitForm = async () => {
  v$.password.$touch()
  v$.confirmPassword.$touch()
  if (v$.password.$invalid || v$.confirmPassword) return
}
</script>