<template>
  <div class="container mb-6">
    <UITitle :title="$t('male_category')" :link-text="$t('all_category')" />
    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
    <CardsCategory v-for="item in categoryMale" :options="item"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useCategoryStore} from '~/stores/categories'
const store = useCategoryStore()
store.fetchCategoryMale()
const categoryMale = computed(()=>store.categoryMale)
</script>

<style scoped>

</style>