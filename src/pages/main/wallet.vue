<script lang="ts" setup>
import IconWallet from '@/components/icons/IconWallet.vue';
import IconBack from '@/components/icons/IconBack.vue';
import CoinsEarnedDisplayBox from '@/components/CoinsEarnedDisplayBox.vue';
import UpgradesInventoryPreview from '@/components/UpgradesInventoryPreview.vue';
import Leaderboard from '@/components/Leaderboard.vue';


</script>

<template>
    <main class="flex-1 w-full flex-col items-center overflow-y-auto p-[30px]">
        <div class="flex items-center justify-between w-full justify-around">
            <RouterLink to="/main">
                <IconBack size="24px" class="cursor-pointer" />
            </RouterLink>

            <div class="flex items-center gap-1">
                <IconWallet size="24px" />
                <h2 class="font-bold text-[20px]">WALLET</h2>
            </div>

            <IconBack size="24px" class="cursor-pointer opacity-0" />
        </div>

        <CoinsEarnedDisplayBox class="mt-[20px]" :coins="329"/>

        <UpgradesInventoryPreview />

        <Leaderboard />
    </main>
</template>

<style></style>