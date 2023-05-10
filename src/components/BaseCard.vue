<script setup>
const props = defineProps({
    pokemon: {
        type: Object,
        default: () => ({
            id: -1,
            name: 'Unknown',
            imageUrl: 'https://via.placeholder.com/150',
        }),
    },
})
console.log(props)
function getPokemonId(pokemon) {
// Extract the Pokemon's ID from its URL
const urlParts = pokemon.url.split('/');
const pokemonId = urlParts[urlParts.length - 2];

return pokemonId;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<template>
    <RouterLink 
    :to="`/pokemon/${props.pokemon.name}`"
    class="rounded-lg bg-yellow-400 shadow-lg"
    >
        <img 
            class="w-full rounded-t-lg object-cover"
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(props.pokemon)}.png`"
        />
        <div class="p-4 text-center">
            <h2 class="text-2xl font-semibold text-red-700">
                {{ capitalize(props.pokemon.name) }}
            </h2>
        </div>
    </RouterLink>
</template>