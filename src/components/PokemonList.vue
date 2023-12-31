<script setup lang="ts">
import { ref } from 'vue'
import usePokemonList from '@/composables/query/usePokemonList'
import CustomLoader from '@/components/reusableComponents/CustomLoader.vue'
import ShowError from '@/components/reusableComponents/ShowError.vue'
import ShowInfoMessage from '@/components/reusableComponents/ShowInfoMessage.vue'
import PokemonDetail from '@/components/PokemonDetail.vue'
import CustomButton from '@/components/reusableComponents/CustomButton.vue'

const containerRef = ref<HTMLDivElement | null>(null)

const page = ref(0)
const count = ref(35)

const { data: pokemons, isFetching, isError, refetch } = usePokemonList(page, count)

const updatePage = (by: number) => {
  page.value += by
  containerRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div ref="containerRef" class="py-5">
    <CustomLoader v-if="isFetching" />
    <ShowError v-else-if="isError" :button-disabled="isFetching" @click="refetch()" />
    <ShowInfoMessage v-else-if="!pokemons?.results.length" message="No pokemons found" />
    <div v-else-if="pokemons?.results.length" class="flex w-full flex-wrap justify-center gap-6">
      <PokemonDetail
        v-for="pokemon in pokemons.results"
        :pokemon-name="pokemon.name"
        :key="pokemon.name"
      />
    </div>
    <div
      v-if="!isError && !isFetching && pokemons?.results.length"
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
