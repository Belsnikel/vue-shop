<script setup>
import { ref } from 'vue'

const onChangeEmailInput = ref('email')
const onChangePasswordInput = ref('password')

let isChecked = ref(true)

const showPass = () => {
  isChecked.value = !isChecked.value
}

const setAuthData = () => {
  localStorage.setItem('email', onChangeEmailInput.value)
  localStorage.setItem('password', onChangePasswordInput.value)
}

const emit = defineEmits(['closeAuthForm'])
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full z-10">
    <div
      class="flex w-2/4 flex-col m-auto justify-center px-6 py-[6.5rem] pb-[8rem] px-4 mt-[14rem] bg-[#F7FEE7] relative shadow-[0_0_68px_16px_rgba(0,0,0,0.26)]"
    >
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Регистрация
        </h2>
      </div>
      <div
        @click="() => emit('closeAuthForm')"
        class="absolute top-1.5 right-2.5 text-4xl cursor-pointer"
      >
        &#x2715;
      </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit="() => emit('closeAuthForm')" class="space-y-6" action="#" method="POST">
          <div>
            <label for="email" class="block text-lg font-medium leading-6 text-gray-900"
              >Эл. почта</label
            >
            <div class="mt-2">
              <input
                v-model="onChangeEmailInput"
                id="email"
                type="email"
                placeholder="LJyZy@example.com"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-lg font-medium leading-6 text-gray-900"
                >Пароль</label
              >
              <div class="text-lg">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Забыли пароль?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                v-model="onChangePasswordInput"
                id="password"
                name="password"
                placeholder=""
                :type="isChecked ? 'password' : 'text'"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-3 mb-[8px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              />
            </div>
            <div class="showpas relative flex justify-end">
              <input
                @click="showPass"
                type="checkbox"
                id="showPassword"
                name="showPassword"
                class="custom-checkbox"
              />
              <label
                for="showPassword"
                class="relative font-semibold text-indigo-600 hover:text-indigo-500"
                >Показать пароль
              </label>
            </div>
          </div>

          <div>
            <button
              @click="setAuthData"
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Зарегистрироваться
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox + label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.custom-checkbox:checked + label::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: #b3d7ff;
}
/* стили для активного состояния чекбокса (при нажатии на него) */
.custom-checkbox:not(:disabled):active + label::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}
/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
/* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
.custom-checkbox:focus:not(:checked) + label::before {
  border-color: #80bdff;
}
/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled + label::before {
  background-color: #e9ecef;
}
</style>

<!-- 
  сделать проверку:
  если логин или пароль есть в localStorage, то открывается страница пользователя
  добавить показать пароль и валидацию минимальной длинны пароля
 -->
