<script lang="ts" setup>
 defineProps<{
    label?: string;
 }>()
</script>

<template>
  <button class="w-max border-2 border-brown-deep bg-primary py-[10px] px-[50px] rounded-[10px] font-bold text-[20px]">
    {{ label || 'Button' }}
  </button>
</template>

<style scoped>
  button {
    box-shadow: 0 4px 8px 5px color-mix(in srgb, var(--brown-deep) 50%, transparent);
  }

  button:active {
    box-shadow: none;
  }
</style>