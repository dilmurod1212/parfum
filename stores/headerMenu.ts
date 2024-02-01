import {defineStore} from 'pinia'
export const useHeaderMenu = defineStore('headerMenuStore', ()=>{
  const headerMenuData = ref([])
  const menuCategories = ref([])
  async function fetchHeaderMenu(){
    const {data} = await useFetch('https://toshkent-parfum.uz/api/v1/common/header-menu')
    headerMenuData.value = data.value.results
  }
  async function fetchHeaderCategories(){
    const {data} = await useFetch('https://toshkent-parfum.uz/api/v1/products/categories-list/footer/')
    menuCategories.value = data.value.results
  }
  return{fetchHeaderMenu, headerMenuData, menuCategories, fetchHeaderCategories}
})
