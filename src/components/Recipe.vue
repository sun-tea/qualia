<template>
  <div class="recipe-wrapper">
    <div class="flex-shrink-0">
      <img class="h-56" :src="recipe.image" alt="recipe pic" />
    </div>
    <div class="ml-6 pt-1">
      <h4 class="text-3xl text-gray-900 leading-tight">{{ recipe.title }}</h4>
      <div class="ingredients">
        <div class="ingredient" v-for="item in recipe.missedIngredients" :key="item.id">
          {{ item.name }}
        </div>
      </div>
      <p class="text-2xl text-orange-500" v-if="recipe.readyInMinutes">
        {{ recipe.readyInMinutes }} minutes
      </p>
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
.recipe-wrapper {
  @apply mx-auto flex p-8 bg-white rounded-lg text-left;
}

.recipe-wrapper:not(:last-child) {
  @apply pb-0;
}

.ingredients {
  @apply text-2xl text-gray-600 flex flex-wrap;
}

.ingredient {
  @apply whitespace-no-wrap;
}

.ingredient:not(:last-child)::after {
  content: ' - ';
  white-space: pre;
}
</style>
