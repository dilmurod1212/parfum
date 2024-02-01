<template>
  <nuxtLink
    :to="`/products?manufacturers=${option.id}`"
    class="cursor-pointer transition-200 bg-white p-4 rounded-2xl w-[150px] h-[70px] md:w-[200px] md:h-[100px] lg:w-[260px] lg:h-[130px] flex justify-center items-center group"
    ><img
      :src="option.icon"
      width="200"
      height="62"
      :alt="option.title"
      class="w-full h-full grayscale transition-200 group-hover:scale-105 group-hover:grayscale-0 max-h-[62px] max-w-[200px] mx-auto object-contain"
  /></nuxtLink>
</template>

<script setup lang="ts">
interface Props {
  option: {
    id: number
    title: string
    override_price: string
    warehouse: number
    icon: string
  }
}
defineProps<Props>()
</script>

<style scoped></style>
