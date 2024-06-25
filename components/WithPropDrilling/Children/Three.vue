<template>
  <UContainer class="border border-yellow-400 mt-4">
    third child
    <WithPropDrillingChildrenFour @on-click-update="$emit('onClickUpdate')" />
  </UContainer>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  onClickUpdate: []
}>()
</script>

<style></style>
