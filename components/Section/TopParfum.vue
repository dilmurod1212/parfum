<template>
  <div class="container py-6">
    <UITitle :title="$t('top_parfum')" link="/brands" :link-text="$t('all_brands')" />
    <div
      class="grid grid-cols-1 md:!gird-cols-2 lg:grid-cols-4 md:gap-x-6 gap-y-3 md:space-y-0"
    >
      <CardsTopParfum
        v-for="el in topBrands.data.value.results"
        :option="el"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const topBrands = await useFetch(
  'https://toshkent-parfum.uz/api/v1/products/manufacture-with-products/?size=4'
)

</script>

<style lang="scss" scoped>

</style>