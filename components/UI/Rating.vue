<template>
    <div class="flex items-center">
        <p class="text-base flex items-center">{{ sequence }}<span class="text-gray mx-2">{{ percentage + "%" }}</span> <img src="/images/star.svg" alt=""></p>
        <div class="h-3 w-[500px] bg-gray-200 rounded-lg ml-2">
        <span class="block h-full  bg-yellow  hover:bg-yellow-50 transition-all duration-300 ease-in-out rounded-lg"
        :style="`width: ${percentage}%`"
        ></span>
    </div>
    </div>
</template>
<script setup lang="ts">
interface Props {
    percentage: string
    sequence: string
}
const props = defineProps<Props>()
</script>