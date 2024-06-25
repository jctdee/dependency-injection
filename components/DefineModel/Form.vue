<template>
  <input
    type="text"
    v-model="name"
    class="border border-gray-400 p-2 rounded-lg"
  />
</template>

<script lang="ts" setup>
const name = defineModel({
  required: true,
  type: String,
})
</script>

<style></style>
