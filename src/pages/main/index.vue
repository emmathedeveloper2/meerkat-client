<script setup lang="ts">
import LargeButton from '@/components/LargeButton.vue';
import TapPowerBar from '@/components/TapPowerBar.vue';
import TapProgressBar from '@/components/TapProgressBar.vue';
import UpgradesBox from '@/components/UpgradesBox.vue';
import { useTapPowerStore } from '@/stores/tap-power';

const tapPower = useTapPowerStore()

</script>

<template>
  <main class="flex flex-col items-center flex-1 p-[30px] overflow-y-auto">
      <div class="w-max flex flex-col items-center gap-2">
        <TapProgressBar />
        <div class="w-full flex items-center justify-center gap-2">
          <TapPowerBar />
          <h2>Tap Power</h2>
        </div>
      </div>
      
      <img src="/assets/meerkat-with-shadow.png" alt="mascot">
      <LargeButton @click="tapPower.increase" label="TAP TO DIG"/>

      <UpgradesBox />
  </main>
</template>