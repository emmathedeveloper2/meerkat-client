<script lang="ts" setup>
import IconWallet from '@/components/icons/IconWallet.vue';
import IconBack from '@/components/icons/IconBack.vue';
import CoinsEarnedDisplayBox from '@/components/CoinsEarnedDisplayBox.vue';
import UpgradesInventoryPreview from '@/components/UpgradesInventoryPreview.vue';
import Leaderboard from '@/components/Leaderboard.vue';
import { useWallet } from '@/stores/wallet';
import { onMounted } from 'vue';

const wallet = useWallet()

onMounted(async () => {
    await wallet.fetchWalletBalance()
})
</script>

<template>
    <main class="w-full flex-1 relative z-0 overflow-hidden">

        <div class="absolute -z-10 left-1/2 -translate-x-1/2 top-[80%] -translate-y-[70%] size-[500px]">
            <img src="/assets/images/premium-coin.png" alt="coin" class="object-cover size-full">
        </div>

        <section
            class="size-full flex flex-col items-center overflow-y-auto pt-[70px] p-[30px] relative z-0 bg-black/20">

            <RouterLink to="/main" class="size-[25px] absolute left-4 top-[85px]">
                <img src="/assets/images/back-icon.png" alt="back" class="size-full object-contain" />
            </RouterLink>

            <CoinsEarnedDisplayBox class="mt-[20px]" :coins="wallet.balance" />

            <UpgradesInventoryPreview />

            <Leaderboard />
        </section>

    </main>
</template>

<style scoped>
section {
    backdrop-filter: blur(5px);
}
</style>