<script setup>
import { ref } from 'vue'
let password = ref(localStorage.getItem('password').replace(/./g, '*'))

const email = localStorage.getItem('email')

const checkPassword = () => {
  password.value === '*'.repeat(password.value.length)
    ? (password.value = localStorage.getItem('password'))
    : (password.value = '*'.repeat(password.value.length))
}
</script>

<template>
  <div class="flex justify-start">
    <div class="sidebar-nav pr-16">
      <div class="profile_photo flex flex-col items-left">
        <label
          for="photo"
          class="relative w-32 h-32 rounded-full object-cover object-center border border-gray-300 cursor-pointer mb-4 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></label>
        <input
          type="file"
          name="photo"
          id="photo"
          accept=".jpg,.png,.gif"
          class="opacity-0 absolute z-[-1]"
        />
      </div>
      <div class="profile_name mb-2">
        <h2 class="text-lg font-bold mb-5">Личная информация</h2>
        <span class="text-xl font-bold">Вася Пупкин</span>
      </div>
      <ul class="sidebar-nav-links flex flex-col gap-2 m-0 p-0 list-none">
        <li><a href="" class="text-lg no-underline">Главная</a></li>
        <li><a href="" class="text-lg no-underline">Заказы</a></li>
        <li><a href="" class="text-lg no-underline">Корзина</a></li>
      </ul>
    </div>
    <div class="profile-info">
      <h2 class="text-3xl font-bold mb-8 align-center">Мои данные</h2>
      <div class="flex flex-col gap-4">
        <p>
          Ваш email: <span>{{ email }}</span>
        </p>
        <p>
          Ваш пароль:
          <span @click="checkPassword" class="cursor-pointer">{{ password }}</span>
        </p>
        <p>Адрес: <span></span></p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
