import {defineStore} from 'pinia'
export const useStoriesStore = defineStore('storiesStore', ()=>{
  const storiesData = ref([])
   async function fetchStories(){
    const {data} = await useFetch('https://toshkent-parfum.uz/api/v1/common/story')
     storiesData.value = data.value.results
  }
  return{storiesData, fetchStories}
})
