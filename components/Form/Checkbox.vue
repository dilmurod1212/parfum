<template>
  <div>
    <div

      class="flex items-center bg-white gap-x-2 w-full p-2 transition ease-out cursor-pointer group \"
      :class="labelCLass"
    >
      <div
        class="border-2 cursor-pointer flex-center border-gray-100  rounded w-5 h-5 flex-shrink-0 relative overflow-hidden transition-all"
        :class="{ 'bg-red border-none rotate-0 transition-all': checked }"
      >
        <i
          class="text-xl text-white flex-center opacity-0 transition-all"
          :class="[
            { 'opacity-100 transition-all': checked },
            showIcon ? 'icon-menu-dots' : 'icon-unread',
          ]"
        ></i>
        <input
          ref="check"
          type="checkbox"
          @change.prevent.stop="handleInput"
          :value="id"
          :checked="checked"
          class="w-5 h-5 opacity-0 absolute top-0 left-0 checked:text-white cursor-pointer"
        />
      </div>
      <div @click="$emit('onClick')" class="flex items-center justify-between w-full gap-2">
        <span class="font-medium text-sm group-hover:text-red transition-all">{{
          text
        }}</span>
        <i
          class="icon-chevron-down text-xl text-red opacity-0 transition-all"
          :class="{
            'opacity-100': showIcon,
            'rotate-180 transition-all': isOpen,
          }"
        ></i>
      </div>
    </div>
    <div v-auto-animate>
      <slot v-if="isOpen"> </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const wrapper = 'div'
const check = ref(false)
const input = ref(false)
function checkedInput() {
  input.value = !input.value
}
defineProps<{
  text: string
  id?: number | string
  checked?: boolean
  labelCLass?: string
  showIcon?: boolean
  parent?: boolean
  isOpen?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: Event, id: number): void
}>()

const handleInput = (e: Event) => {
  emit('update:modelValue', e, e.target?.checked)
}
</script>
