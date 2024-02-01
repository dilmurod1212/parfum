<template>
   <div class="my-6">
    <div v-for="(el, idx) in items.slice(0, visibleItems)" :key="idx" class="my-4">
        <div class="flex items-center">
            <img :src="img ? '' : '/images/User.svg'" alt="" class="max-w-[44px] w-full max-h-[44px] h-full rounded-full p-1"
            :class="{'bg-gray-200': !img}">
            <div class="ml-2">
                <p class="text-xl text-black font-medium">Temur Karimov</p>
                <div class="flex items-center">
                    <div class="rating rating-sm rating-half">
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-2 mr-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-1"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-2 mr-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-1"
                  />
                  
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-2 mr-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-2 mr-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-1"
                  />
                  <input
                    type="radio"
                    name="rating-10"
                    class="bg-yellow mask mask-star-2 mask-half-2"
                  />
                </div>
                <p class="text-sm ml-2">Сегодня, 14:45</p>
                </div>
            </div>
        </div>
        <p class="text-dark text-base my-2">Я ее обожаю пользуюсь последние 15 лет, пока не могу сменить отчетливо чувствую запахи других парфюмиррванных вод.</p>
    </div>
    <UIButton text="Загрузить еще" variant="light" class="m-auto" @click="showMore" v-if='visibleItems <= items.length'/>
   </div>
</template>
<script setup lang="ts">
const img = ref('')
const visibleItems = ref(4)

const items = Array.from({ length: 10 }).map((_, idx) => idx + 1);

    function showMore() {
      if (visibleItems.value < items.length) {
        visibleItems.value += 4;
      }
    }

</script>