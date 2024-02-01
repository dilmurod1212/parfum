<template>
<div v-if="shouldRenderLink">
       <div class="flex items-center justify-between mb-5 pb-2 border-b-[1.2px] border-b-slate-100">
       <h2 class="text-proxima text-black font-bold text-xl  ">
        Персональные данные
       </h2>

         <UIButton
            text="Выйти"
            size="sm"
            variant="light"
            wrapperClass=""
            class=""
          >
            <template #suffix> <i class="icon-login"></i>
             </template>
          </UIButton>
  
    </div>

                <div class="rounded-[50%] border-2  border-slate-200 object-cover w-[100px] h-[100px]">
                    <img src="/images/domlaxonov.png" alt="" class="w-full rounded-full h-full object-cover cursor-pointer">
                </div>


                <div class="border-2 mt-6  border-slate-100 rounded-md flex items-center justify-between ">
                    <div class=" w-[33%] gap-3 p-4 ">
                       <p class="text-slate-300  font-proxima text-md">Имя:</p>
                       <p class="text-black font-bold hover:text-red transition-600 duration-700 font-proxima text-md">Мухаммадамин</p> 
                    </div>
                    <div class=" w-[33%] gap-3 p-4  border-l-2 border-l-slate-100">
                       <p class="text-slate-300 font-proxima text-md">Фамилия:</p>
                       <p class="text-black font-bold hover:text-red transition-600 duration-700 font-proxima text-md">Домлахонов</p>
                    </div>
                    <div class=" w-[33%] gap-3 p-4  border-l-2 border-l-slate-100">
                       <p class="text-slate-300 font-proxima text-md">Адрес:</p>
                       <p class="text-black font-bold hover:text-red transition-600 duration-700 font-proxima text-md">г.Фергана, Талабалар 22</p>
                    </div>
                </div>


                <div class="w-full justify-end flex mt-5">
                   <NuxtLink
                    @click="removeElement"
                    to="/profile/single/edit">
                     <UIButton text="Изменить" size="md" variant="red" class="">
                        <template #prefix> <i class="icon-edit-square"></i></template>
                    </UIButton>
                   </NuxtLink>
                </div>
</div>


                <div>
                     <NuxtPage/>
                </div>

</template>
<script lang="ts" setup>
const shouldRenderLink = ref(true)
function removeElement() {
  shouldRenderLink.value = false
}

definePageMeta({
  layout: "profile"
})
</script>
