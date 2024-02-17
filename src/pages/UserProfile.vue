<script setup></script>

<template>
  <div class="flex justify-start">
    <div class="sidebar-nav pr-10">
      <h2 class="text-xl font-bold mb-8">Личная информация</h2>
      <div class="profile_photo flex flex-col items-center">
        <label for="photo"></label>
        <input
          type="file"
          name="photo"
          id="photo"
          accept=".jpg,.png,.gif"
          class="w-32 h-32 rounded-full object-cover object-center border border-gray-300 cursor-pointer mb-4 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div class="profile_name">
        <span class="text-lg font-bold">Вася Пупкин</span>
      </div>
      <ul class="sidebar-nav-links flex flex-col gap-2 m-0 p-0 list-none">
        <li><a href="" class="font-bold text-sm no-underline">Главная</a></li>
        <li><a href="" class="font-bold text-sm no-underline">Заказы</a></li>
        <li><a href="" class="font-bold text-sm no-underline">Корзина</a></li>
      </ul>
    </div>
    <div class="profile-info">
      <h2 class="text-3xl font-bold mb-8 align-center">Мои данные</h2>
      <div class="flex flex-col gap-4">
        <label for="email">Ваш email:</label>
        <input type="email" id="email" />
        <label for="password">Ваш пароль:</label>
        <input type="password" id="password" />
        <label for="about">Адрес:</label>
        <input type="text" id="about" />
        <button>Изменить данные</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
input#file-upload-button {
  display: none !important;
}
</style>
