<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex flex-col gap-4">
          <h1>With Prop Drilling</h1>
          <p>State here: {{ message }}</p>
        </div>
      </template>
      <UContainer>
        <WithPropDrillingChildrenOne />
      </UContainer>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { messageKey } from '@/dependencies/providerKeys'

const message = ref('hello!')

const updateMessage = (newMessage: string): void => {
  message.value = newMessage
}

provide(messageKey, {
  message,
  updateMessage,
})
</script>

<style></style>
