<script setup lang="ts">
import UpgradeItem from './UpgradeItem.vue';

</script>

<template>
  <section class="border-2 border-primary bg-background-darker rounded-[10px] p-[20px] w-full max-w-[600px] mt-[60px]">
    <h1 class="font-bold text-[20px] mb-[20px]">UPGRADES</h1>

    <UpgradeItem image-url="/assets/shovel.png" title="SHOVEL" button-text="100"/>
    <UpgradeItem image-url="/assets/meerkat-head.png" title="MINER" button-text="100"/>

    <RouterLink to="/main/referral">
      <UpgradeItem image-url="/assets/shovel.png" title="REFERRAL" button-text="invite" :is-referral="true"/>
    </RouterLink>
  </section>
</template>