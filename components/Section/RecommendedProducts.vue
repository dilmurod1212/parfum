<template>
  <div class="container py-6">
    <UITitle :title="$t('recommended_products')" :link-text="$t('all_products')" link="/products?recommendation=true"/>
    <div
      class="grid grid-cols-2 md:!gird-cols-4 lg:grid-cols-6  gap-2 md:gap-3"
    >
      <CardsProduct
        v-for="(el, idx) in recommendedProducts"
        :option="el"
        :key="idx"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useProductStore} from '~/stores/product'
const store = useProductStore()
store.fetchRecommendedProducts()
const recommendedProducts = computed(()=>store.recommendedProducts)
</script>

<style scoped>

</style>