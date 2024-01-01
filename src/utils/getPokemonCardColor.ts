import type { Pokemon } from 'pokenode-ts'
import type { Ref } from 'vue'

interface ColorConfig {
  bg: string
  text: string
}

export const getPokemonCardColor = (pokemon: Ref<Pokemon> | Ref<undefined>) => {
  const typeFromPk = pokemon?.value?.types[0]?.type.name || ''

  const colors: Record<string, ColorConfig> = {
    normal: { bg: 'bg-white', text: 'text-black-800' },
    ghost: { bg: 'bg-white', text: 'text-black-800' },
    unknown: { bg: 'bg-white', text: 'text-black-800' },
    fighting: { bg: 'bg-black-100', text: 'text-black-800' },
    rock: { bg: 'bg-black-100', text: 'text-black-800' },
    steel: { bg: 'bg-black-100', text: 'text-black-800' },
    dark: { bg: 'bg-black-100', text: 'text-black-800' },
    shadow: { bg: 'bg-black-100', text: 'text-black-800' },
    flying: { bg: 'bg-blue-100', text: 'text-blue-800' },
    water: { bg: 'bg-blue-100', text: 'text-blue-800' },
    ice: { bg: 'bg-blue-100', text: 'text-blue-800' },
    poison: { bg: 'bg-green-50', text: 'text-green-800' },
    grass: { bg: 'bg-green-50', text: 'text-green-800' },
    bug: { bg: 'bg-brown-100', text: 'text-brown-800' },
    ground: { bg: 'bg-brown-100', text: 'text-brown-800' },
    fire: { bg: 'bg-red-50', text: 'text-red-700' },
    dragon: { bg: 'bg-red-50', text: 'text-red-700' },
    psychic: { bg: 'bg-pink-50', text: 'text-pink-800' },
    fairy: { bg: 'bg-pink-50', text: 'text-pink-800' },
    electric: { bg: 'bg-gold-50', text: 'text-gold-700' },
    default: { bg: 'bg-white', text: 'text-black-900' }
  }

  return colors[typeFromPk] || colors.default
}
