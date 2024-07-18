<script setup>
import { ref, watch, provide, computed } from 'vue'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'
// import AuthForm from './components/AuthForm.vue'
import SignUp from './components/SignUp.vue'
import { useAuthStore } from './stores/auth'
// import SignIn from './components/SignIn.vue'

defineProps({
  signIn: Boolean
})

const cart = ref([])

const drawerOpen = ref(false)

const authFormOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => (acc += item.price), 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const authStore = useAuthStore()

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}
const openAuthForm = () => {
  authFormOpen.value = true
}
const closeAuthForm = () => {
  authFormOpen.value = false
}
const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'))
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
    authStore.userInfo.expiresIn = tokens.expiresIn
  }
  console.log(authStore.userInfo)
}

checkUser()

watch(
  cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value))
  },
  { deep: true }
)
provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})
</script>

<template>
  <Drawer v-if="drawerOpen" :total-price="totalPrice" :vatPrice="vatPrice" />
  <div class="bg-[#624f71e6] w-4/5 m-auto rounded-xl mt-14">
    <Header :total-price="totalPrice" @openDrawer="openDrawer" @openAuthForm="openAuthForm" />
    <!-- <AuthForm v-if="authFormOpen" @closeAuthForm="closeAuthForm" /> -->
    <SignUp v-if="authFormOpen" @closeAuthForm="closeAuthForm" />
    <!-- <SignIn v-if="authFormOpen && signIn" @closeAuthForm="closeAuthForm" /> -->
    <div class="p-10">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
