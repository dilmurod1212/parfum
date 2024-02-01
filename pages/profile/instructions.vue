<template>
<div
v-if="shouldRenderLink"
 class="grid grid-cols-2 items-center justify-between gap-5">
        <NuxtLink 
        @click="removeElement"
         to="/profile/instructions/page"  class="rounded-xl bg-slate-100 p-4 group cursor-pointer transition-200 border border-transparent">
                    <div  class="inline">
                        <p class="transition-200 text-sm font-bold text-dark leading-130 group-hover:text-red">
                            Регистрация в приложения
                        </p>
                    </div>
                    <div class="mt-4 bg-white rounded-[9px] py-2 px-3 transition-200">

                        <div class="inline">
                            <div class="text-xs font-semibold text-dark leading-130 mb-2 line-clamp-[4]">
                                <p>Регистрация состоит из 3-х шагов На 1-м этапе вы вводите свои личные данные (Ф.И.Ш, номер телефона, адрес проживания) и подтверждаете свой профиль кодом подтверждения, отправленным на ваш номер телефона. После проверки вы устанавливаете пароль и пользуетесь приложениемРегистрация состоит из 3-х шагов На 1-м этапе вы вводите свои личные данные (Ф.И.Ш, номер телефона, адрес проживания) и подтверждаете свой профиль кодом подтверждения, отправленным на ваш номер телефона. После проверки вы устанавливаете пароль и пользуетесь приложением</p>
                            </div>
                        </div>
                        <div  class="inline">
                        <div class="transition-200 flex-y-center gap-1 text-dark  group-hover:text-red text-xs leading-130 font-normal group">
                                Подробнее 
                            <i class="icon-arrow-right text-red text-lg transition-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"></i>
                        </div>
                    </div>
            </div>
        </NuxtLink>
        <NuxtLink 
        @click="removeElement"
         to="/profile/instructions/page"  class="rounded-xl bg-slate-100 p-4 group cursor-pointer transition-200 border border-transparent">
            <div  class="inline">
                  <p class="transition-200 text-sm font-bold text-dark leading-130 group-hover:text-red">
                    Покупка товара
                   </p>
            </div>
            <div class="mt-4 bg-white rounded-[9px] py-2 px-3 transition-200">

                <div class="inline">
                      <div class="text-xs font-semibold text-dark leading-130 mb-2 line-clamp-[4]">
                        <p>Регистрация состоит из 3-х шагов На 1-м этапе вы вводите свои личные данные (Ф.И.Ш, номер телефона, адрес проживания) и подтверждаете свой профиль кодом подтверждения, отправленным на ваш номер телефона. После проверки вы устанавливаете пароль и пользуетесь приложениемРегистрация состоит из 3-х шагов На 1-м этапе вы вводите свои личные данные (Ф.И.Ш, номер телефона, адрес проживания) и подтверждаете свой профиль кодом подтверждения, отправленным на ваш номер телефона. После проверки вы устанавливаете пароль и пользуетесь приложением</p>
                      </div>
                  </div>
                <div  class="inline">
                  <div class="transition-200 flex-y-center gap-1 text-dark  group-hover:text-red text-xs leading-130 font-normal group">
                        Подробнее 
                     <i class="icon-arrow-right text-red text-lg transition-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"></i>
                 </div>
            </div>
       </div>
        </NuxtLink>
</div>

          <div>
            <NuxtPage/>
          </div>






</template>
<script lang="ts" setup>
const shouldRenderLink = ref(true)
function removeElement() {
  shouldRenderLink.value = false
}
definePageMeta({
  layout: "profile"
})
</script>