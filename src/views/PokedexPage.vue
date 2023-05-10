<script setup>
  import SearchBar from '@/components/SearchBar.vue';
  import BaseCard from '@/components/BaseCard.vue';
  import usePokemon from '@/composables/usePokemon'
</script>

<template>
  <div class="wrapper">
    <SearchBar />
    <button
      title="Load Pokemon"
      class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center
      rounded-full bg-red-600 text-4xl text-white drop-shadow-lg duration-300">
      🍙
    </button>
    <p class="instructions">Select a Pokémon to view stats</p>
    <div class="container mx-auto grid grid-cols-4 gap-4 py-8">
      <BaseCard
        v-for="pokemon in pokemons"
        :key="pokemon._id"
        :pokemon="pokemon"
      />
    </div>
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