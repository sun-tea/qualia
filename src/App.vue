<template>
  <div class="app m-24">
    <Recipe
      v-for="recipe in recipes"
      :title="recipe.title"
      :ingredients="recipe.ingredients"
      :steps="recipe.steps"
      :key="recipe.title"
    />
  </div>
</template>

<script>
import Recipe from './components/Recipe.vue';
let data = {
  recipes: [
    {
      title: 'Okonomoyaki',
      ingredients: ['cabbage', 'eggs', 'flour'],
      steps: ['Cut the cabbage', 'Add eggs, water, oil, then flour'],
    },
  ],
};

export default {
  name: 'App',
  components: {
    Recipe,
  },
  data() {
    return data;
  },
};
</script>

<style src="./assets/tailwind.css" />
<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
