<template>
  <div class="relative" ref="target">
    <div @click="onOpen" class="cursor-pointer" tabindex="0">
      <slot name="header">
        {{ title }}
      </slot>
    </div>
    <ul
      v-if="state && options?.length"
      class="rounded-lg absolute mx-auto left-auto right-0 mt-2"
      :class="[optionsWrapperClass]"
    >
      <li
        v-for="(el, idx) in options"
        :key="idx"
        @click="onSelect(el)"
        :class="{ optionClass, 'bg-white/10': el.active }"
        class="rounded transition-all gap-2 group cursor-pointer"
      >
        <slot :data="el" name="option">
          <div
            class="py-2 px-3 text-xs bg-white hover:bg-light border-b last:border-b-0 transition-all"
          >
            {{ el }}
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { onClickOutside } from "@vueuse/core";

interface Props {
  options: any[]
  title?: string
  labelKey?: string
  valueKey?: string
  headerClass?: string
  optionClass?: string
  optionsWrapperClass?: string
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'on-click', value: any): void
}>()
const state = ref(false)
const target = ref(null)

const onOpen = () => {
  state.value = !state.value
}
const onSelect = (element: object) => {
  emit('on-click', element)

  state.value = false
}
// onClickOutside(target, () => (state.value = false));
</script>

<style scoped></style>
