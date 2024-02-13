<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import CardList from '../components/CardList.vue'

const favorites = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://227e933d38600ce7.mokky.dev/favorites?_relations=items'
    )
    favorites.value = data.map((item) => item.item)
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <div>
    <h2>Закладки</h2>
  </div>

  <CardList :items="favorites" is-favorites />
</template>
