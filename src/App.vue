<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import HeroSection from '@/components/HeroSection.vue'
import PokemonList from '@/components/PokemonList.vue'
</script>

<template>
  <main>
    <HeroSection />
    <div class="container">
      <PokemonList />
    </div>
  </main>
  <VueQueryDevtools />
</template>
