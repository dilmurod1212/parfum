<template>
  <div class="rating rating-sm rating-half">
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-2 mr-2"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-1"
      checked
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-2 mr-2"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-2 mr-2"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-2 mr-2"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-1"
    />
    <input
      type="radio"
      name="rating-10"
      class="bg-yellow mask mask-star-2 mask-half-2"
    />
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  rating: number | string
}>()
</script>
