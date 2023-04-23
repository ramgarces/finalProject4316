<script setup>
  import SearchBar from '@/components/SearchBar.vue';
  import MainCards from '@/components/MainCards.vue';
  import SixStack from '@/components/SixStack.vue';
</script>

<template>
  <div class="wrapper">
    <p class="instructions-six-stack">
      Click a Pokémon to remove it from your team
    </p>
    <div class="six-stack-background">
      <SixStack class="six-stack"/>
      <button type="button">Save Team</button>
    </div>
    <SearchBar />
    <p class="instructions">Select a Pokémon to add them to your team</p>
    <MainCards />
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
    p {
      @apply text-center pb-6 font-semibold text-2xl text-yellow-400
      tracking-widest;
    }
    button {
      @apply text-center p-6 font-semibold text-2xl text-yellow-400
      tracking-widest bg-red-600 w-60 self-center mt-6 rounded-md;
    }
    .six-stack-background {
      @apply flex flex-col sticky top-0 z-50 bg-blue-700 w-full p-10
      rounded-md;
    }
  }
</style>