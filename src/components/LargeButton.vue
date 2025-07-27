<script lang="ts" setup>
defineProps<{
  label?: string;
  disabled?: boolean
}>()

const emit = defineEmits(['click'])
</script>

<template>
  <button :disabled="disabled" @click="() => emit('click')" class="w-max font-bold text-[20px] rounded-full p-[2px] disabled:opacity-50">
    <div class="size-full py-[10px] px-[50px] rounded-full text-black">
      {{ label || 'Button' }}
    </div>
  </button>
</template>

<style scoped>
button {
  background-image: linear-gradient(to right, #B7256B, #F79E3A);
  box-shadow: 0 7px 50px 18px #AD060070;
}

button:active {
  box-shadow: -13px -1px 50px 0px #C4084D70;
}

button div {
  background-image: linear-gradient(to right, #F90004 , #E9A94E);
}
</style>