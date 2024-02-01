<template>
  <div class="container">
    <UIBreadCrumb v-bind="{ routes }" />
    <p class="text-[32px] font-semibold text-dark">{{ $t('ordering') }}</p>
    <div class="grid grid-cols-5 gap-5 mt-6">
      <div class="col-span-4">
        <ul
          class="flex-center bg-white p-4 rounded-3xl w-full gap-[60px] relative z-10"
        >
          <span class="absolute w-full h-[2px] bg-black z-[-2]"></span>
          <li
            class="flex-center m-auto bg-gray-200 py-2 rounded-3xl px-4 w-full"
            :class="[
              { '!bg-red !text-white': step === 1 },
              { '!bg-red !text-white': step >= 1 },
            ]"
          >
            <i class="icon-location mr-2"></i> Адрес доставки
          </li>
          <li
            class="flex-center bg-gray-200 py-2 rounded-3xl px-4 w-full"
            :class="[
              { '!bg-light-extra !text-white': step === 2 },
              { '!bg-red !text-white': step > 2 },
            ]"
          >
            <i class="icon-location mr-2"></i>Контактные данные
          </li>
          <li
            class="flex-center m-auto bg-gray-200 py-2 rounded-3xl px-4 w-full"
            :class="[
              { '!bg-light-extra !text-white': step === 3 },
              { '!bg-red !text-white': step > 3 },
            ]"
          >
            <i class="icon-location mr-2"></i>Оплата
          </li>
        </ul>
        <div class="bg-white my-5 rounded-lg p-5">
        <transition name="fade" mode="out-in">
         <div>
          <UIDialog
            :show="otpStatus"
            size="min"
            title="Подтверждение"
            @on-close="otpStatus = false"
            v-if="otpStatus && paymentStep == ''">
            <div class="p-5">
              <AuthOTP :form="{ v$: otpV$, values: otpForm }" @on-change="paymentStep = $event">
                <p></p>
              </AuthOTP>
            </div>
            <template #footer>
              <div></div>
            </template>
          </UIDialog>
          <UIDialog
            :show="otpStatus"
            size="min"
            title="Успешно"
            @on-close="otpStatus = false"
            class="!p-4"
            v-if="paymentStep == 'password'">
            <div class="p-5">
              <div class="flex items-center"><img src="/images/paymentSuccess.svg" alt=""><p class="font-semibold">Оплата успешно зовершена</p></div>
              <p class=" flex items-center bg-green-50 p-3 rounded-md"><i class="icon-check-circle-regular text-lg mr-2 text-green"></i>Заказ был оплачен кэшбеком </p>
              <div class="grid grid-cols-2 bg-gray-200 rounded-md p-4 my-4">
                <div>
                  <p class="text-gray">Номер заказа</p>
                  <p class="flex items-center font-semibold"><i class="icon-basket-solid text-green text-2xl mr-2"></i>#{{ '12312' }}</p>
                </div>
                <div>
                  <p class="text-gray">Итого:</p>
                  <p class="flex items-center font-semibold"><i class="icon-money-wallet text-green text-2xl mr-2"></i>#{{ '3 640 144' }} UZS</p>
                </div>
              </div>
            </div>
            <template #footer>
              <div class="w-full px-4 py-4">
                <UIButton text="Статус заказов" variant="red" class="w-full mb-3"/>
                <UIButton text="Венуться на главную" variant="light" class="w-full"/>
              </div>
            </template>
          </UIDialog>
         </div>
        </transition>
          <transition name="fade" mode="out-in">
            <div>
              <UIStepFirst
                v-if="step === 1"
                @next="step = 2"
                :form="{ v$, values: formStepOne }"
              />
              <UIStepSecond
                v-if="step === 2"
                @next="step = 3"
                @previous="step = 1"
                :form="{ v$: secondV$, values: formStepTwo }"
              />
              <UIStepThird
                v-if="step >= 3"
                @previous="step = 2"
                :form="{ v$: lastV$, values: formLastStep }"
              />
            </div>
          </transition>
          <div class="flex items-center justify-between border-t pt-5 mt-5">
            <UIButton text="Назад" variant="gray" @click="prevStep()">
              <template #prefix>
                <i class="icon-arrow-left text-xl"></i>
              </template>
            </UIButton>
            <UIButton text="Продолжить" @click="submitForm">
              <template #suffix>
                <i class="icon-arrow-right text-xl"></i>
              </template>
            </UIButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import parsePhoneNumber from 'libphonenumber-js'
const router = useRouter()
const step = ref(1)
const completedStep = ref(1)
const otpStatus = ref(false)
const paymentStep = ref('')
const items = ref([
  {
    label: 'Personal Info',
  },
  {
    label: 'Reservation',
  },
  {
    label: 'Review',
  },
])
const routes = computed(() => [
  {
    label: 'Корзина',
    link: '/basket',
  },
  {
    label: 'Оформления заказа',
  },
])
function isPhone(value: string) {
  if (!value?.length) {
    return true
  }
  const phoneNumber = parsePhoneNumber(value, 'UZ')
  return phoneNumber?.isValid()
}

const formStepOne = reactive({
  region: '',
  city: '',
  street: '',
})

const rules = computed(() => {
  return {
    region: { required },
    city: { required },
    street: { required },
  }
})

const formStepTwo = reactive({
  fullName: '',
  number: '',
})
const secondRules = computed(() => {
  return {
    fullName: { required },
    number: { required, isPhone },
  }
})
const formLastStep = reactive({
  card: '',
  exp: '',
})
const lastRules = computed(() => {
  return {
    card: { required },
    exp: { required },
  }
})
const otpForm = reactive({
  otp: ""
})
const otpRules= computed(()=>{
  return{
    otp : {required}
  }
})
const v$ = useVuelidate(rules, formStepOne)
const secondV$ = useVuelidate(secondRules, formStepTwo)
const lastV$ = useVuelidate(lastRules, formLastStep)
const otpV$ = useVuelidate(otpRules, otpForm)
const dialogStatus = ref(true)

const submitForm = async () => {
  switch (String(step.value)) {
    case '1':
      submitFormOne()
      break
    case '2':
      submitFormTwo()
      break
    case '3':
      submitFormLast()
      break
  }
}

const submitFormOne = () => {
  v$.value.$touch()
  if (v$.value.$error) return
  nextStep()
}
const submitFormTwo = () => {
  secondV$.value.$touch()
  if (secondV$.value.$error) return
  nextStep()
}
const submitFormLast = () => {
  lastV$.value.$touch()
  if (lastV$.value.$error) return
  otpStatus.value = true
  submitOtp()
}
const submitOtp=()=>{
  otpV$.value.$touch()
  if(otpV$.value.$error) return
  paymentStatus.value = true
}

const nextStep =()=>{
  if(step.value === 3) return
  step.value =  step.value +1;
}
const prevStep=()=>{
  step.value = step.value -1;
  if(step.value === 0) router.push('/basket ') 
}
</script>