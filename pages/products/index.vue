<template>
  <div class="bg-[#F7F8FA]">
    <div class="container py-6">
      <!-- <p>{{ filterData }}</p re> -->
      <div class="grid grid-cols-4 gap-x-4 min-h-screen">
        <SectionProductFilter class="col-span-1"/>
        <div class="col-span-4 lg:col-span-3">
          <UITitle :title="$t('all_products')" wrapper-class="" />
          <div
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6"
          >
            <CardsProduct v-for="el in productData" :option="el" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// https://toshkent-parfum.uz/api/v1/products/categories-list/footer/?size=50
const store = useProductStore()
store.fetchProducts()
const productData = computed(() => store.productData)
</script>
<!--  filterData.value.forEach((product) => {
      productId.value.push(product.id)
      product.categories.forEach(item => {
        productId.value.push(item.id)
      }); -->
