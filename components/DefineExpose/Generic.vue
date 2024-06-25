<template>
  <p>Message: {{ message }}</p>
</template>

<script lang="ts" setup>
const message: Ref<string | null> = ref('hello im a generic!')

const updateMessage = (newMessage: string): void => {
  message.value = newMessage
}

defineExpose({
  message,
  updateMessage,
})
</script>

<style></style>
