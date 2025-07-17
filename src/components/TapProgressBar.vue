<script lang="ts" setup>
import { useTapPowerStore } from '@/stores/tap-power';


const tapPower = useTapPowerStore()
</script>

<template>
  <div id="progress-bar-container" class="w-[200px] min-h-[20px] rounded-full overflow-hidden">
    <div :style="{ width: tapPower.totalTaps + '%' , transition: '.2s linear' }" class="h-full rounded-full bg-lime-400"></div>
  </div>
</template>

<style>
  #progress-bar-container {
    background-image: linear-gradient(#FFFFFF , #FF9041);

    div {
      background-image: linear-gradient(#FFA600 , #964026);
    }
  }
</style>