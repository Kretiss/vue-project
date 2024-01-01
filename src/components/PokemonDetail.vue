<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue'
import { ExclamationTriangleIcon, PhotoIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import usePokemonDetail from '@/composables/query/usePokemonDetail'
import CustomLoader from '@/components/CustomLoader.vue'
import { getPokemonCardColor } from '@/components/utils/getPokemonCardColor'

const { pokemonName } = defineProps<{ pokemonName: string }>()

const cardOpen = ref(false)

const { data: pokemon, isLoading, isError } = usePokemonDetail(pokemonName)

const pokemonImage = computed(
  () => pokemon.value?.sprites.front_default || pokemon.value?.sprites.front_shiny || undefined
)

const specs = computed(() => ({
  abilities: pokemon.value?.abilities
    .filter((a) => !a.is_hidden)
    .map((a) => a.ability.name)
    .join(', '),
  forms: pokemon.value?.forms.map((f) => f.name).join(', '),
  items: pokemon.value?.held_items.map((i) => i.item.name).join(', '),
  stats: pokemon.value?.stats.map((s) => ({
    name: s.stat.name,
    value: s.base_stat
  })),
  type: pokemon.value?.types.map((t) => t.type.name).join(', '),
  color: getPokemonCardColor(pokemon)
}))

const setCardOpen = (value: boolean) => {
  cardOpen.value = value
}
</script>

<template>
  <div>
    <button
      type="button"
      @click="setCardOpen(true)"
      class="flex size-[100px] items-center justify-center rounded-md bg-black-50 shadow hover:shadow-blue-950/30"
    >
      <CustomLoader v-if="isLoading" />
      <ExclamationTriangleIcon class="w-[40px]" v-if="isError" />
      <img
        v-if="pokemon && pokemonImage"
        class="max-w-full"
        :src="pokemonImage"
        :alt="pokemon.name"
      />
      <PhotoIcon class="w-[40px]" v-if="pokemon && !pokemonImage" />
    </button>
    <TransitionRoot appear :show="cardOpen" as="template" v-if="pokemon">
      <Dialog @close="setCardOpen(false)" as="div" class="relative z-20">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black-950/30 bg-opacity-20" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0 scale-95"
          enter-to="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100 scale-100"
          leave-to="opacity-0 scale-95"
        >
          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <DialogPanel
                class="flex h-[400px] w-full max-w-[300px] flex-col rounded-xl p-4 sm:h-[520px] sm:max-w-[350px] md:p-8"
                :class="specs.color.bg"
              >
                <div class="flex justify-end">
                  <button type="button" @click="setCardOpen(false)" class="hover:text-red-600">
                    <XMarkIcon class="w-[24px]" />
                  </button>
                </div>
                <div class="flex h-[100px] justify-center">
                  <img
                    v-if="pokemon && pokemonImage"
                    class="max-w-full"
                    :src="pokemonImage"
                    :alt="pokemon.name"
                  />
                  <PhotoIcon class="w-[40px]" v-if="pokemon && !pokemonImage" />
                </div>
                <DialogTitle class="mb-4 uppercase" :class="specs.color.text"
                  >{{ pokemon.name }}
                </DialogTitle>
                <DialogDescription class="flex flex-col overflow-y-auto text-left">
                  <div class="border-t border-black-100 py-1">
                    <span class="font-semibold" :class="specs.color.text">HEIGHT: </span
                    >{{ pokemon.height }} dm
                  </div>
                  <div class="border-t border-black-100 py-1">
                    <span class="font-semibold" :class="specs.color.text">ABILITIES:</span>
                    {{ specs.abilities }}
                  </div>
                  <div class="border-t border-black-100 py-1">
                    <span class="font-semibold" :class="specs.color.text">FORMS:</span>
                    {{ specs.forms }}
                  </div>
                  <div class="border-t border-black-100 py-1">
                    <span class="font-semibold" :class="specs.color.text">ITEMS:</span>
                    {{ specs.items }}
                  </div>
                  <div class="border-t border-black-100 py-1">
                    <span class="font-semibold" :class="specs.color.text">TYPES:</span>
                    {{ specs.type }}
                  </div>
                  <div>
                    <span
                      class="block border-t border-black-100 py-1 font-semibold"
                      :class="specs.color.text"
                      >STATS:</span
                    >
                  </div>
                  <div>
                    <template v-for="stat in specs.stats" :key="stat.name">
                      <div class="mb-1">
                        <span class="ml-2 font-medium capitalize">{{ stat.name }}:</span>
                        {{ stat.value }}
                      </div>
                    </template>
                  </div>
                </DialogDescription>
              </DialogPanel>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
