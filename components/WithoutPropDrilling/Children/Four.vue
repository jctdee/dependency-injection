<template>
  <UContainer class="border border-green-400 m-4 p-4 flex justify-between">
    <p>fourth child</p>
    <p>state: {{ props.msg }}</p>
    <UButton @click="$emit('onClickUpdate')">update message</UButton>
  </UContainer>
</template>

<script lang="ts" setup>
const props = defineProps<{
  msg: string
}>()

const emit = defineEmits<{
  onClickUpdate: []
}>()
</script>

<style></style>
