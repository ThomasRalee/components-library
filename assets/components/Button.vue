<script lang="ts" setup>
import { computed } from 'vue'
import AppSpinner from './Spinner.vue'

const props = defineProps({
  md: Boolean,
  lg: Boolean,
  xl: Boolean,
  disabled: Boolean,
  isLoading: Boolean
})

const sizeClasses = computed<string>(() => {
  if (props.md) {
    return 'py-3 text-base h-10 max-h-10'
  }

  if (props.lg) {
    return 'py-4 text-base h-12 max-h-12'
  }

  if (props.xl) {
    return 'py-4 text-xl h-[52px] max-h-[52px]'
  }

  return 'py-2 text-sm h-8 max-h-8'
})
</script>

<template>
  <button
    type="button"
    class="px-4 rounded-lg flex items-center font-semibold outline-none"
    :class="[
      sizeClasses,
      {
        'bg-opacity-50 text-opacity-50 cursor-not-allowed': disabled,
        'hover:bg-opacity-90 hover:text-opacity-90': !disabled
      }
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <span v-if="isLoading" class="block w-full">
      <AppSpinner :sm="!props.md && !props.lg && !props.xl" :lg="props.xl" />
    </span>
    <slot v-else />
  </button>
</template>
