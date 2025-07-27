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
      
      <img src="/assets/meerkat-with-shadow.png" alt="mascot">
      <LargeButton :disabled="tapPower.tappingDisabled" @click="tapPower.increaseTotalTaps" label="TAP TO DIG"/>

      <UpgradesBox />
  </main>
</template>