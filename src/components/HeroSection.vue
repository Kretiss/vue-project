<script setup lang="ts">
import Pikachu from '@/assets/images/pikachu.png'
</script>

<template>
  <div class="mb-5 mt-10 text-center">
    <h1 class="mb-4 text-center text-4xl text-blue-500 xs:text-5xl sm:text-6xl md:text-7xl">
      <span class="text-blue-800">Pokemon</span> app
    </h1>
    <div
      class="flex justify-center gap-3 font-semibold text-lg text-blue-800 xs:text-xl sm:text-xl md:text-2xl"
    >
      Just browse
      <img :src="Pikachu" alt="Pikachu" class="w-[20px] xs:w-[25px] sm:w-[30px] md:w-[35px]" />
    </div>
  </div>
</template>
