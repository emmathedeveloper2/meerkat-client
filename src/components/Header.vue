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
  <header class="flex items-center justify-between p-[10px] border-b-2 border-b-primary">

    <div class="flex items-center gap-[5px]">
      <Avatar v-if="auth.user" :user="auth.user" class="size-[30px]"/>

      <small v-if="auth.user" class="text-foreground font-bold">Welcome {{ auth.user.first_name }}</small>
    </div>

    <div class="flex items-center gap-[4px]">
      <img src="/assets/coin.png" alt="coin" class="size-[24px]">
      <span class="font-bold">{{ wallet.balance }}</span>
    </div>
  </header>
</template>

<style></style>