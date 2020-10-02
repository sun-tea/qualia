<template>
  <article class="content">
    <header class="recipe-detail__header">
      <IconBase
        name="back"
        role="button"
        class="icon-back"
        :height="'4rem'"
        :width="'4rem'"
        :color="'fill-teal-500'"
        @svg-click-handler="onGoBackClick"
      >
        <IconPrevious />
      </IconBase>
      <div class="recipe-detail__title">
        <h1 class="text-5xl text-gray-900 leading-tight">{{ recipe.title }}</h1>
        <h2 class="recipe-detail__source-link">
          by
          <a v-bind:href="recipe.sourceUrl">{{ recipe.sourceName }}</a>
        </h2>
      </div>
      <ul class="recipe-detail__serving-time">
        <li class="recipe-detail__serving-time">{{ recipe.servings }} servings</li>
        <li class="recipe-detail__serving-time">{{ recipe.readyInMinutes }} mns</li>
      </ul>
    </header>
    <section class="recipe-detail__intro">
      <img class="recipe-detail__picture" :src="image" alt="recipe pic" />
      <div class="recipe-detail__ingredients">
        <h3 class="recipe-detail__h3">Ingredients</h3>
        <ul>
          <li
            class="recipe-detail__ingredient"
            v-for="ingredient in recipe.extendedIngredients"
            :key="ingredient.id"
          >
            {{ ingredient.original }}
          </li>
        </ul>
      </div>
    </section>
    <section class="recipe-detail__instructions">
      <h3 class="recipe-detail__h3">Instructions</h3>
      <ul>
        <li
          class="recipe-detail__instruction"
          v-for="instruction in recipe.analyzedInstructions[0].steps"
          :key="instruction.number"
        >
          <h4>{{ instruction.number }}</h4>
          <div v-if="instruction.length">
            {{ instruction.length.number }} {{ instruction.length.unit }}
          </div>
          {{ instruction.step }}
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
import IconBase from './IconBase.vue';
import IconPrevious from './IconPrevious.vue';

export default {
  name: 'RecipeDetail',
  components: {
    IconBase,
    IconPrevious,
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      return this.recipe.image.replace(/-(.*)\./gm, '-556x370.');
    },
  },
  methods: {
    onGoBackClick: function() {
      this.$emit('update-displayed-component', 'RecipesList');
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-family: Georgia, serif;
}

.icon-back {
  @apply h-full ml-10 mr-20;
}

.recipe-detail__header {
  @apply flex;
  height: 12rem;
}

.recipe-detail__title {
  @apply flex flex-col text-left my-auto;
}

.recipe-detail__intro {
  @apply flex mr-10 items-start;
}

.recipe-detail__picture {
  @apply flex-shrink-0 mr-10 object-contain;
  width: 45rem;
}

.recipe-detail__h3 {
  @apply text-3xl pb-6;
}

.recipe-detail__ingredients {
  @apply flex flex-col text-left;
}

.recipe-detail__ingredient {
  @apply text-2xl;
  font-family: Georgia, serif;
}

.recipe-detail__serving-time {
  @apply whitespace-no-wrap mx-10 my-auto text-left;
}

.recipe-detail__instructions {
  @apply p-8 text-left;
}

.recipe-detail__instruction {
  @apply;
}
</style>
