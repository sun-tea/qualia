<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 20 20"
    :aria-labelledby="name"
    :role="role"
    @click="onSvgClick"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    color: {
      type: String,
      default: 'currentColor',
    },
    height: {
      type: [Number, String],
      default: 20,
    },
    name: {
      type: String,
      default: 'name',
    },
    role: {
      type: String,
      default: 'presentation',
    },
    width: {
      type: [Number, String],
      default: 20,
    },
  },
  methods: {
    onSvgClick: function () {
      this.$emit('svg-click-handler', this.$vnode.key);
    },
  },
};
</script>
