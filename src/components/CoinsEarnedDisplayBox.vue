<script lang="ts" setup>
    defineProps<{
        coins?: number;
    }>();
</script>

<template>
<div class="flex flex-col items-center justify-center rounded-lg p-[20px] border border-[#911A53] w-3/4 bg-[#D7464650] backdrop-blur gap-[10px]">
    <h3 class="font-bold">COINS EARNED</h3>
    
    <div class="size-[70px]">
        <img src="/assets/images/coin-icon.png" alt="coin" class="object-cover size-full"/>
    </div>

    <h1 class="text-[50px] font-bold">{{ coins }}</h1>
  </div>
</template>


<style>

</style>