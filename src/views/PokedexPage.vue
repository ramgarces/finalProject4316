<script setup>
  import BaseCard from '@/components/BaseCard.vue'
  import usePokemon from '@/composables/usePokemon'
  import { onMounted } from 'vue';

const { pokemons, fetchPokemons, loadMore } = usePokemon()

onMounted(async () => {
  await loadMore()
})
</script>

<template>
  <div class="wrapper">
    <button
      title="Load Pokemon"
      class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center
      rounded-full  text-4xl text-white drop-shadow-lg duration-300"
      @click="loadMore">
      <img src="../assets/Poké_Ball_icon.svg.png" alt="" srcset="" />
    </button>
    <p class="instructions">Select a Pokémon to view stats</p>
    <p class="instructions">Click the Pokéball (bottom-right) to load Pokémon</p>
    <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
      <BaseCard
        v-for="pokemon in pokemons"
        :key="pokemon.id"
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