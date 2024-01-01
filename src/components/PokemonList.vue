<script setup lang="ts">
import { ref } from 'vue'
import usePokemonList from '@/composables/query/usePokemonList'
import CustomLoader from '@/components/CustomLoader.vue'
import ShowError from '@/components/ShowError.vue'
import ShowInfoMessage from '@/components/ShowInfoMessage.vue'
import PokemonDetail from '@/components/PokemonDetail.vue'
import CustomButton from '@/components/CustomButton.vue'

const containerRef = ref<HTMLDivElement | null>(null)

const page = ref(0)
const count = ref(35)

const { data: pokemons, isLoading, isError } = usePokemonList(page, count)

const updatePage = (by: number) => {
  page.value += by
  containerRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div ref="containerRef" class="py-5">
    <CustomLoader v-if="isLoading" />
    <ShowError v-if="isError && !isLoading" />
    <ShowInfoMessage
      message="No pokemons found"
      v-if="!isError && !isLoading && !pokemons?.results.length"
    />
    <div
      v-if="!isError && !isLoading && pokemons?.results.length"
      class="flex w-full flex-wrap justify-center gap-6"
    >
      <PokemonDetail
        v-for="pokemon in pokemons.results"
        :pokemon-name="pokemon.name"
        :key="pokemon.name"
      />
    </div>
    <div
      v-if="!isError && !isLoading && pokemons?.results.length"
      class="mb-5 mt-10 flex items-center justify-center gap-4"
    >
      <CustomButton :disabled="page === 0" text="Prev page" @click="updatePage(-1)" />
      <CustomButton
        :disabled="pokemons.count < (page + 1) * count"
        text="Next page"
        @click="updatePage(1)"
      />
    </div>
  </div>
</template>
