import { ref } from 'vue'
import useApi from '@/composables/useApi'

const PAGE_SIZE = 50 // number of pokemon to fetch per page

const usePokemons = () => {
    const currentPokemon = ref({})
    const pokemons = ref([])

    const api = useApi()
    const currentPage = ref(0)

    const fetchPokemons = async () => {
        const offset = (currentPage.value - 1) * PAGE_SIZE
        const { data } = await api.instance.get('/pokemon/', {
            params: {
                limit: PAGE_SIZE,
                offset: offset
            }
            
        })
        pokemons.value.push(...data.results)
        
    }
    const loadMore = async () => {
        currentPage.value++
        await fetchPokemons()
    }

    const fetchPokemon = async (name) => {
        const { data } = await api.instance.get(`/pokemon/${name}`)
        currentPokemon.value = data
    }
    
    return { pokemons, fetchPokemons, loadMore, fetchPokemon, currentPokemon }

}

export default usePokemons