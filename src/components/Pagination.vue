<template>
  <ul class="flex justify-center">
    <li :v-if="maxVisibleButtons > 2">
      <button
        type="button"
        class="pagination--button"
        @click="onPageChange(1)"
        :disabled="isInFirstPage"
      >First</button>
    </li>
    <li :v-if="maxVisibleButtons > 2">
      <button
        type="button"
        class="pagination--button"
        @click="onPageChange(currentPage - 1)"
        :disabled="isInFirstPage"
      >Prev</button>
    </li>
    <li v-for="page in pages" :key="page.name">
      <button
        type="button"
        class="pagination--button"
        @click="onPageChange(page.name)"
        :disabled="page.isDisabled"
        :class="{ 'pagination--button-active': page.isDisabled }"
      >{{page.name}}</button>
    </li>
    <li :v-if="maxVisibleButtons > 2">
      <button
        type="button"
        class="pagination--button"
        @click="onPageChange(currentPage + 1)"
        :disabled="isInLastPage"
      >Next</button>
    </li>
    <li :v-if="maxVisibleButtons > 2">
      <button
        type="button"
        class="pagination--button"
        @click="onPageChange(totalPages)"
        :disabled="isInLastPage"
      >Last</button>
    </li>
  </ul>
</template>

<script>
/* eslint-disable no-debugger */
/* eslint-disable no-console */

export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
    perPage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    maxVisibleButtons() {
      if (this.totalPages < 3) {
        return this.totalPages;
      }
      return 3;
    },
  },
  methods: {
    onPageChange(page) {
      this.$emit('page-change', page);
    },
  },
};
</script>

<style scoped>
.pagination--button {
  @apply inline-block m-2 py-1 px-3 rounded bg-orange-400 text-white;
}

.pagination--button:hover {
  @apply bg-orange-600;
}

.pagination--button-active {
  @apply bg-orange-600 text-white;
}
</style>
