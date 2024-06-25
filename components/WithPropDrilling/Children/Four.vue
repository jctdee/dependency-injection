<template>
  <UContainer class="border border-green-400 m-4 p-4 flex justify-between">
    <p>fourth child</p>
    <p>state: {{ message }}</p>
    <UButton @click="updateMessage('goodbye!')">update message</UButton>
  </UContainer>
</template>

<script lang="ts" setup>
import { inject } from 'vue'

import { messageKey } from '@/dependencies/providerKeys'

const { message, updateMessage } = inject(messageKey) as {
  message: Readonly<Ref<String>> // read only to avoid mutation here
  updateMessage: Function
}
</script>

<style></style>
