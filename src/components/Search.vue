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
      v-on:keyup.enter="addSearchTerm"
    />
    <div class="tags" :class="{ 'tags--empty': searchTerms.length == 0 }">
      <Tag
        v-for="(item, index) in searchTerms"
        :key="index"
        :item="item"
        @delete-item="deleteItemHandler"
      />
    </div>
    <button
      class="submit"
      v-on:click="$emit('search-recipes', searchTerms.toString())"
    >Search recipes</button>
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
    addSearchTerm: function () {
      if (!!this.currentTerm && !this.searchTerms.includes(this.currentTerm)) {
        this.searchTerms.push(this.currentTerm);
      }
      this.currentTerm = '';
    },
    deleteItemHandler: function (i) {
      this.searchTerms.splice(i, 1);
    },
  },
};
</script>

<style scoped>
.search__wrapper {
  @apply flex flex-col p-6 bg-white rounded-lg shadow-xl;
}

.search {
  @apply rounded-lg border border-gray-300 py-2 px-3;
}

.search:focus {
  @apply border-blue-500 outline-none;
}

.search::placeholder {
  @apply text-gray-500;
}

.submit {
  @apply bg-teal-500 text-white font-bold py-2 px-4 rounded;
}

.submit:hover {
  @apply bg-teal-600;
}

.tags {
  @apply pt-4 pb-2 flex flex-wrap;
}

.tags--empty {
  @apply py-3;
}

.tag {
  @apply p-2 mr-2 mb-2 bg-teal-300 items-center text-teal-900 leading-none inline-flex rounded-full;
}

.text {
  @apply ml-2 mr-2 text-left flex-auto;
}

.close {
  @apply fill-current opacity-75 h-4 w-4;
}

@screen lg {
  .search__wrapper {
    width: 20rem;
  }
}
</style>
