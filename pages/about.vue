<template>
  <div class="bg-gray-50">
    <pre>{{}}</pre>
    <div class="container">
      <UIBreadCrumb v-bind="{ routes }" />
      <div
        class="py-4 flex flex-col-reverse lg:flex-row items-center gap-6 max-md:pt-6"
      >
        <div>
          <h2 class="text-3xl mb-4 font-bold">{{  $t('about') }}</h2>
          <div
            v-html="aboutData.data.value.description"
            class="md:text-lg"
          ></div>
        </div>
        <img
          src="/images/about/about.png"
          alt=""
          class="md:w-[400px] h-[342px] md:flex-shrink-0"
        />
      </div>
    </div>
    <div class="bg-white py-8">
      <div class="container">
        <h2 class="text-3xl font-bold">{{ $t('statistics') }}</h2>
        <div class="flex max-md:flex-col md:items-center justify-between">
          <UIStatistics
            v-for="(el, idx) in statistics"
            :option="el"
            :key="idx"
          />
        </div>
      </div>
    </div>
    <div class="container py-6">
      <UITitle :title="$t('top_brands')" :link-text="$t('all_brands')" />
      <div
        class="grid grid-cols-1 md:!gird-cols-2 lg:grid-cols-4 md:gap-x-6 gap-y-3 md:space-y-0"
      >
        <CardsTopBrand
          v-for="el in topBrands.data.value.results"
          :option="el"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { formatNumber } from '@/utils/index'

const {t} = useI18n()
const aboutData = await useFetch(
  'https://toshkent-parfum.uz/api/v1/settings/about/'
)
const statisticsData = await useFetch(
  'https://toshkent-parfum.uz/api/v1/common/statistics/'
)
const topBrands = await useFetch(
  'https://toshkent-parfum.uz/api/v1/products/manufacture-with-products/?size=4'
)

const statistics = ref([
  {
    icon: 'icon-users-group',
    title: statisticsData.data?.value.users_count,
    description: 'Клиенты, которые доверяют нам',
  },
  {
    icon: 'icon-list-heart',
    title: statisticsData.data?.value.categories_count,
    description: 'Категория качественных продуктов',
  },
  {
    icon: 'icon-users-group',
    title: statisticsData.data?.value.orders_count,
    description: 'Заказы на сегодняшний день',
  },
])
const routes = computed(() => [
  {
    label: t('about'),
    link: '/',
  },
])
useSeoMeta({
  title:  t('about'),
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
