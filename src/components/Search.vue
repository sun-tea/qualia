<template>
  <div class="wrapper-search">
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
    <div class="tags">
      <div class="tag" v-for="item in searchTerms" :key="item">
        <span class="text">{{ item }}</span>
        <svg
          class="close"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          v-on:click="deleteSearchTerm(item)"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </div>
    </div>
    <button
      class="submit"
      v-on:click="$emit('search-recipes', searchTerms.toString())"
    >Search recipes</button>
  </div>
</template>

<script>
export default {
  name: 'Search',
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
    deleteSearchTerm: function(i) {
      this.searchTerms.splice(i, 1);
    },
  },
};
</script>

<style scoped>
.wrapper-search {
  @apply max-w-3xl mx-auto flex flex-col p-6 bg-white rounded-lg shadow-xl;
}

.search {
  @apply rounded-lg border border-gray-300 py-2 px-3 w-64;
}

.search:focus {
  @apply border-blue-500;
  outline: none;
}

.submit {
  @apply bg-teal-500 text-white font-bold py-2 px-4 rounded;
}

.submit:hover {
  @apply bg-teal-600;
}

.tags {
  @apply py-4 flex;
}

.tag {
  @apply p-2 bg-teal-300 items-center text-teal-900 leading-none inline-flex rounded-full;
}

.tag:not(:first-child) {
  @apply ml-2;
}

.text {
  @apply ml-2 mr-2 text-left flex-auto;
}

.close {
  @apply fill-current opacity-75 h-4 w-4;
}
</style>
