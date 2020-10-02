<template>
  <div class="app">
    <div class="wrapper">
      <Search @search-recipes="fetchRecipes" />
      <component
        :is="currentComponent"
        v-bind="currentProperties"
        @update-displayed-component="updateDisplayedComponent"
      />
    </div>
  </div>
</template>

<script>
import Search from './components/Search.vue';
import RecipeDetail from './components/RecipeDetail.vue';
import RecipesList from './components/RecipesList.vue';
import { GET_RECIPES_BY_INGREDIENTS } from './store/actions.type';

export default {
  name: 'RecipeSearch',
  components: {
    RecipeDetail,
    RecipesList,
    Search,
  },
  data: function() {
    return {
      currentComponent: 'RecipesList',
      displayedRecipeId: null,
    };
  },
  computed: {
    currentProperties: function() {
      if (this.currentComponent === 'RecipeDetail') {
        return { recipe: this.$store.state.recipes.results[this.displayedRecipeId] };
      } else {
        return { recipes: Object.values(this.$store.state.recipes.results) };
      }
    },
  },
  methods: {
    fetchRecipes(items) {
      this.$store.dispatch(GET_RECIPES_BY_INGREDIENTS, items);
      this.currentComponent = 'RecipesList';
    },
    updateDisplayedComponent(componentName, recipeId = null) {
      this.currentComponent = componentName;
      this.displayedRecipeId = recipeId;
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
  @apply mt-6 flex-1 bg-white rounded-lg;
}

@screen sm {
  .wrapper {
    @apply p-16;
  }

  .content {
    @apply mt-16;
  }
}

@screen md {
  .wrapper {
    @apply p-20;
  }

  .content {
    @apply mt-20;
  }
}

@screen lg {
  .content {
    @apply inline-block mt-0 ml-10 shadow-xl;
  }

  .wrapper {
    @apply flex-row items-start;
  }
}
</style>
