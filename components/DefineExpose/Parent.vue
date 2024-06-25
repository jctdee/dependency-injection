<template>
  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex flex-col gap-4">
          <h1>I am the parent!</h1>
          <h3>I am the state from child: {{ childGeneric?.message }}</h3>
          <UContainer class="m-0 border border-red-400 p-2">
            <Generic ref="childGeneric" />
          </UContainer>
          <UButton
            class="w-1/4"
            @click="childGeneric!.updateMessage('hello i got updated!')"
            >Click me</UButton
          >
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script lang="ts" setup>
import Generic from '@/components/DefineExpose/Generic.vue'

const childGeneric: Ref<null | InstanceType<typeof Generic>> = ref(null)
</script>

<style></style>
