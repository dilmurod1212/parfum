<template>
  <div>
    <FormCheckbox
      @on-click="showItem(item.id)"
      v-for="(item, index) in options"
      :key="index"
      :text="item.title"
      :showIcon="!!item?.categories.length"
      :checked="modelValue?.includes(item.id)"
      @update:model-value="handleCheckbox(item.id)"
      :is-open="isOpen == item.id"
    >
      <FormCheckboxItem
        v-for="(el, index) in item.categories"
        v-show="isOpen == item.id"
        :key="index"
        :text="el.title"
        :id="el.id"
        @update:model-value="handleCheckbox( el.id)"
        :checked="modelValue?.includes(el.id)"
        :all-checked="false"
        class="pl-7"
      />
    </FormCheckbox>
  </div>
</template>
<script setup lang="ts">
const isOpen = ref(0 || null)

const showItem = (id: number) => {
  if (isOpen.value == id) {
    isOpen.value = null
  } else {
    isOpen.value = id
  }
}
interface Props {
  options: {
    id: number
    title: string
    parent_id: null
    categories: {
      id: number
      title: string
      parent_id: number
      categories: []
      icon_src: {
        default: string
        medium: string
        small: string
      }
    }[]
    icon_src: {
      default: string
      medium: string
      small: string
    }
  }[]
  labelKey?: string
  valueKey?: string
  modelValue: number[]
}
const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: (string | number)[]): void
}>()
const checkedList = ref<number[]>([])
const selectedValues = computed({
  get() {
    return props.modelValue
  },
  set(value: number[]) {
    checkedList.value = value
  },
})

function handleCheckbox(id: number) {
  if (selectedValues.value.includes(id)) {
    selectedValues.value.splice(
      selectedValues.value.findIndex((el) => el === id),
      1
    );
  } else {
    selectedValues.value.push(id);
  }
  emit("update:modelValue", selectedValues.value);
}

</script>

<!-- ---------- -->

<!-- <FormCheckbox
      v-for="(item, index) in options"
      :key="index"
      :text="item.title"
      :id="item.id"
      @update:model-value="handleCheckbox(item.id)"
      :checked="modelValue?.includes(item.id)"
      :showIcon="!!item?.categories.length"
      @click="isOpen = !isOpen"
      :isOpen="isOpen"
    >
      <template v-if="item.categories?.length">
        <FormCheckboxGroup
          :options="item?.categories"
          :model-value="selectedValues"
          @update:model-value.prevent.stop="handleCheckbox(item.id)"
          :checked="modelValue?.includes(item?.id)"
          class="pl-5"
        />
      </template>
    </FormCheckbox> -->
