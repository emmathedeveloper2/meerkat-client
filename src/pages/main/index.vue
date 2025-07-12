<script setup lang="ts">
import LargeButton from '@/components/LargeButton.vue';
import TapProgressBar from '@/components/TapProgressBar.vue';
import UpgradesBox from '@/components/UpgradesBox.vue';
</script>

<template>
  <main class="flex flex-col items-center flex-1 p-[30px] overflow-y-auto">
      <TapProgressBar />
      <img src="/assets/meerkat-with-shadow.png" alt="mascot">
      <LargeButton label="TAP TO DIG"/>

      <UpgradesBox />
  </main>
</template>