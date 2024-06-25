<template>
  <UContainer class="border border-yellow-400 mt-4">
    third child
    <WithoutPropDrillingChildrenFour
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
