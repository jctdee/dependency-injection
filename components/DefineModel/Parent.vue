<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex flex-col gap-4">
          <h1>defineModel example</h1>
          <h3>Name is: {{ name }}</h3>
          <UContainer class="m-0 p-4 border border-red-400">
            <DefineModelForm v-model="name" />
            <!-- <DefineModelOldForm :name="name" /> -->
          </UContainer>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
const name: Ref<string> = ref('John Doe')
</script>

<style></style>
