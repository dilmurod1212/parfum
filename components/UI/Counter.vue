<template>
<p class="text-slate-300 text-[14px]   capitalize">uzs x {{ quantity}}</p>
  <div class="flex items-center gap-1">
    <button
      class="p-2 rounded-l-md pl-2 bg-gray-200 h-11 hover:bg-slate-300 cursor-pointer disabled:bg-gray-50"
      @click="decrementQuantity"
      :disabled="min >= quantity"
    >
      <span class="border-2 rounded-full w-6 h-6 border-red flex-center">
        <span class="text-red font-extrabold text-base">-</span>
      </span>
    </button>
    <input
      type="text"
      class="p-3 text-center h-11 bg-gray-200 font-bold text-black w-[50px] outline-red"
      :value="quantity"
      @input="handleInput"
    />
    <button
      class="p-2 h-11 rounded-r-md pr-2 bg-gray-200 hover:bg-slate-300 cursor-pointer disabled:bg-gray-50"
      :disabled="max <= quantity"
      @click="incrementQuantity"
    >
      <span class="border-2 rounded-full w-6 h-6 border-green-500 flex-center">
        <span class="text-green font-extrabold font-serif">+</span>
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '~/stores/cart';
const cartStore = useCartStore();

interface Props {
  min: number;
  max: number;
}
const props = defineProps<Props>();

const quantity = ref(1);
const disabled = ref(false);

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (props.min < quantity.value) quantity.value--;
};

const handleInput = (event) => {
const input = event.target.value;
  const numericInput = input.replace(/\D/g, '');
  quantity.value = +numericInput;
  if (quantity.value === 0) {
    quantity.value = 1;
  } else if (quantity.value >= props.max) {
    quantity.value = props.max;
  }

};

watch(
  () => quantity.value,
  (val) => {
    if (props.max <= val || props.min >= val) {
      disabled.value = true;
    } else {
      disabled.value = false;
    }
  }
);
</script>

