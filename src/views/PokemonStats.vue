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
        class="h-72" :src="currentPokemon.sprites.front_default" />
        <h1 v-if="currentPokemon.name" class="text-6xl font-thin text-white">
            {{ currentPokemon.name.charAt(0).toUpperCase() +
            currentPokemon.name.slice(1) }}
        </h1>
    </main>
</template>
