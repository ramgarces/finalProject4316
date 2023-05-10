import { ref } from 'vue'

const pokemons = ref([])

const usePokemons = () => {
    const fetchPokemons = () => {
        for (let index = 0; index < 2; index++) {
            pokemons.value.push({
                _id: pokemons.value.length,
                name: `Pokemon ${pokemons.value.length}`,
                imageUrl: 'https://via.placeholder.com/400x800',
            })
        }
    }
    return { pokemons, fetchPokemons }
}

export default usePokemons