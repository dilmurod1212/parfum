<template>
  <UIDialog v-bind="{ show }" :size="['min']" @on-close="$emit('on-close')">
    <template #header>
      <div></div>
    </template>
    <div class="p-5">
      <img
        src="/images/search-not-data.png"
        alt=""
        class="max-w-[180px] w-full m-auto"
      />
      <p class="font-normal text-black text-md mt-2">
        {{ $t('registerRequirement') }}
      </p>
      <i
        class="icon-close-circle text-4xl text-gray hover:text-red transition-all duration-300 ease-in-out cursor-pointer absolute right-3 top-3"
        @click="closeModal"
      ></i>
    </div>
    <template #footer>
      <div class="flex flex-col w-full p-5">
        <UIButton :text="$t('enter')" :variant="['red']" @click="openLogin('login')" />
        <UIButton
          :text="$t('registration')"
          :variant="['light']"
          class="mt-3"
          @click="openLogin('register')"
        />
      </div>
    </template>
  </UIDialog>
</template>
<script setup lang="ts">
import { useAuthStore } from '#imports'
const authStore = useAuthStore()

const show = computed(() => authStore.registerStatus)
const currentStep = computed(() => authStore.registerStep)
const emits = defineEmits(['on-close'])
const closeModal = () => {
  authStore.registerStatus = false
}


const openLogin=(e: string)=>{
  authStore.registerStatus = false
  setTimeout(()=>{
    authStore.currentStep = e
    authStore.modalShow = true
  }, 500)
}
</script>