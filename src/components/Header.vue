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
        <img src="/logo.webp" alt="Logo" class="w-28" />
        <div>
          <h2 class="text-white text-xl font-bold uppercase">Buddy Book</h2>
          <p class="text-white">Лучший магазин книг</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 cursor=pointer text-white hover:text-black"
      >
        <img src="/cart.svg" alt="Cart" />
        <b>{{ totalPrice }} руб.</b>
      </li>
      <router-link to="/favorites">
        <li class="flex items-center gap-3 cursor=pointer text-white hover:text-black">
          <img src="/heart.svg" alt="Cart" />
          <span>Закладки</span>
        </li>
      </router-link>

      <li
        @click="() => emit('openAuthForm')"
        class="flex items-center gap-3 cursor=pointer text-white hover:text-black"
      >
        <img src="/profile.svg" alt="Cart" />
        <span>Войти</span>
      </li>
    </ul>
  </header>
</template>
