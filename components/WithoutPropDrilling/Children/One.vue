<template>
  <UContainer class="h-fit border border-red-400">
    first child
    <WithoutPropDrillingChildrenTwo
      :msg="props.msg"
      @on-click-update="$emit('onClickUpdate')"
    />
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
