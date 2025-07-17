<script lang="ts" setup>
  import IconPlug from '@/components/icons/IconPlug.vue';
import MeerkatAPIBridge from '@/lib/meerkat-api-bridge';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';

  const auth = useAuthStore()

  const handleClick = async () => {
    if(auth.user) await MeerkatAPIBridge.createAccount(auth.user.id.toString() , () => {
      router.push('/main')
    })
  }

</script>

<template>
  <main class="flex flex-col items-center justify-end h-dvh text-white p-[20px]">
    <section class="w-full flex-1 flex flex-col items-center">
      <h1 class="text-[40px] font-premium w-full text-left">MEERKAT</h1>
      <img src="/assets/images/premium-coin.png" />
    </section>
    <section class="w-full h-max">
      <div class="flex flex-col w-full flex flex-col items-end">
        <h1 class="text-[30px]"><span class="text-background">Miner's</span> Vault</h1>
        <small>Start Mining. Start Earning</small>
      </div>
    </section>
    <section class="flex-1 flex items-center justify-center">
        <button @click="handleClick" class="cursor-pointer">
          <span class="flex items-center gap-2 gradient-text text-primary font-bold text-[20px]">CONNECT TO TELEGRAM <IconPlug size="15px"/></span>
        </button>
    </section>
  </main>
</template>

<style scoped>
  main {
    background-image: linear-gradient(to bottom , var(--black) 49% , var(--purple) 88%);
    color: white;
  }
</style>