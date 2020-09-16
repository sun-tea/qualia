<template>
  <div class="search__wrapper">
    <input
      type="search"
      class="search"
      id="search"
      placeholder="Search by ingredients"
      aria-label="Search by ingredients"
      autocomplete="off"
      v-model="currentTerm"
      @keyup.enter="addSearchTerm"
    />
    <div class="tags" :class="{ 'tags--empty': searchTerms.length == 0 }">
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
    <button class="submit" @click="$emit('search-recipes', searchTerms.toString())">
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
  @apply flex flex-col p-8 bg-white rounded-lg shadow-xl;
}

.search {
  @apply rounded-lg border border-gray-300 p-4;
}

.search:focus {
  @apply border-blue-500 outline-none;
}

.search::placeholder {
  @apply text-gray-500;
}

.submit {
  @apply bg-teal-500 text-white font-bold p-4 rounded;
}

.submit:hover {
  @apply bg-teal-600;
}

.tags {
  @apply pt-5 flex flex-wrap;
}

.tags--empty {
  @apply py-4;
}

@screen lg {
  .search__wrapper {
    width: 40rem;
  }
}
</style>
