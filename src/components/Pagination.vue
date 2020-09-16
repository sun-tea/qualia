<template>
  <ul class="flex justify-center">
    <li :v-if="maxVisibleButtons > 2">
      <IconBase
        name="first"
        role="button"
        class="pagination__arrow"
        :height="'100%'"
        :color="'fill-orange-400'"
        @svg-click-handler="isInFirstPage ? null : onPageChange(1)"
      >
        <IconFirst />
      </IconBase>
    </li>
    <li :v-if="maxVisibleButtons > 2">
      <IconBase
        name="previous"
        role="button"
        class="pagination__arrow"
        :height="'100%'"
        :color="'fill-orange-400'"
        @svg-click-handler="isInFirstPage ? null : onPageChange(currentPage - 1)"
      >
        <IconPrevious />
      </IconBase>
    </li>
    <li v-for="page in pages" :key="page.name">
      <button
        type="button"
        @click="onPageChange(page.name)"
        :disabled="page.isDisabled"
        :class="{ pagination__button: true, 'pagination__button--active': page.isDisabled }"
      >
        {{ page.name }}
      </button>
    </li>
    <li :v-if="maxVisibleButtons > 2">
      <IconBase
        name="next"
        role="button"
        class="pagination__arrow"
        :height="'100%'"
        :color="'fill-orange-400'"
        @svg-click-handler="isInLastPage ? null : onPageChange(currentPage + 1)"
      >
        <IconNext />
      </IconBase>
    </li>
    <li :v-if="maxVisibleButtons > 2">
      <IconBase
        name="last"
        role="button"
        class="pagination__arrow"
        :height="'100%'"
        :color="'fill-orange-400'"
        @svg-click-handler="isInLastPage ? null : onPageChange(totalPages)"
      >
        <IconLast />
      </IconBase>
    </li>
  </ul>
</template>

<script>
import IconBase from './IconBase.vue';
import IconFirst from './IconFirst.vue';
import IconLast from './IconLast.vue';
import IconNext from './IconNext.vue';
import IconPrevious from './IconPrevious.vue';

export default {
  name: 'Pagination',
  components: {
    IconBase,
    IconFirst,
    IconLast,
    IconNext,
    IconPrevious,
  },
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
.pagination__button {
  @apply inline-block m-2 h-12 w-12 rounded bg-orange-400 text-white;
}

.pagination__button:hover {
  @apply bg-orange-500;
}

.pagination__button--active {
  @apply bg-orange-600 text-white;
}

.pagination__arrow {
  @apply h-full mx-4;
}
</style>
