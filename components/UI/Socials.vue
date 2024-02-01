<template>
  <div class="flex items-center gap-x-4">
    <a
      v-for="el in socialItems"
      target="_blank"
      :href="el.link"
      class="hover:text-red transition-all"
      ><i
        class="icon-facebook-square w-5 h-5 text-gray hover:text-red transition-all"
        :class="el.icon"
      ></i
    ></a>
  </div>
</template>

<script setup lang="ts">
interface Props {
  socialItems: {
    link: string;
    icon: string;
    id?: number;
  }[];
}
defineProps<Props>();
</script>

<style scoped></style>
