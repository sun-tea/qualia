<template>
  <div class="app">
    <div class="wrapper">
      <Search v-on:search-recipes="fetchRecipes" />
      <div class="recipes">
        <Recipe v-for="recipe in recipes" :recipe="recipe" :key="recipe.id" />
      </div>
    </div>
  </div>
</template>

<script>
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
    recipes() {
      return this.$store.state.recipes.recipes;
    },
  },
  methods: {
    fetchRecipes(items) {
      this.$store.dispatch(FETCH_RECIPES, items);
    },
  },
};
</script>

<style src="./assets/tailwind.css" />
<style scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @apply bg-orange-200;
}

.wrapper {
  @apply p-24 flex text-center;
}

.recipes {
  @apply flex-1 shadow-xl mx-6 bg-white rounded-lg;
}
</style>
