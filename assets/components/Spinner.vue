<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  sm: Boolean,
  lg: Boolean,
  xl: Boolean,
  primary: Boolean
})

const sizeClasses = computed<string>(() => {
  if (props.sm) {
    return 'w-4 h-4 border-4'
  }

  if (props.lg) {
    return 'w-8 h-8 border-[6px]'
  }

  if (props.xl) {
    return 'w-12 h-12 border-8'
  }

  return 'w-6 h-6 border-4'
})
</script>

<template>
  <div class="spinner" :class="[sizeClasses, { primary }]" />
</template>

<style scoped>
.spinner {
  @apply block bg-transparent rounded-full top-0 left-0 border-transparent border-t-white border-r-white;

  animation: spin 0.8s ease-out infinite;
}

.spinner:not(.m-0) {
  @apply mx-auto;
}

.primary {
  @apply border-t-blue-600 border-r-blue-600;
}
</style>
