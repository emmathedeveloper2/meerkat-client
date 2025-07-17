<script lang="ts" setup>

    const leaderboardItems = [
        {
            avatar: '/assets/images/miner-icon.png',
            name: 'FARM BOY',
            coinsEarned: 1500,
        },
        {
            avatar: '/assets/images/miner-icon.png',
            name: 'MINER JOE',
            coinsEarned: 1200,
        },
        {
            avatar: '/assets/images/miner-icon.png',
            name: 'GOLD DIGGER',
            coinsEarned: 1100,
        },
        {
            avatar: '/assets/images/miner-icon.png',
            name: 'TREASURE HUNTER',
            coinsEarned: 1000,
        },
        {
            avatar: '/assets/images/miner-icon.png',
            name: 'DIGGING DUDE',
            coinsEarned: 900,
        },
    ]
</script>

<template>
  <section class="flex flex-col w-full rounded-lg border border-[#911A53] p-2">
    <h2 class="text-[18px] font-bold mb-[20px]">LEADERBOARD</h2>
    
    <div v-for="user in leaderboardItems" class="flex items-center justify-between w-full bg-[#3C312B] backdrop-blur p-1 rounded-lg mb-1">
        <div class="flex items-center gap-2">
            <div class="size-[40px]">
                <img :src="user.avatar" alt="User Avatar" class="size-full object-cover" />
            </div>
            <small class="font-bold">{{ user.name }}</small>
        </div>
        
        <div class="flex items-center gap-2">
            <small class="font-bold">{{ user.coinsEarned }}</small>
            <img src="/assets/images/coin-icon.png" alt="Coin Icon" class="size-[20px]" />
        </div>
    </div>
    
  </section>
</template>

<style>

</style>