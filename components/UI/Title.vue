<template>
  <div class="py-4 flex items-center justify-between" :class="wrapperClass">
    <h2
      class="text-[#383838] font-bold text-xl md:text-2xl lg:text-3xl"
      :class="titleClass"
    >
      {{ title }}
    </h2>
    <slot>
      <nuxtLink
        v-if="linkText"
        :to="link"
        class="text-[#9E9EA5] flex items-center gap-1 hover:text-red transition-all cursor-pointer"
      >
        <span>{{ linkText }}</span
        ><i class="icon-arrow-right text-xl font-bold"></i>
      </nuxtLink>
    </slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  link?: string
  linkText?: string
  title: string
  titleClass?: string
  wrapperClass?: string
}
defineProps<Props>()
</script>
