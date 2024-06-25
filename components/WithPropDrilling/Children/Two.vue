<template>
  <UContainer class="border border-blue-400 mt-4">
    second child
    <WithPropDrillingChildrenThree @on-click-update="$emit('onClickUpdate')" />
  </UContainer>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  onClickUpdate: []
}>()
</script>

<style></style>
