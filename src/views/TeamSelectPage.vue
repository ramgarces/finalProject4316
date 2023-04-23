<script setup>
  import SearchBar from '@/components/SearchBar.vue';
  import MainCards from '@/components/MainCards.vue';
</script>

<template>
  <div class="wrapper">
    <SearchBar />
    <p class="instructions">Select a Pokémon to add them to your team</p>
    <MainCards />
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
  }
</style>