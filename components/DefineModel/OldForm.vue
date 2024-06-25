<template>
  <input
    type="text"
    :value="name"
    @input="onInputChange(name)"
    class="border border-gray-400 p-2 rounded-lg"
  />

  <!-- or the traditional @input="$emit('update:name', $event.target.value)" -->
</template>

<script lang="ts" setup>
defineProps({
  name: {
    required: true,
    type: String,
  },
})

const onInputChange = (name: string): void => {
  emit('onNameInput', name)
}

const emit = defineEmits<{
  onNameInput: [name: string]
}>()
</script>

<style></style>
