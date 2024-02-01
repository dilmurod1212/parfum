<template>
  <div>
    <p class="text-2xl text-dark font-semibold border-b pb-4">Адрес доставки</p>
    <form action="" class="my-4 grid grid-cols-2 gap-5">
      <div>
        <FormLabel text="Регион" />
        <div
          class="cursor-pointer relative"
          @click="
            [
              (regionDropDown = !regionDropDown),
              (cityDropDown = false),
              (streetDropDown = false),
            ]
          "
        >
          <FormInput
            placeholder="Выберите регион"
            class="cursor-pointer pointer-events-none"
            :modelValue="values.region"
            :error="v$.region.$error"
          >
            <template #suffix>
              <i class="icon-chevron-down"></i>
            </template>
          </FormInput>
          <!--          -----  -->
          <!--          {{ regions }}fefefe-->
          <ul
            class="w-full border rounded-md mt-2 transform translate-y-1/6 transition-all opacity-0 max-h-[245px] overflow-scroll absolute z-[999] bg-white"
            :class="{
              'transform -translate-y-0 transition-all opacity-100':
                regionDropDown,
            }"
            v-show="regionDropDown"
          >
            <li
              v-for="(el, idx) in regions"
              @click="fetchCountry(el.id, el.title)"
              class="border-b pl-3 py-2 hover:bg-gray-200 transition-all"
            >
              {{ el?.title }}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <FormLabel text="Район/город" />
        <div
          class="cursor-pointer relative"
          @click="
            [
              (cityDropDown = !cityDropDown),
              (regionDropDown = false),
              (streetDropDown = false),
            ]
          "
        >
          <FormInput
            placeholder="Выберите район/город"
            class="cursor-pointer pointer-events-none"
            :modelValue="values.city"
            :error="v$.city.$error"
          >
            <template #suffix>
              <i class="icon-chevron-down"></i>
            </template>
          </FormInput>
          <ul
            class="w-full border rounded-md transform mt-2 translate-y-1/6 transition-all opacity-0 max-h-[245px] overflow-scroll absolute z-[999] bg-white"
            :class="{
              'transform -translate-y-0 transition-all opacity-100':
                cityDropDown,
            }"
            v-show="cityDropDown"
          >
            <li
              v-for="item in countryData"
              class="border-b pl-3 py-2 hover:bg-gray-200 transition-all"
              @click="addSelectedCity(item?.title)"
            >
              {{ item?.title }}
            </li>
          </ul>
        </div>
      </div>
      <div
        class="col-span-2 relative"
        @click="
          [
            (streetDropDown = !streetDropDown),
            (regionDropDown = false),
            (cityDropDown = false),
          ]
        "
      >
        <FormLabel text="Адрес" />
        <FormInput
          placeholder="Выберите район/город"
          v-model="values.street"
          :error="v$.street.$error"
        />
        <ul
          class="w-full border rounded-md transform mt-2 translate-y-1/6 transition-all opacity-0 max-h-[245px] overflow-scroll absolute z-[999] bg-white"
          :class="{
            'transform -translate-y-0 transition-all opacity-100 cursor-pointer':
              streetDropDown,
          }"
          v-show="streetDropDown"
        >
          <li
            class="border-b pl-3 py-2 hover:bg-gray-200 transition-all"
            @click="addSelectedStreet(el?.description + el?.name)"
            v-for="(el, idx) in locations"
            :key="idx"
          >
            {{ el?.description + el?.name }}
          </li>
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
  </div>
</template>
<script setup lang="ts">
const regionDropDown = ref(false)
const cityDropDown = ref(false)
const streetDropDown = ref(false)

interface Props {
  form: {
    v$: any
    values: any
  }
}

const addSelectedRegion = (region: string) => {
  values.region = region
}
const addSelectedCity = (city: string) => {
  values.city = city
}
const addSelectedStreet = (street: string) => {
  values.street = street
}

const props = defineProps<Props>()

const { values, v$ } = unref(props.form)
const regions = ref([])
async function fetchRegion() {
  const { data } = await useFetch(
    `https://toshkent-parfum.uz/api/v1/common/region`,
  )
  regions.value = data.value.results
}
fetchRegion()
// const countries = data.value.results
const countryData = ref([])
const locations = ref([])

async function fetchCountry(id: number, country: string) {
  const { data } = await useFetch(
    `https://toshkent-parfum.uz/api/v1/common/district/?region=${id}`,
  )
  countryData.value = data.value.results
  values.region = country
  values.city = ''
}

const locationData = ref([])
async function fetchLocation(text: string) {
  locations.value = []
  const { data } = await useFetch(
    `https://search-maps.yandex.ru/v1/?text=${text}&type=geo&lang=ru_RU&apikey=4c7ceb83-8d27-4a9f-beed-63d4e06a3588\n`,
  )
  for (let i = 0; i < data.value?.features?.length; i++) {
    locations.value.push<{ data: string; name: string; uri: string }>({
      description: data.value?.features[i].properties?.description,
      name: data.value?.features[i].properties?.name,
      uri: data.value?.features[i].properties?.uri,
    })
  }
}
watch(
  () => values.street,
  () => {
    fetchLocation(values.street)
  },
)
</script>
