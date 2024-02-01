<template>
    <div class="grid grid-cols-3 gap-6">
        <div v-for="(element, index) in paymentData" :key="index"
        class="flex items-center border rounded-md p-4"
        >
            <img :src="element?.img" alt="" class="">
            <p class="text-base text-dark ml-2">{{ element?.name }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
const paymentData = reactive([
    {
        name: 'Наличные',
        img: "/images/Payment/payment1.svg",
        id: '1'
    },
   
    {
        name: "",
        img: "/images/Payment/payme.svg",
        id: 2
    },
    {
        name: "",
        img: "/images/Payment/click.svg",
        id: 3
    },
    {
        name: "",
        img: "/images/Payment/uzum.svg",
        id: 4
    },
    {
        name: "",
        img: "/images/Payment/paynet.svg",
        id: 5
    }
])

</script>