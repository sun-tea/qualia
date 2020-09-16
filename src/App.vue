<template>
  <div class="app">
    <div class="wrapper">
      <Search @search-recipes="fetchRecipes" />
      <div class="content">
        <Pagination
          v-if="recipesCount"
          :current-page="currentPage"
          :total="recipesCount"
          :per-page="perPage"
          @page-change="pageChangeHandler"
          class="p-8 pb-0"
        />
        <div class="recipes">
          <Recipe v-for="recipe of displayedRecipes" :recipe="recipe" :key="recipe.id" />
        </div>
        <Pagination
          v-if="recipesCount"
          :current-page="currentPage"
          :total="recipesCount"
          :per-page="perPage"
          @page-change="pageChangeHandler"
          class="p-8 pt-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Recipe from './components/Recipe.vue';
import Search from './components/Search.vue';
import Pagination from './components/Pagination.vue';
import { FETCH_RECIPES } from './store/actions.type';

export default {
  name: 'App',
  components: {
    Recipe,
    Search,
    Pagination,
  },
  data: function() {
    return {
      currentPage: 1,
      perPage: 8,
    };
  },
  computed: {
    recipes() {
      return this.$store.state.recipes.recipes;
    },
    displayedRecipes() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage - 1;
      const recipes = [];

      for (let i = startIndex; i <= endIndex; i++) {
        if (this.recipes[i]) {
          recipes.push(this.recipes[i]);
        } else {
          break;
        }
      }
      return recipes;
    },
    recipesCount() {
      return Object.keys(this.recipes).length;
    },
  },
  methods: {
    fetchRecipes(items) {
      this.$store.dispatch(FETCH_RECIPES, items);
    },
    pageChangeHandler(page) {
      this.currentPage = page;
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

  @apply bg-orange-200 h-full;
}

.wrapper {
  @apply flex flex-col items-stretch text-center p-6;
}

.content {
  @apply mt-6 flex-1 shadow-xl bg-white rounded-lg;
}

@screen lg {
  .content {
    @apply inline-block mt-0 ml-10;
  }

  .wrapper {
    @apply flex-row items-start;
  }
}

@screen md {
  .wrapper {
    @apply p-24;
  }
}
</style>
