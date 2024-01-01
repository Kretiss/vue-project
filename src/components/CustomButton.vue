<script setup lang="ts">
const { text, disabled } = defineProps<{ text: string; disabled: boolean }>()
defineEmits<{ (e: 'click'): void }>()
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    class="rounded-md bg-blue-900 px-5 py-3 text-black-50 hover:bg-blue-950 disabled:bg-black-300"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>
