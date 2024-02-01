<template>
  <div class="bg-white hidden lg:block min-h-[400px] h-fit p-4 rounded-xl">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-bold">{{ productId }}</h2>
      <p @click="onClear" class="cursor-pointer">очистить</p>
    </div>
    <div class="my-2">
      <FormCheckboxGroup :options="filterData" v-model="productId" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
async function updateQueries(queries: { [key: string]: string }) {
  await router.replace({ query: { ...route.query, ...queries } })
}
// ----------------------

const product = await useFetch(
  'https://toshkent-parfum.uz/api/v1/products/categories-list/footer/?size=50'
)
const filterData = computed(() => product.data.value?.results)

const productId = ref([])
const productsAll = ref(false)
const store = useProductStore()
store.fetchProducts()
watch(
  () => productId.value,
  (val) => {
    store.fetchFilteredData(productId.value?.join(','))
    updateQueries({ sections: val?.join(',') || undefined })
    productsAll.value = productId.value.length === filterData.value.length
  },
  {
    deep: true,
  }
)
const handleModelValue = (val, id) => {
  val.stopPropagation()
  val.preventDefault()
  productId.value = id
}
const onClear = async () => {
  await router.replace({ query: {} });
  productId.value = [];
  await store.fetchFilteredData();
  store.fetchProducts()
};

onMounted(() => {
  if (route.query?.sections)
    productId.value = route.query.sections
      ?.split(",")
      ?.map((el) => Number(el));
});
</script>

