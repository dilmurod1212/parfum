<template>
  <div :class="switcherClass">
    <UIDropdown
      :options="languages"
      label-key="label"
      value-key="code"
      optionsWrapperClass="p-0 rounded overflow-hidden shadow-lg"
    >
      <template #header>
        <div class="flex items-center gap-x-1 text-[#6F6F6F] group">
          <span class="text-xs group-hover:text-red flex transition-all"
            > {{ currentLocale }} </span
          >
          <i
            class="icon-chevron-down group-hover:text-red flex transition-all"
          ></i>
        </div>
      </template>
      <template #option="el">
        <div @click="setLocale(el.data.code)"
          class="py-4 px-3 text-xs bg-white hover:bg-light border-b last:border-b-0 transition-all block"
        >
          {{ el.data.label }}
        </div>
      </template>
    </UIDropdown>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const languages = ref([
  {
    label: "O'zbekcha",
    code: 'sr'
  },
  {
    label: "Русский",
    code: 'ru'
  }
]);
interface Props {
  switcherClass?: string;
}
defineProps<Props>();

const currentLocale = computed(() =>
  languages.value.find((element) => element?.code === locale.value)?.label
);
</script>

<style scoped></style>
