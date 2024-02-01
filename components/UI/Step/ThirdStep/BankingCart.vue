<template>
  <div>
    <form action="" class="flex items-center gap-6 mb-5">
      <div class="">
        <FormLabel text="Номер карты" />
        <FormInput
          v-maska="'####-####-####-####'"
          v-model="values.card"
          @input="checkCard"
          :error="v$.card.$error"
          placeholder="____-____-____-____"
        >
    <template #suffix>
        <img :src="cardImage" alt="" class="max-w-[30px]">
    </template>
    </FormInput>
      </div>
      <div class="flex flex-col">
        <FormLabel text="Срок" />
        <input type="text" placeholder="__/__" 
        v-model="values.exp" 
        :error="v$.exp.$error"
         :class="{'border border-red': v$.exp.$error }"
        class="bg-gray-50 border h-10 rounded-lg focus-within:border-black transition-all duration-300 ease-in-out pr-2 placeholder:text-gray-150 text-black active:ring-0 focus:ring-0 focus:outline-none outline-none px-2"
        ref="input"
        v-maska="'##/##'"
        >
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits(['next', 'previous'])
const exp = ref('exp')

interface Props {
  form: {
    v$: any
    values: any
  }
}
const props = defineProps<Props>()

const { v$, values } = unref(props.form)
const isExpFocused = ref(false)
const cardImage = ref('')
const input =ref()

const checkCard = () => {
  if (!values.card.length) return

  if (values.card.slice(0, 4) === '8600')
    cardImage.value = '/images/cards/uz-card.png'
  else if (values.card.slice(0, 1) === '2' || values.card.slice(0, 1) === '5')
    cardImage.value = '/images/cards/master-card.png'
  else if (values.card.slice(0, 1) === '4')
    cardImage.value = '/images/cards/visa.webp'
  else if (values.card.slice(0, 4) === '9860')
    cardImage.value = '/images/cards/humo-card.png'

    if(values.card?.length === 19){
        input.value.focus()
    }
}
watch(values.card, ()=>{
    console.log(values.card?.length)
})
</script>