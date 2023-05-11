<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue';
import usePokemon  from '@/composables/usePokemon'

const route = useRoute()
const { fetchPokemon, currentPokemon } = usePokemon()

onMounted(async() => {
    await fetchPokemon(route.params.name)
})

</script>

<template>
    <main v-if="currentPokemon" class="flex min-h-screen items-center 
    justify-center flex-col">
        <img v-if="currentPokemon.sprites" 
        class="h-96" :src="currentPokemon.sprites.front_default" />
        <h1 v-if="currentPokemon.name" class="text-6xl font-thin text-white pb-10">
            {{ currentPokemon.name.charAt(0).toUpperCase() +
            currentPokemon.name.slice(1) }}
        </h1>
        <div class="stats-container flex gap-2 max-w-6xl">

            <div class="stats-left flex flex-col gap-10  flex-1">
                <h2>
                    National Pokedex Number: 
                    <span class="font-bold pl-5 text-yellow-400">
                        #{{ currentPokemon.id }}
                    </span>
                </h2>
                <h2>
                    Types:
                    <span class="font-bold pl-5 text-yellow-400">
                    <span v-for="(type, index) in currentPokemon.types" :key="index">
                        {{ type.type.name }}
                        <span v-if="index !== currentPokemon.types.length - 1">, </span>
                    </span>
                    </span>
                </h2>
                <h2>
                    Abilities:
                    <span class="font-bold pl-5 text-yellow-400">
                    <span v-for="(ability, index) in currentPokemon.abilities" :key="index">
                        {{ ability.ability.name }}
                        <span v-if="index !== currentPokemon.abilities.length - 1">, </span>
                    </span>
                    </span>
                </h2>
            </div>
            <div class="stats-right flex-2">
                <h2 v-if="currentPokemon.moves">
                    Moves: 
                    <span class="font-bold pl-5 text-yellow-400 max-w-md">
                    {{ currentPokemon.moves.map(move => move.move.name).join(', ') }}
                    </span>
                </h2>
            </div>
        </div>
    </main>
</template>

<style scoped lang="postcss">
    .stats-left, .stats-right {
        @apply border-red-600 text-4xl font-thin text-yellow-400 p-4 bg-blue-600
        border
    }
</style>
