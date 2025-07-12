<script lang="ts" setup>

    const leaderboardItems = [
        {
            avatar: '/assets/meerkat-head.png',
            name: 'FARM BOY',
            coinsEarned: 1500,
        },
        {
            avatar: '/assets/meerkat-head.png',
            name: 'MINER JOE',
            coinsEarned: 1200,
        },
        {
            avatar: '/assets/meerkat-head.png',
            name: 'GOLD DIGGER',
            coinsEarned: 1100,
        },
        {
            avatar: '/assets/meerkat-head.png',
            name: 'TREASURE HUNTER',
            coinsEarned: 1000,
        },
        {
            avatar: '/assets/meerkat-head.png',
            name: 'DIGGING DUDE',
            coinsEarned: 900,
        },
    ]
</script>

<template>
  <section class="flex flex-col w-full rounded-lg bg-background-darker border-2 border-primary p-2">
    <h2 class="text-[18px] font-bold mb-[20px]">LEADERBOARD</h2>
    
    <div v-for="user in leaderboardItems" class="flex items-center justify-between w-full bg-background p-1 rounded-lg mb-2">
        <div class="flex items-center gap-2">
            <img :src="user.avatar" alt="User Avatar" class="size-[25px] rounded-full" />
            <small class="font-bold">{{ user.name }}</small>
        </div>
        
        <div class="flex items-center gap-2">
            <small class="font-bold">{{ user.coinsEarned }}</small>
            <img src="/assets/coin.png" alt="Coin Icon" class="size-[20px]" />
        </div>
    </div>
    
  </section>
</template>

<style>

</style>