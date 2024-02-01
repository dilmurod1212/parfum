<template>
  <div class="bg-slate-100">
    <div class="container">
      <UIBreadCrumb v-bind="{ routes }" />
    </div>
    <SectionMainSlider />
    <div class="flex justify-between items-center flex-wrap container">
      <UITitle :title="title" />
      <nuxt-link to="/filter" class="text-gray hover:text-red flex items-center"
        ><span>Все разделы</span> <i class="icon-arrow-right text-xl"></i
      ></nuxt-link>
    </div>
    <div
      class="container pb-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6"
    >
      <CardsCategory
        v-for="(item, index) in titleCategory"
        :key="index + 'filter'"
        :options="item"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { dataCategory } from '~/data/famousSections'
import { titleCategory } from '~/data/famousSections'

const route = useRoute()
const title = computed(
  () => dataCategory?.find((el) => el?.id == route.query?.product)?.descr
)
const routes = computed(() => [
  {
    label: title.value,
    link: '/',
  },
])
</script>
