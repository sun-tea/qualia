<template>
  <div class="wrapper">
    <div class="flex-shrink-0">
      <img class="w-2/6" :src="recipe.image" alt="recipe pic" />
    </div>
    <div class="ml-6 pt-1">
      <h4 class="text-xl text-gray-900 leading-tight">{{ recipe.title }}</h4>
      <div class="text-base text-gray-600 leading-normal">
        <div v-for="item in recipe.missedIngredients" :key="item.id">{{ item.name }}</div>
      </div>
      <!-- <p class="text-sm pt-8 text-blue-600 leading-normal">{{ steps }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  props: ['recipe'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  @apply max-w-3xl;
  @apply mx-auto;
  @apply flex;
  @apply p-6;
  @apply bg-white;
  @apply rounded-lg;
  @apply shadow-xl;
}
</style>
