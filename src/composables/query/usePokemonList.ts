import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'
import { api } from '@/services/PokemonService'

const usePokemonList = (page: Ref<number>, count: Ref<number>) =>
  useQuery({
    queryKey: ['pokemon', 'list', page, count],
    queryFn: () => api.listPokemons(page.value * count.value, count.value)
  })

export default usePokemonList
