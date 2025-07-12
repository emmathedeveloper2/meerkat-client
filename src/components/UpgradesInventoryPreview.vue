<script lang="ts" setup>
    import UpgradesInventoryPreviewItem from '@/components/UpgradeInventoryPreviewItem.vue'
import IconPlus from './icons/IconPlus.vue';
</script>

<template>
  <section class="flex flex-col w-full rounded-lg bg-background-darker border-2 border-primary p-2 my-[20px]">
    <h2 class="text-[18px] font-bold mb-[20px]">UPGRADES</h2>
    
    <div class="flex items-center justify-between w-full">
        <UpgradesInventoryPreviewItem
            imageUrl="/assets/shovel.png"
            altText="Upgrade shovel"
            :count="3"
        />
        <UpgradesInventoryPreviewItem
            imageUrl="/assets/meerkat-head.png"
            altText="Upgrade miner"
            :count="7"
        />
        <UpgradesInventoryPreviewItem
            imageUrl="/assets/meerkat-head.png"
            altText="Upgrade miner"
            :count="2"
        />

        <button class="rounded border-2 border-primary bg-background relative size-[50px] grid place-items-center text-primary rounded-md">
            <IconPlus />
        </button>
    </div>
  </section>
</template>


<style>

</style>