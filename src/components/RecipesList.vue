<template>
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
      <RecipePreview
        v-for="recipe of displayedRecipes"
        :recipe="recipe"
        :key="recipe.id"
        @recipe-click-handler="displayRecipe"
      />
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
</template>

<script>
import RecipePreview from './RecipePreview.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'RecipesList',
  components: {
    RecipePreview,
    Pagination,
  },
  props: {
    recipes: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {
      currentPage: 1,
      perPage: 8,
    };
  },
  computed: {
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
    pageChangeHandler(page) {
      this.currentPage = page;
    },
    displayRecipe(id) {
      this.$emit('update-displayed-component', 'RecipeDetail', id);
    },
  },
};
</script>

<style scoped></style>
