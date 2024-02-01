<template>
    <div>
        <p class="text-2xl text-dark font-semibold border-b pb-4">
            Оплата
         </p>
         <div class="items-center text-sm bg-gray-200 inline-flex p-[2px] rounded-3xl my-4 font-medium">
            <p class="p-2 rounded-l-3xl rounded-r-md cursor-pointer transition-all duration-500 ease-out"
            @click="changePayment('bankingCart', 1)"
            :class="[paymentSystem == 'bankingCart' ? 'bg-white text-dark shadow-xl' : 'text-gray']"
            >Банковской картой</p>
            <p class="p-2 rounded-r-3xl rounded-l-md cursor-pointer transition-all duration-500 ease-out"
            @click="changePayment('paymentService', 2)"
            :class="[paymentSystem == 'paymentService' ? 'bg-white text-dark shadow-xl' : 'text-gray']"
            >Платежные услуги</p>
         </div>
<!--      <UITabs-->
<!--        class="bg-white p-3 rounded-[12px] flex-col w-full mb-6 lg:md-0 lg:max-w-[30%]"-->
<!--        v-model="activeTab"-->
<!--        :list="tabList"-->
<!--        :is-scroll-animate="false"-->
<!--      />-->
        <transition name="fade" mode="out-in">
            <div :key="currentStep">
                <UIStepThirdStepBankingCart v-if="currentStep === 1" @next="nextStep = 'otp'" :form="{v$, values}"/>
                <UIStepThirdStepPaymentService v-else-if="currentStep === 2"/>
            </div>
        </transition>
    </div>

</template>
<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength  } from '@vuelidate/validators'
const currentStep = ref(1)
const paymentSystem = ref('bankingCart')
const nextStep = ref('')
const activeTab = ref(false)
const tabList = ref([
  {
    id: 1,
    title: 'Банковской картой',
    value: "string"
  },
  {
    id: 2,
    title: 'Платежные услуги',
    value: 'string'
  }
])

interface Props{
  form: {
    v$: any
    values: any
  }
}
const props = defineProps<Props>()

const {v$, values} = unref(props.form)

const changePayment=(value: string, num: number)=>{
    currentStep.value = num
    paymentSystem.value = value
}

const emit = defineEmits(['next'])

</script>