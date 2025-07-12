<script lang="ts" setup>
    defineProps<{
        coins?: number;
    }>();
</script>

<template>
  <div class="flex flex-col items-center justify-center rounded-lg p-[20px] border-2 border-primary gap-[10px]">
    <h3 class="font-bold">COINS EARNED</h3>
    
    <img src="/assets/coin.png" alt="coin" class="size-[70px]" />

    <h1 class="text-[40px] font-bold">{{ coins }}</h1>
  </div>
</template>


<style>

</style>