import { ref } from 'vue'
import useApi from '@/composables/useApi'

const PAGE_SIZE = 20 // number of pokemon to fetch per page

const usePokemons = () => {
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
    
    return { pokemons, fetchPokemons, loadMore }

}

export default usePokemons