<script setup>
  import SearchBar from '@/components/SearchBar.vue';
  import MainCards from '@/components/MainCards.vue';
</script>

<template>
  <div class="wrapper">
    <SearchBar />
    <p class="instructions">Select a Pokémon to view stats</p>
    <MainCards />
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
    .instructions {
      @apply text-center pb-6 font-semibold text-2xl text-yellow-400
      tracking-widest;
    }
  }
</style>