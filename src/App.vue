<template>
  <div class="app m-24">
    <Search />
    <Recipe v-for="recipe in recipes" :recipe="recipe" :key="recipe.id" />
  </div>
</template>

<script>
/* eslint-disable no-debugger */

import Recipe from './components/Recipe.vue';
import Search from './components/Search.vue';
import { FETCH_RECIPES } from './store/actions.type';

export default {
  name: 'App',
  components: {
    Recipe,
    Search,
  },
  computed: {
    recipesConfig() {
      return {
        ingredients: 'cabbage',
      };
    },
    recipes() {
      return this.$store.state.recipes.recipes;
    },
  },
  mounted() {
    // this.fetchRecipes();
  },
  methods: {
    fetchRecipes() {
      this.$store.dispatch(FETCH_RECIPES, this.recipesConfig);
    },
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
