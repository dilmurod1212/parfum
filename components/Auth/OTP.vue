<template>
  <div class="flex flex-col h-full">
    <div class="text-left">
     <slot>
      <i
        class="icon-arrow-left text-4xl hover:text-gray transition-all duration-300 ease-in-out cursor-pointer"
        @click="$emit('on-change', 'info')"
      ></i>
     </slot>
    </div>
    <div class="my-[60px] pt-16 grow mb-[100px]">
      <p class="text-2xl font-semibold">{{ $t('enterCode') }}</p>
      <p class="text-extra text-md my-[7px]">{{ $t('verifyCode') }}</p>
      <p class="text-md font-semibold flex items-center justify-center mb-5">
        {{ values?.phone }}
        <i class="icon-edit-square mx-2 text-xl text-gray-extra cursor-pointer" @click="$emit('on-change', 'info')"></i>
      </p>
      <FormOtp :error="v$.otp.$error" v-model="values.otp"/>
      <p class="text-sm text-gray flex items-center justify-center my-[14px]">
        {{ $t('notReceiveCode') }}
        <span class="text-red mx-2 cursor-pointer" @click="startTimer">{{ $t(timerText) }}</span>
      </p>
    </div>
    <UIButton :text="$t('confirm')" variant="red" @click="submitForm"/>
  </div>
</template>
<script setup lang="ts">
 const myButton = ref(null);
interface Props {
  form: {
    v$: any
    values: any
  }
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'on-change', val: string): void
}>()

const { values, v$ } = unref(props.form)

const submitForm = async () => {
  v$.otp.$touch()
  if (v$.otp.$invalid) return
  emit('on-change', 'password')
  console.log(emit)
}
    const buttonText = ref('resend');
    const timer = ref();
    const timerSeconds = ref(60); 
    const isTimerRunning = ref(false);


    const timerText = computed(() => {
      return isTimerRunning.value ? `(${timerSeconds.value}s)` : 'resend';
    });


    const startTimer = () => {
      if (!isTimerRunning.value) {
        isTimerRunning.value = true;
        timer.value = setInterval(() => {
          if (timerSeconds.value > 0) {
            timerSeconds.value--;
          } else {
            clearInterval(timer.value);
            isTimerRunning.value = false;
            timerSeconds.value = 60; 
          }
        }, 1000);
      }
    };
</script>