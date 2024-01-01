import { useQuery } from '@tanstack/vue-query'
import { api } from '@/services/PokemonService'

const usePokemonDetail = (name: string) =>
  useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => api.getPokemonByName(name)
  })

export default usePokemonDetail
