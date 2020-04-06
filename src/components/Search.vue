<template>
  <div class="wrapper">
    <form role="search">
      <input
        type="search"
        class="search"
        id="search"
        placeholder="Search by ingredients"
        aria-label="Search by ingredients"
      />
      <input type="submit" class="submit" value="Add ingredient" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data: () => ({
    terms: [],
  }),
};
</script>

<style scoped>
.wrapper {
  @apply max-w-3xl;
  @apply mx-auto;
  @apply flex;
  @apply p-6;
  @apply bg-white;
  @apply rounded-lg;
  @apply shadow-xl;
}

.search {
  @apply rounded-lg;
  @apply border;
  @apply border-gray-300;
  @apply py-2;
  @apply px-3;
  @apply w-64;
}

.search:focus {
  @apply border-blue-500;
  outline: none;
}

.submit {
  @apply rounded;
  @apply bg-blue-700;
  @apply py-2;
  @apply px-3;
  @apply ml-4;
  @apply text-white;
}
</style>
