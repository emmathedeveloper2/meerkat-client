<script lang="ts" setup>
import { useTapPowerStore } from '@/stores/tap-power';


    const tapPower = useTapPowerStore()

    const bars = [
        {
            color: "#F9BA0D",
        },
        {
            color: "#DDF90D",
        },
        {
            color: "#CBE500",
        },
        {
            color: "#26E500",
        },
    ]
</script>

<template>
  <div class="w-[20px] flex flex-col gap-[1px]">
    <div v-for="bar , i in bars" :style="{'background-color': bar.color , transition: '.1s linear'}" :class="tapPower.currentTapPower >= i + 1 ? 'opacity-100' : 'opacity-0'" class="w-full h-[5px]"></div>
  </div>
</template>
