<script lang="ts" setup>
import { useTapPowerStore } from '@/stores/tap-power';


const tapPower = useTapPowerStore()
</script>

<template>
  <div id="progress-bar-container" class="w-[200px] min-h-[20px] bg-brown border-2 border-brown-deep rounded-full overflow-hidden">
    <div :style="{ width: tapPower.totalTaps + '%' , transition: '.2s linear' }" class="bg-yellow h-full rounded-full"></div>
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