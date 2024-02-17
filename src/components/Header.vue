<script setup>
defineProps({
  totalPrice: Number
})

const emit = defineEmits(['openDrawer', 'openAuthForm'])
</script>

<template>
  <header class="flex justify-between border-b border-slate-300 px-10 py-8">
    <router-link to="/">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Vue sneakers</h2>
          <p class="text-slate-500">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 cursor=pointer text-gray-500 hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} руб.</b>
      </li>
      <router-link to="/favorites">
        <li class="flex items-center gap-3 cursor=pointer text-gray-500 hover:text-black">
          <img src="/heart.svg" alt="Cart" />
          <span>Закладки</span>
        </li>
      </router-link>

      <router-link to="/profile">
        <li
          @click="() => emit('openAuthForm')"
          class="flex items-center gap-3 cursor=pointer text-gray-500 hover:text-black"
        >
          <img src="/profile.svg" alt="Cart" />
          <span>Войти</span>
        </li>
      </router-link>
    </ul>
  </header>
</template>

<style scoped>
/* // проверяет есть ли токен в localStorage и отображает кнопку "Войти" или "Профиль"

// ПЫ.СЫ. нужно записывать токен в localStorage после отправки формы */
</style>
