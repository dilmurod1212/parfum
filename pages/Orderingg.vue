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
            class="flex-center border-light-extra py-2 rounded-3xl px-4 w-full bg-light text-red"
            :class="[
              { '!bg-light-extra': step === 1 },
              { '!bg-red !text-white': step < completedStep },
            ]"
            @click="step = 1"
          >
            <i class="icon-location mr-2"></i> Адрес доставки
          </li>
          <li
            class="flex-center bg-gray-200 py-2 rounded-3xl px-4 w-full"
            :class="[
              { '!bg-light-extra': step === 2 },
              { '!bg-red !text-white':step < completedStep },
            ]"
            @click="step = 2"
          >
            <i class="icon-location mr-2"></i>Контактные данные
          </li>
          <li
            class="flex-center m-auto bg-gray-200 py-2 rounded-3xl px-4 w-full"
            :class="[
              { '!bg-light-extra': step === 3 },
              { '!bg-red !text-white': step < completedStep },
            ]"
            @click="step = 3"
          >
            <i class="icon-location mr-2"></i>Оплата
          </li>
        </ul>
        <div class="bg-white my-5 rounded-lg p-5">
          <TransitionGroup name="fade" mode="out-in">
            <div v-if="step === 1">
              <p class="text-2xl text-dark font-semibold border-b pb-4">
                Адрес доставки
              </p>
              <form action="" class="my-4 grid grid-cols-2 gap-5">
                <div>
                  <FormLabel text="Регион" />
                  <div
                    class="cursor-pointer"
                    @click="inputStatus = !inputStatus"
                  >
                    <FormInput
                      placeholder="Выберите регион"
                      class="cursor-pointer pointer-events-none"
                    >
                      <template #suffix>
                        <i class="icon-chevron-down"></i>
                      </template>
                    </FormInput>
                    <ul
                      class="w-full border rounded-md p-3 mt-2"
                      v-if="inputStatus"
                    >
                      <li class="border-b pb-1">Bukhara</li>
                      <li class="border-b pb-1 my-1">Tashkent</li>
                      <li class="border-b pb-1 my-1">Samarkand</li>
                      <li class="border-b pb-1 my-1">Khiva</li>
                      <li class="border-b pb-1 mt-1">Nukus</li>
                      <li>Fergana</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <FormLabel text="Район/город" />
                  <div
                    class="cursor-pointer"
                    @click="inputStatus = !inputStatus"
                  >
                    <FormInput
                      placeholder="Выберите район/город"
                      class="cursor-pointer pointer-events-none"
                    >
                      <template #suffix>
                        <i class="icon-chevron-down"></i>
                      </template>
                    </FormInput>
                    <ul
                      class="w-full border rounded-md p-3 mt-2"
                      v-if="inputStatus"
                    >
                      <li class="border-b pb-1">Bukhara</li>
                      <li class="border-b pb-1 my-1">Tashkent</li>
                      <li class="border-b pb-1 my-1">Samarkand</li>
                      <li class="border-b pb-1 my-1">Khiva</li>
                      <li class="border-b pb-1 mt-1">Nukus</li>
                      <li>Fergana</li>
                    </ul>
                  </div>
                </div>
                <div class="col-span-2">
                  <FormLabel text="Адрес" />
                  <FormInput placeholder="Выберите район/город" />
                  <ul
                    class="w-full border rounded-md p-3 mt-2"
                    v-if="inputStatus"
                  >
                    <li class="border-b pb-1">Bukhara</li>
                    <li class="border-b pb-1 my-1">Tashkent</li>
                    <li class="border-b pb-1 my-1">Samarkand</li>
                    <li class="border-b pb-1 my-1">Khiva</li>
                    <li class="border-b pb-1 mt-1">Nukus</li>
                    <li>Fergana</li>
                  </ul>
                </div>
                <p class="text-dark border border-green p-2 rounded-lg">
                  <span
                    class="mr-2 text-sm border border-green px-2 rounded-full text-green"
                    >!</span
                  >Заказ будет доставлен в точку местоположения
                </p>
              </form>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11983.184783059016!2d69.27582199999999!3d41.3350449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1704966877419!5m2!1sru!2s"
                width="100%"
                height="450"
                style="border: 0"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="rounded-lg"
              ></iframe>
              <div class="flex items-center justify-between border-t pt-5 mt-5">
                <UIButton text="В корзину" variant="gray">
                  <template #prefix>
                    <i class="icon-arrow-left text-xl"></i>
                  </template>
                </UIButton>
                <UIButton text="Продолжить">
                  <template #suffix>
                    <i class="icon-arrow-right text-xl"></i>
                  </template>
                </UIButton>
              </div>
            </div>
            <div v-if="step === 2">
              <p class="text-2xl text-dark font-semibold border-b pb-4">
                Контактные данные
              </p>
              <form action="" class="grid grid-cols-2 gap-5">
                <div>
                  <FormLabel text="Имя" />
                  <FormInput placeholder=" " />
                </div>
                <div>
                  <FormLabel text="Номер телефона" />
                  <FormInput
                    v-model="formData.phone"
                    v-maska="'(##) ###-##-##'"
                    :error="v$.phone.$error"
                    placeholder="(__) ___-__-__"
                    class="w-full rounded-lg"
                    @enter="submitForm"
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
                <transition name="fade" mode="out-in">
                  <div :key="addNewNum">
                    <UIButton
                      text=" Добавить доп. номер телефона"
                      variant="light"
                      @click="addNewNum = true"
                      v-if="!addNewNum"
                    >
                      <template #prefix>
                        <i
                          class="icon-phone border rounded-full mr-2 text-lg text-red border-red"
                        >
                        </i>
                      </template>
                    </UIButton>

                    <FormInput
                      v-else
                      v-model="formData.phone"
                      v-maska="'(##) ###-##-##'"
                      :error="v$.phone.$error"
                      placeholder="(__) ___-__-__"
                      class="w-full rounded-lg"
                      @enter="submitForm"
                    >
                      <template #prefix>
                        <div
                          class="bg-gray-200 px-2 rounded-l-lg h-full flex-center"
                        >
                          +998
                        </div>
                      </template>
                      <template #suffix>
                        <i
                          class="icon-close-circle text-xl text-gray cursor-pointer"
                          @click="resetNewNumber"
                        ></i>
                      </template>
                    </FormInput>
                  </div>
                </transition>
              </form>
              <div class="flex items-center justify-between mt-5 pt-5 border-t">
                <UIButton text="В корзину" variant="gray">
                  <template #prefix>
                    <i class="icon-arrow-left text-xl"></i>
                  </template>
                </UIButton>
                <UIButton text="Продолжить">
                  <template #suffix>
                    <i class="icon-arrow-right text-xl"></i>
                  </template>
                </UIButton>
              </div>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// const step = ref(1)
// const completedStep = ref(1)
import { ref } from 'vue'
import Steps from 'primevue/steps'
const inputStatus = ref(false)
const step = ref(1)
const completedStep = ref(2)
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useAuthStore } from '~/stores/auth'
const addNewNum = ref(false)
const formData = reactive({
  password: '',
  phone: '',
})
const rules = computed(() => {
  return {
    password: { required },
    phone: { required },
  }
})
const v$ = useVuelidate(rules, formData)
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
const resetNewNumber = () => {
  setTimeout(() => {
    addNewNum.value = false
  }, 100)
}
</script>

