<script setup>
  import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
  <div class="wrapper">
    <SearchBar />
    <main class="flex min-h-screen items-center justify-center">
      <h1 class="text-6xl font-thin text-slate-800">Pokemon Stats</h1>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
  }
</style>