<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String
})
</script>
<template>
  <div class="flex flex-col justify-center text-center items-center w-72 mx-auto">
    <img height="100" width="100" :src="imageUrl" alt="Info image" />
    <h1 class="mt-4 text-2xl font-medium">{{ title }}</h1>
    <p class="text-gray-400 mt-2">{{ description }}</p>
  </div>
</template>
