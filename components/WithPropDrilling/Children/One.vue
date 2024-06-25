<template>
  <UContainer class="h-fit border border-red-400">
    first child
    <WithPropDrillingChildrenTwo @on-click-update="$emit('onClickUpdate')" />
  </UContainer>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  onClickUpdate: []
}>()
</script>

<style></style>
