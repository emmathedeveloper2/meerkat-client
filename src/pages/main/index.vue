<script setup lang="ts">
import LargeButton from '@/components/LargeButton.vue';
import TapProgressBar from '@/components/TapProgressBar.vue';
import UpgradesBox from '@/components/UpgradesBox.vue';
import { useTapPowerStore } from '@/stores/tap-power';

const tapPower = useTapPowerStore()

</script>

<template>
  <main class="flex flex-col items-center flex-1 p-[30px] overflow-y-auto pt-[70px]">
      <TapProgressBar />
      
      <div  class="size-[170px] my-16 relative">
        <img :class="{'opacity-100' : tapPower.animating}" class="absolute top-0 opacity-0" src="/assets/animations/digging.gif" alt="mascot">
        <img :class="{'opacity-100' : !tapPower.animating}" class="opacity-0" src="/assets/animations/static-digging.png" alt="mascot">
      </div>

      <LargeButton :disabled="tapPower.tappingDisabled" @click="tapPower.increaseTotalTaps" label="TAP TO DIG"/>

      <UpgradesBox />
  </main>
</template>