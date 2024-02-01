<template>
  <div class="flex items-center gap-x-2 py-4">
    <div class="">
      <i class="icon-users-group text-5xl text-red" :class="option.icon"></i>
    </div>
    <div>
      <h2 class="text-3xl font-bold">{{  formatNumber(option.title) }}</h2>
      <p class="text-[#9E9EA5]">{{ option.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from '@/utils/index'

interface Props {
  option: {
    title: string
    description: string
    icon: string
  }
}
defineProps<Props>()
</script>

<style scoped></style>
