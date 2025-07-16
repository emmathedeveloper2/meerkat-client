<script lang="ts" setup>
defineProps<{
  label?: string;
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <button @click="() => emit('click')" class="w-max font-bold text-[20px] rounded-[10px] p-[2px]">
    <div class="size-full py-[10px] px-[50px] rounded-[10px]">
      {{ label || 'Button' }}
    </div>
  </button>
</template>

<style scoped>
button {
  box-shadow: 0 4px 8px 5px color-mix(in srgb, var(--brown-deep) 50%, transparent);
  background-image: linear-gradient(to right, #B7256B, #F79E3A);
}

button div {
  background-image: linear-gradient(to right, #911A53 0%, #C76F0C 48%, #D0685B 100%);
}

button:active {
  box-shadow: none;
}
</style>