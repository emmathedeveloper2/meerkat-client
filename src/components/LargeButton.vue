<script lang="ts" setup>
 defineProps<{
    label?: string;
 }>()
</script>

<template>
  <button class="w-max border-2 border-brown-deep py-[10px] px-[50px] rounded-[10px] font-bold text-[20px]">
    {{ label || 'Button' }}
  </button>
</template>

<style scoped>
  button {
    background-image: linear-gradient(to right, #911A53 0%, #C76F0C 48% , #D0685B 100%);
    box-shadow: 0 4px 8px 5px color-mix(in srgb, var(--brown-deep) 50%, transparent);
  }

  button:active {
    box-shadow: none;
  }
</style>