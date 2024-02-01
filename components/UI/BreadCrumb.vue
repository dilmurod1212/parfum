<template>
  <div class="flex items-center text-sm py-5">
    <router-link to="/" class="flex items-center text-gray-extra"
      >{{ $t('home') }}
    </router-link>
    <span
      v-if="routes?.length > 0"
      class="mx-1 h-1 w-1 rounded-full bg-[#CDCDD0]"
    ></span>
    <template v-for="(breadcrumbItem, index) in routes">
      <span v-if="index !== routes?.length - 1">
        <router-link :to="breadcrumbItem.link">{{
          breadcrumbItem.label
        }}</router-link>
      </span>
      <span v-else class="text-[#CDCDD0] line-clamp-1">{{
        breadcrumbItem.label
      }}</span>
      <span v-if="index !== routes?.length - 1" class="mx-1">></span>
    </template>
  </div>
</template>

<script setup lang="ts">
interface Props {
  routes: {
    label: string
    link: string
  }[]
}
defineProps<Props>()
</script>
