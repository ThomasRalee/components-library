<script lang="ts" setup>
import { icons } from './../icons.json'
</script>

<template>
  <Story
    title="Components/App/Icon"
    :layout="{
      type: 'grid',
      width: 200
    }"
  >
    <Variant
      v-for="icon in icons"
      :key="`${icon}-story`"
      :title="`${icon} Icon`"
    >
      <AppIcon :name="icon" />
    </Variant>
  </Story>
</template>

<docs lang="md">
# AppIcon component

Icon size are pre-configured with the xs, sm and md size props.
</docs>
