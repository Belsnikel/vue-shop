<script setup>
import CardList from '../components/CardList.vue'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { reactive, inject, watch, ref, onMounted } from 'vue'

const { addToCart, removeFromCart, cart } = inject('cart')

const items = ref([])

const onClickAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }

  console.log(cart)
}

const filters = reactive({
  sortBy: '',
  searchQuery: ''
})

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearchInput = debounce((event) => {
  filters.searchQuery = event.target.value
}, 1000)

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        item_id: item.id
      }
      item.isFavorite = true

      const { data } = await axios.post('https://227e933d38600ce7.mokky.dev/favorites', obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://227e933d38600ce7.mokky.dev/favorites/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get('https://227e933d38600ce7.mokky.dev/favorites')

    items.value = items.value.map((item) => {
      const favorite = favorites.find((favorite) => favorite.item_id === item.id)

      if (!favorite) {
        return item
      }
      return {
        ...item,
        isFavorite: true,
        favoriteId: favorite.id
      }
    })
  } catch (err) {
    console.log(err)
  }
}

const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy
    }
    if (filters.searchQuery) {
      params.title = `*${filters.searchQuery}*`
    }
    const { data } = await axios.get('https://227e933d38600ce7.mokky.dev/items', {
      params
    })

    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      favoriteId: null,
      isAdded: false
    }))
  } catch (err) {
    console.log(err)
  }
}

watch(cart, () => {
  items.value = items.value.map((item) => ({
    ...item,
    isAdded: false
  }))
})

watch(filters, fetchItems)

onMounted(async () => {
  const localCart = localStorage.getItem('cart')
  cart.value = localCart ? JSON.parse(localCart) : []
  await fetchItems()
  await fetchFavorites()

  items.value = items.value.map((item) => ({
    ...item,
    isAdded: cart.value.some((cartItem) => cartItem.id === item.id)
  }))
})
</script>
<template>
  <div class="flex gap-4">
    <h2 class="flex-1 text-3xl font-bold">Все Кроссовки</h2>
    <select @change="onChangeSelect" class="py-2 px-3 border rounded-md outline-none">
      <option value="name">По названию</option>
      <option value="price">По цене (дешёвые)</option>
      <option value="-price">По цене (дорогие)</option>
    </select>
    <div class="relative">
      <img class="absolute left-4 top-2.5" src="/search.svg" alt="" />
      <input
        @input="onChangeSearchInput"
        class="border rounded-md py-1.5 pl-11 pr-4 outline-none focus:border-gray-400"
        type="text"
        placeholder="Поиск..."
      />
    </div>
  </div>
  <CardList :items="items" @add-to-favorite="addToFavorite" @add-to-cart="onClickAddPlus" />
</template>
