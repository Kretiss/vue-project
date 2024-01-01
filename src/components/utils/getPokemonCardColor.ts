import type { Pokemon } from 'pokenode-ts'
import type { Ref } from 'vue'

export const getPokemonCardColor = (pokemon: Ref<Pokemon> | Ref<undefined>) => {
  let color: { bg: string; text: string } = { bg: 'bg-white', text: 'text-black-900' }
  const typeFromPk =
    (pokemon && pokemon.value?.types.length && pokemon.value?.types[0].type.name) || ''

  if (['normal', 'ghost', 'unknown'].includes(typeFromPk)) {
    color = { bg: 'bg-white', text: 'text-black-800' }
  } else if (['fighting', 'rock', 'steel', 'dark', 'shadow'].includes(typeFromPk)) {
    color = { bg: 'bg-black-100', text: 'text-black-800' }
  } else if (['flying', 'water', 'ice'].includes(typeFromPk)) {
    color = { bg: 'bg-blue-100', text: 'text-blue-800' }
  } else if (['poison', 'grass'].includes(typeFromPk)) {
    color = { bg: 'bg-green-50', text: 'text-green-800' }
  } else if (['bug', 'ground'].includes(typeFromPk)) {
    color = { bg: 'bg-brown-100', text: 'text-brown-800' }
  } else if (['fire', 'dragon'].includes(typeFromPk)) {
    color = { bg: 'bg-red-50', text: 'text-red-700' }
  } else if (['psychic', 'fairy'].includes(typeFromPk)) {
    color = { bg: 'bg-pink-50', text: 'text-pink-800' }
  } else if (typeFromPk === 'electric') {
    color = { bg: 'bg-gold-50', text: 'text-gold-700' }
  }

  return color
}
