<template>
 <div class="flex flex-col min-h-screen">
    <LayoutHeader />
   <div class="bg-slate-100">
  <Client-only>
  <div class="container">
    <h1 class="font-bold text-3xl text-black text-proxima leading-10 ">Профиль</h1>

    <div class="flex items-start justify-between  flex-wrap mt-5 pb-10">
        <div class="w-[30%] p-4 bg-white rounded-md gap-10 flex-col">
              <div class="flex items-center justify-between gap-5 border-b-[1.2px] border-b-slate-200 pb-[20px] mb-5"> 
                   <div class="rounded-[50%] border-2  border-slate-200 object-cover w-[150px] h-[90px]">
                    <img src="/images/domlaxonov.png" alt="" class="w-full rounded-full h-full object-cover cursor-pointer">
                   </div>
                   <p class="text-proxima text-black font-bold text-2xl">Muhammadamin Domlaxonov</p>
              </div> 
              <UITabs
                :list="[
                  { label: 'Персональные данные', value: 'single', imgSrc: 'icon-user-rounded'},
                  { label: 'Мои карты', value: 'cards', imgSrc: 'icon-card'},
                  { label: 'Настройки', value: 'settings', imgSrc: 'icon-phone'},
                  { label: 'Инструкции', value: 'instructions', imgSrc: 'icon-card'},
                  { label: 'Правила пользования', value: 'terms', imgSrc: 'icon-user'},
                  { label: 'Кешбек', value: 'cashback', imgSrc: 'icon-stars-minimalistic'  },
                  { label: 'Помощь', value: 'help', imgSrc:  'icon-phone' },
                ]"
                labelKey="label"
                valueKey="value"
                :active="activeTab"
                activeClass="active"
                @update:active="setActiveTab" 
              />
        </div>      

       
        <div class="w-[68%] p-4 bg-white rounded-md gap-10 flex-col">
                      <NuxtPage />
         </div>
  </div>

  </div>
  </Client-only
  >
</div>
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">
const activeTab = ref('single');
const setActiveTab = (value) => {
  activeTab.value = value;
  console.log(activeTab, 'helooman');
  
};
</script>
