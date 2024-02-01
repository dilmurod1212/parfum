<template>
  <div class="container py-6">
    <UITitle :title="$t('female_parfum')" link="/products?sections=12" :link-text="$t('all_products')" />
    <div
      class="grid grid-cols-2 md:!gird-cols-4 lg:grid-cols-6  gap-2 md:gap-3"
    >
      <CardsProduct
        v-for="(el, idx) in femaleProducts"
        :option="el"
        :key="idx"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
//https://toshkent-parfum.uz/api/v1/products/?category_id=4&page=2&size=6
  const { data, pending, error } = await useFetch(
    'https://toshkent-parfum.uz/api/v1/products/?category_id=12&page=2&size=6'
  )
  const femaleProducts = computed(()=>data.value.results)
</script>

<style scoped>

</style>