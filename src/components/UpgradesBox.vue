<script setup lang="ts">
import useUpgradesStore from '@/stores/upgrades';
import UpgradeItem from './UpgradeItem.vue';
import { onMounted } from 'vue';

const upgradesStore = useUpgradesStore()

onMounted(() => {
  upgradesStore.getAllUpgrades()
})

</script>

<template>
  <div id="upgrade-box" class="rounded-[10px] rounded w-full max-w-[600px] mt-[60px] p-[1px]">
    <section class="bg-[#441A0C] p-[20px] rounded-[10px]">
      <h1 class="font-bold text-[20px] mb-[20px]">UPGRADES</h1>
      
      <UpgradeItem image-url="/assets/images/shovel-icon.png" name='shovel' title="Shovel" :price="100"/>
      <UpgradeItem image-url="/assets/images/miner-icon.png" name='miner' title="Miner" :price="100"/>
  
      <RouterLink to="/main/referral">
        <UpgradeItem image-url="/assets/images/link-upgrades.png" name="" title="Referral" :is-referral="true"/>
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
  #upgrade-box {
    background-image: linear-gradient(to right, #911A53 0%, #C76F0C 48%, #D0685B 100%);
  }
</style>