<template>
  <div class=" py-6">
    <UITitle :title="$t('top_brands')" :link-text="$t('all_brands')" link="/brands" class="container"/>
    <div
      class=""
    >
      <Vue3Marquee
        :pause-on-hover="true"

        :duration="100"
      >
        <CardsBrand v-for="el in brands" :option="el" :key="el.id" class="ml-4"/>
      </Vue3Marquee>
      <Vue3Marquee
        :pause-on-hover="true"
        :duration="100"
        :direction="'reverse'"
        class="my-6"

      >
        <CardsBrand v-for="el in brands" :option="el" :key="el.id" class="ml-4"/>
      </Vue3Marquee>
      <Vue3Marquee
        :pause-on-hover="true"
        :duration="100"
      >
        <CardsBrand v-for="el in brands" :option="el" :key="el.id" class="ml-4"/>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useBrandStore} from '~/stores/brands'
const store = useBrandStore()
store.fetchBrands()
const brands = computed(()=> {
  console.log('fefefefeffefef')
  return store.brands
})
</script>

<style lang="scss" scoped>

</style>