<template>
  <div class="recipe-wrapper" @click="onRecipeClick">
    <div class="flex-shrink-0">
      <img class="h-56" :src="recipe.image" alt="recipe pic" />
    </div>
    <div class="ml-6 pt-1">
      <h1 class="text-3xl text-gray-900 leading-tight">{{ recipe.title }}</h1>
      <div class="ingredients">
        <div
          class="ingredient"
          v-for="ingredient in recipe.uniqueIngredients"
          :key="ingredient.id"
        >{{ ingredient.name }}</div>
      </div>
      <p
        class="text-2xl text-orange-500"
        v-if="recipe.readyInMinutes"
      >{{ recipe.readyInMinutes }} minutes</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipePreview',
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onRecipeClick: function () {
      this.$emit('recipe-click-handler', this.recipe.id);
    },
  },
};
</script>

<style scoped>
.recipe-wrapper {
  @apply mx-auto flex m-8 bg-white rounded-lg text-left cursor-pointer;
}

.recipe-wrapper:not(:last-child) {
  @apply mb-0;
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
