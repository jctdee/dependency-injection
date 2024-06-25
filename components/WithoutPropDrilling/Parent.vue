<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex flex-col gap-4">
          <h1>Without Prop Drilling</h1>
          <p>State here: {{ msg }}</p>
        </div>
      </template>
      <UContainer>
        <WithoutPropDrillingChildrenOne
          :msg="msg"
          @on-click-update="msg = 'goodbye!'"
        />
      </UContainer>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
const msg: Ref<string> = ref('hello!')
</script>

<style></style>
