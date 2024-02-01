<template>
  <div
  v-if="shouldRenderLink"
  class="flex items-center justify-between gap-5 mb-2 ">
    <NuxtLink
    @click="removeElement"
      to="/profile/settings/password"
      class="bg-slate-50 w-[50%] group hover:text-red p-4 flex items-center gap-3 rounded-md cursor-pointer hover:transition-all out-in duration-700 hover:shadow-md"
    >
      <i class="icon-lock-unlocked text-2xl text-gray-400 group-hover:text-red"></i>
      Изменить пароль 
    </NuxtLink>

    <NuxtLink
      @click="removeElement"
      to="/profile/settings/phone"
      class="bg-slate-50 w-[50%] group hover:text-red p-4 gap-3 flex items-center rounded-md cursor-pointer hover:transition-all out-in  duration-700 hover:shadow-md"
    >
      <i class="icon-phone text-2xl text-gray-400 group-hover:text-red"></i>
      Изменить номер телефона
    </NuxtLink>
  </div>  
  <NuxtPage />
</template>

<script lang="ts" setup>
const shouldRenderLink = ref(true)
function removeElement() {
  shouldRenderLink.value = false
}

definePageMeta({
  layout: 'profile'
})
</script>