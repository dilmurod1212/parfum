import {defineStore} from 'pinia'
export const useBrandStore = defineStore('brandStore', ()=>{
  const brands = ref([])
  const menuCategories = ref([])
  async function fetchBrands(){
    const {data} = await useFetch('https://toshkent-parfum.uz/api/v1/products/manufacture')
    brands.value = data.value.results
  }

  return{brands, fetchBrands}
})
