<template>
    <div class="flex items-center group">
        <slot name="prefix" class="text-gray group-hover:text-[#F62458] transition-all duration-300 ease-in-out"></slot>
        <p class="text-base text-dark mx-3  group-hover:text-[#F62458] transition-all duration-300 ease-in-out cursor-pointer font-bold">{{ title }}</p>
        <slot name="suffix" class="text-gray group-hover:text-[#F62458] transition-all duration-300 ease-in-out"></slot>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps<{
        title: string
    }>()
</script>