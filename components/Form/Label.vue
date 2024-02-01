<template>
   <label for="" class="text-sm mt-4 mb-2 inline-block text-gray-extra font-normal">{{ text }}</label>
</template>
<script setup lang="ts">
interface Props {
    text: string
}
const props = defineProps<Props>()
</script>