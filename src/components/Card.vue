<script setup>
const props = defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})

const visibleFavoriteButton = Boolean(props.onClickAdd)
</script>
<template>
  <div>
    <div
      class="relative m-10 bg-white border border-slate-100 rounded-xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        v-if="visibleFavoriteButton"
        :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
        alt="Like 1"
        class="absolute top-8 left-8"
        @click="onClickFavorite"
      />
      <img :src="imageUrl" alt="Sneaker" />
      <p class="mt-2">{{ title }}</p>
      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span>Цена:</span>
          <b>{{ price }}</b>
        </div>
        <img
          v-if="visibleFavoriteButton"
          @click="onClickAdd"
          :src="!isAdded ? '/plus.svg' : '/checked.svg'"
          alt="Plus"
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
