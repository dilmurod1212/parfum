<template>
  <section class="container">
     <UITitle title="Популярные разделы">
       <nuxt-link to="/categories" class="text-gray hover:text-red flex items-center"><span>Все разделы</span> <i class="icon-arrow-right text-xl"></i></nuxt-link>
     </UITitle>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pb-6">
      <CardsCategory v-for="(item, index) in categories" :key="index + 'famous'" :options="item"  />
    </div>
  </section>
</template>
<script setup lang="ts">
import { dataCategory } from "~/data/famousSections";
import {useCategoryStore} from '~/stores/categories'
const store = useCategoryStore()
store.fetchCategories()
const categories = computed(()=> store.categories)
</script>
