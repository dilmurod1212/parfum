import { defineStore } from 'pinia'
import { useQuery } from "@tanstack/vue-query";


export const useCategoryStore = defineStore('categoryStore', () => {
  const categories = ref([])
  const categoryMale = ref([])
  async  function fetchCategories(){
    const {data} = await  useFetch('https://toshkent-parfum.uz/api/v1/products/categories-list/footer')
    categories.value = data.value.results
    console.log(data.value.results)
  }
  async  function fetchCategoryMale(){
    const {data} = await  useFetch('https://toshkent-parfum.uz/api/v1/products/categories-list/footer/?gender=male&page=2&size=4')
    categoryMale.value = data.value.results
  }

  return {categoryMale, fetchCategoryMale, fetchCategories, categories }
})
