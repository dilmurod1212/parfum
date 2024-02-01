<template>
   <transition name="fade" mode="out-in">
    <div class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[998] bg-black bg-opacity-50" v-show="modalActive">
      <div class="bg-white p-5 rounded-xl max-w-[378px] w-full">
        <div class="mb-[10px] flex items-center justify-between text-xl font-bold">
          <slot name="header"></slot>
          <i class="icon-close-circle text-2xl text-gray" @click="closeModal"></i>
        </div>
        <div class="mb-[10px] my-[37px] text-center">
          <slot/>
        </div>
        <div class="mb-[10px] flex justify-between">
          <slot name="footer"></slot>
          <button @click="emits('closeModal')">Close Modal</button>
        </div>
      </div>
    </div>
   </transition>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const { modalActive } = defineProps(['modalActive']);
  const emits = defineEmits(['closeModal']);
  
  const closeModal = () => {
    emits('closeModal');
  };
  </script>
  <style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>