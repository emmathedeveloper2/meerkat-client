<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth';
import Avatar from './avatar.vue';
import { onMounted } from 'vue';
import { useWallet } from '@/stores/wallet';

const auth = useAuthStore()

const wallet = useWallet()

onMounted(async () => {
  await wallet.fetchWalletBalance()
})
</script>

<template>
  <header class="pb-[1px] rounded-b-[20px] fixed top-0 w-full z-10">
    <section class="flex items-center justify-between p-[10px] rounded-b-[20px] w-full">
        <div class="flex items-center gap-[5px]">
          <Avatar v-if="auth.user" :user="auth.user" class="size-[30px]" />
        </div>
    
        <div class="flex items-center gap-[4px]">
          <img src="/assets/images/coin-icon.png" alt="coin" class="size-[24px]">
          <span class="font-bold">{{ wallet.balance }}</span>
        </div>
    </section>
  </header>
</template>

<style scoped>
header {
  background-image: linear-gradient(to right, #911A53 0%, #C76F0C 48%, #D0685B 100%);
}
header > section {
  background-color: #964026;
}
</style>