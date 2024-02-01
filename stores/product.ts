import { defineStore } from 'pinia'
import { useQuery } from "@tanstack/vue-query";


export const useProductStore = defineStore('productStore', () => {
  const productData = ref([])
  const allProducts = ref([])
  const banners = ref([])
  const recommendedProducts = ref([])
  async function fetchAllProducts() {
    const { data, pending, error } = await useFetch(
      'https://toshkent-parfum.uz/api/v1/products/'
    )
    allProducts.value = data.value.results
  }

  async  function fetchProductCategory(){
    const {data} = await  useFetch('https://toshkent-parfum.uz/api/v1/products/categories-list')
    banners.value = data.value.results
  }
  async  function fetchRecommendedProducts(){
    const {data} = await  useFetch('https://toshkent-parfum.uz/api/v1/products/recommended')
    recommendedProducts.value = data?.value.results
  }

  async function fetchProducts() {
    const product = await useFetch(
      'https://toshkent-parfum.uz/api/v1/products/?size=12&page=1'
    )
    productData.value = product.data.value?.results
  }
  async function fetchFilteredData(id:number) {
    const product = await useFetch(
      `https://toshkent-parfum.uz/api/v1/products/?category_id__in=${id}&page=1&size=12`
    )
    productData.value = product.data.value?.results
  }
  return {  fetchProducts, productData, fetchFilteredData, fetchAllProducts,allProducts, fetchProductCategory, banners,fetchRecommendedProducts,recommendedProducts }
})
