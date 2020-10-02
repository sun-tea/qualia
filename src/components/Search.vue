<template>
  <div class="search__wrapper">
    <div class="flex items-center">
      <input
        type="search"
        class="search__input"
        id="search"
        placeholder="Add an ingredient and hit enter"
        aria-label="Search by ingredients"
        autocomplete="off"
        v-model="currentTerm"
        @keyup.enter="addSearchTerm"
      />
      <button class="search__button-ingredient" type="button" @click="addSearchTerm">
        Add
      </button>
    </div>
    <div class="search__tags" :class="{ 'search__tags--empty': searchTerms.length == 0 }">
      <Tag
        v-for="(item, index) in searchTerms"
        :key="index"
        :label="item"
        :hasCloseIcon="true"
        @delete-tag="deleteTagHandler"
      />
      <div style="flex-basis:  100%" />
      <Tag
        v-if="searchTerms.length > 1"
        :label="'Remove all'"
        :type="'removeAll'"
        @delete-tag="deleteAllTagsHandler"
      />
    </div>
    <button class="search__submit" @click="$emit('search-recipes', searchTerms.toString())">
      Search recipes
    </button>
  </div>
</template>

<script>
import Tag from './Tag.vue';

export default {
  name: 'Search',
  components: {
    Tag,
  },
  data: () => ({
    searchTerms: [],
    currentTerm: '',
  }),
  methods: {
    addSearchTerm: function() {
      if (!!this.currentTerm && !this.searchTerms.includes(this.currentTerm)) {
        this.searchTerms.push(this.currentTerm);
      }
      this.currentTerm = '';
    },
    deleteTagHandler: function(i) {
      this.searchTerms.splice(i, 1);
    },
    deleteAllTagsHandler: function() {
      this.searchTerms = [];
    },
  },
};
</script>

<style scoped>
.search__wrapper {
  @apply flex flex-col p-8 bg-white rounded-lg;
}

.search__input {
  @apply w-full p-4 rounded-l-lg border border-gray-300 border-r-0;
}

.search__input:focus {
  @apply border-teal-500 outline-none;
}

.search__input::placeholder {
  @apply text-gray-500;
}

.search__button-ingredient {
  @apply bg-teal-500 text-white font-bold p-4 border border-teal-500 rounded-r-lg;
}

.search__button-ingredient:hover {
  @apply bg-teal-600 border-teal-600;
}

.search__submit {
  @apply bg-teal-500 text-white font-bold p-4 rounded;
}

.search__submit:hover {
  @apply bg-teal-600;
}

.search__tags {
  @apply pt-5 flex flex-wrap;
}

.search__tags--empty {
  @apply py-4;
}

@screen lg {
  .search__wrapper {
    @apply shadow-xl;
    width: 40rem;
  }
}
</style>
