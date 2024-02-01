<template>
  <div class="groups">
    <NuxtLink
      v-for="(tab, index) in list"
      :key="index"
      :to="`/profile/${tab.value}`"
      :class="[tabClass, { [activeClass]: active === tab.value }]"
      @click="onClick(tab.value)"
      class="bg-slate-100 flex group items-center gap-4 rounded-md text-black text-proxima p-2 border-[1.2px] border-slate-100 cursor-pointer mt-2 hover:border-[1.2px] hover:border-red new"
    >         
      <i
        :class="[tab.imgSrc, { actives: active === tab.value }]"
        class="group-hover:bg-red transition-500 duration-900 out-in  bg-slate-300 rounded-md  p-2 text-xl new  text-white"
      ></i>
      {{ tab.label }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Props {
  list: { label: string; value: string; imgSrc: string }[];
  labelKey: string;
  valueKey: string;
  active: string;
  activeClass?: string;
  tabClass?: string;
  wrapperClass?: string;
}

defineProps<Props>();
const emit = defineEmits(['update:active']);

const onClick = (value: string) => {
  emit('update:active', value);
};
</script>
<style>
.active {
  background: rgba(246, 37, 89, 0.2);
  transition: all 0.4s ease-out;
  font-weight: 600;
}
.actives {
  background: #f62559;
  transition: all 0.4s ease-out;
  font-weight: 600;
}
</style>
