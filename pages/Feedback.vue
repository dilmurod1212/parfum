<template>
  <div class="container">
    <UIBreadCrumb v-bind="{routes}"/>
    <p class="text-4xl font-semibold text-dark">Обратная связь</p>
    <p class="text-gray text-xl font-medium my-1">Наша дружная команда будет рада слышать вас</p>
    <div class="grid grid-cols-2 gap-6 my-6">
        <div class="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg">
          <div>
            <FormLabel text="Имя"
            />
            <FormInput placeholder="Напишите свое имя"
                       :error="v$.name.$error" v-model="form.name"/>
          </div>
          <div>
            <FormLabel text="Номер телефона"/>
            <FormInput
              v-model="form.number"
              v-maska="'(##) ###-##-##'"
              :error="v$.number.$error"
              placeholder="(__) ___-__-__"
              class="w-full rounded-lg"
            >
              <template #prefix>
                <div
                  class="bg-gray-200 px-2 rounded-l-lg h-full flex-center"
                >
                  +998
                </div>
              </template>
            </FormInput>
          </div>
          <div class="col-span-2 h-[150px]">
         <textarea class="resize-none bg-gray-50 border w-full rounded-lg focus:ring-0 active:ring-0 ring-0 outline-none placeholder:text-gray-150 p-2 h-full" placeholder="Напишите текст"
                   :class="{'border-red' : v$.text.$error}"
                   v-model="form.text"
         ></textarea>
          </div>
          <div class="w-full flex justify-end col-span-2">
            <UIButton text="Отправить" @click="submitForm"/></div>
        </div>
      <div class="bg-white p-6 rounded-lg">
          <p class="text-xl text-dark font-semibold">Tashkent Parfume</p>
        <p class="text-gray my-1">Наслаждайтесь шопингом и покупайте любимые ароматы и новинки по приятным ценам.</p>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="(element, index) in parfumeInfo" :key="index" class="flex items-center p-[10px] border-[1px] rounded-xl">
            <i :class="element?.icon" class="mr-2 text-2xl text-gray"></i>
            <div class="">
              <p class="text-gray">{{element?.title}}</p>
              <p class="text-dark font-semibold">{{element?.subTitle}}</p>
            </div>
          </div>
          <div class="my-5">
            <i v-for="(element, idx) in parfumSocial" :key="idx" :class="element" class="mx-2 text-lg text-gray bg-gray-200 p-4 rounded-xl cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import parsePhoneNumber from 'libphonenumber-js'
const routes=computed(()=>[
  {
    label: "Мои заказы",
    link: ""
  }
])
function isPhone(value: string) {
  if (!value?.length) {
    return true
  }
  const phoneNumber = parsePhoneNumber(value, 'UZ')
  return phoneNumber?.isValid()
}
const form = reactive({
  name: '',
  number: '',
  text: ''
})
const rules = computed(()=>{
  return{
    name: {required},
    number: {required, isPhone},
    text: {required}
  }
})
const v$ = useVuelidate(rules, form)
const submitForm = () => {
  v$.value.$touch()
  if (v$.value.$error) return
}
const parfumeInfo =reactive([
  {
    title: 'Время работы',
    subTitle: '09:00 - 19:00',
    icon: "icon-clock-circle"
  },
  {
    title: 'Номер телефона',
    subTitle: "+998 (71) 200-07-70",
    icon: "icon-phone-calling"
  },
  {
    title: "Электронная почта",
    subTitle: "toshkentparfum@gmail.com",
    icon: "icon-letter-regular"
  },
  {
    title: "Адресс",
    subTitle: "Чиланзар 28/16",
    icon: "icon-location"
  }
])
const parfumSocial=ref(['icon-twitter', ' icon-youtube', 'icon-instagram', 'icon-telegram'])
</script>