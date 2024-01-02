<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/outline'

defineProps<{
  message: string
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <InformationCircleIcon class="h-[40px]" />
    <span>{{ message }}</span>
  </div>
</template>
