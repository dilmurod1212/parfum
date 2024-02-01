<template>
  <div>
    <LayoutHeader />
  </div>
  <img
    class="absolute top-0 h-[600px] z-[-55]"
    src="/images/vektor1.png"
    alt=""
  />
  <img
    class="absolute top-0 h-[600px] z-[-55]"
    src="/images/vektor2.png"
    alt=""
  />
  <div class="flex items-center justify-center text-center">
    <div class="gap-10 mt-[50px]">
      <img src="/images/error404.png" alt="" />
      {{ error }}
      <h2 class="font-proxima text-black text-[30px] font-normal leading-7">
        Ошибка!
      </h2>
      <pre></pre>
      <p class="text-[20px] mt-3 font-normal leading-7">
        Страница не существует или недоступна
      </p>
      <div class="flex justify-center mt-3">
        <nuxt-link to="/">
          <FormButton size="md" variant="red" text="Перейти на главную">
          </FormButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  error: object
}
defineProps<Props>()
</script>
