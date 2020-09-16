<template>
  <div :class="{ tag: true, 'tag--red': type === 'removeAll' }" @click="onTagClick">
    <span class="text">{{ label }}</span>
    <IconBase
      class="tag__delete"
      name="delete-tag"
      role="button"
      v-if="hasCloseIcon"
      :height="'15px'"
      :width="'15px'"
      @svg-click-handler="onDeleteTag"
    >
      <IconCross />
    </IconBase>
  </div>
</template>

<script>
import IconBase from './IconBase.vue';
import IconCross from './IconCross.vue';

export default {
  name: 'Tag',
  components: {
    IconBase,
    IconCross,
  },
  props: {
    hasCloseIcon: {
      type: Boolean,
      required: false,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
  },
  methods: {
    onDeleteTag: function() {
      this.$emit('delete-tag', this.$vnode.key);
    },
    onTagClick: function() {
      if (this.type === 'removeAll') {
        this.$emit('delete-tag', this.$vnode.key);
      }
    },
  },
};
</script>

<style scoped>
.tag {
  @apply p-3 mr-4 mb-4 bg-teal-300 items-center text-teal-900 leading-none inline-flex rounded-full;
}

.tag--red {
  @apply bg-red-400 text-red-900 cursor-pointer;
}

.text {
  @apply ml-2 mr-2 text-left flex-auto;
}

.tag__delete {
  @apply opacity-75 mr-2;
}
</style>
