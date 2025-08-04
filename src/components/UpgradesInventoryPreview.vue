<script lang="ts" setup>
import UpgradesInventoryPreviewItem from '@/components/UpgradeInventoryPreviewItem.vue'
</script>

<template>
    <section class="flex flex-col w-full rounded-lg border border-[#911A53] p-2 my-[20px] bg-black/40 backdrop-blur">
        <h2 class="text-[18px] font-bold mb-[20px]">UPGRADES</h2>

        <div class="flex items-center justify-around w-full bg-[#3C312B] backdrop-blur py-2 rounded-md">
            <UpgradesInventoryPreviewItem imageUrl="/assets/images/shovel-icon.png" altText="Upgrade shovel"
                :count="3" />

            <UpgradesInventoryPreviewItem imageUrl="/assets/images/miner-icon.png" altText="Upgrade miner" :count="7" />

            <button class="size-[50px] grid place-items-center text-primary rounded-md">
                <img src="/assets/images/plus-icon.png" alt="add">
            </button>
        </div>
    </section>
</template>


<style></style>