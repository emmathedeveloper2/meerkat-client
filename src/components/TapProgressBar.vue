<script lang="ts" setup>
import { useTapPowerStore } from '@/stores/tap-power';


const tapPower = useTapPowerStore()
</script>

<template>
  <div class="w-[200px] min-h-[30px] bg-brown border-2 border-brown-deep rounded-full overflow-hidden">
    <div :style="{ width: tapPower.totalTaps + '%' , transition: '.2s linear' }" class="bg-yellow h-full rounded-full"></div>
  </div>
</template>

<style>

</style>