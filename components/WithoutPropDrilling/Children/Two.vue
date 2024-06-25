<template>
  <UContainer class="border border-blue-400 mt-4">
    second child
    <WithoutPropDrillingChildrenThree
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
