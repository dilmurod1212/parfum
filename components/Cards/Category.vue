<template>
  <nuxt-link
    :to="`/products?categories=${options.id}`"
    class="bg-white group  relative flex overflow-hidden items-end justify-between rounded-lg category transition-200 cursor-pointer"
  >
    <div class="group p-4 flex flex-col gap-4 w-full ">
      <h2 class="w-3/4  font-bold">{{ options.title }}</h2>
      <p
        class=" flex items-center opacity-0 group-hover:opacity-100 group-hover:text-red transition-200"
      >
        <span>{{$t('more')}}</span>
        <i class="icon-arrow-right text-xl inline-block"></i>
      </p>
    </div>
    <img :src="options.icon_src.default" alt="" class="absolute right-0 bottom-0  w-20 " />
  </nuxt-link>
</template>
<script setup lang="ts">
interface Props {
  options: {
    id:number
    title:string
    parent_id:number
    categories:[]
    icon_src:{
      default:string
      medium:string
      small:string
    }
  }
}
defineProps<Props>()
</script>
<style>
.category:hover {
  box-shadow: 0 8px 40px 0 rgba(29, 28, 28, 0.12);
}
</style>
