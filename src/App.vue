<script setup>
import { ref, watch, provide, computed } from 'vue'
import axios from 'axios'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

/**
 * CART
 */

const cart = ref([])

const drawerOpen = ref(false)

const totalPrice = computed(() => cart.value.reduce((acc, item) => (acc += item.price), 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const cartIsEmpty = computed(() => cart.value.length === 0)

const cartButtonDisabled = computed(() => isCreatingOrder.value || cartIsEmpty.value)

const isCreatingOrder = ref(false)

const closeDrawer = () => {
  drawerOpen.value = false
}

const openDrawer = () => {
  drawerOpen.value = true
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const createOrder = async () => {
  try {
    isCreatingOrder.value = true
    const { data } = await axios.post('https://227e933d38600ce7.mokky.dev/orders', {
      items: cart.value,
      totalPrice: totalPrice.value
    })
    cart.value = []
    return data
  } catch {
    console.log('error')
  } finally {
    isCreatingOrder.value = false
  }
}
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
/**
 * CART END
 */
</script>

<template>
  <Drawer
    v-if="drawerOpen"
    :total-price="totalPrice"
    :vatPrice="vatPrice"
    @create-order="createOrder"
    :cart-button-disabled="cartButtonDisabled"
  />
  <div class="bg-white w-4/5 m-auto h-screen rounded-xl mt-14">
    <Header :total-price="totalPrice" @openDrawer="openDrawer" />
    <div class="p-10">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
