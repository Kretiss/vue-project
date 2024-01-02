<script setup lang="ts">
defineEmits<{ (e: 'click'): void }>()
defineProps<{ buttonDisabled?: boolean }>()

import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import CustomButton from '@/components/reusableComponents/CustomButton.vue'
</script>

<template>
  <div class="my-16 flex flex-col items-center gap-4">
    <ExclamationTriangleIcon class="h-[40px]" />
    <span>An error occurred, please try again later</span>
    <CustomButton :disabled="buttonDisabled" text="Try again" @click="$emit('click')" />
  </div>
</template>
