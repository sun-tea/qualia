<template>
  <div class="tag">
    <span class="text">{{ item }}</span>
    <svg
      class="close"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      v-on:click="onDeleteItem(item)"
    >
      <title>Close</title>
      <path
        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    item: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDeleteItem: function () {
      this.$emit('delete-item', this.$vnode.key);
    },
  },
};
</script>

<style scoped>
.tag {
  @apply p-2 mr-2 mb-2 bg-teal-300 items-center text-teal-900 leading-none inline-flex rounded-full;
}

.text {
  @apply ml-2 mr-2 text-left flex-auto;
}

.close {
  @apply fill-current opacity-75 h-4 w-4;
}
</style>
