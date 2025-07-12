<script lang="ts" setup>
  import IconPlug from '@/components/icons/IconPlug.vue';
</script>

<template>
  <main class="flex flex-col items-center justify-end h-dvh text-white p-[20px]">
    <section class="w-full flex-1 flex flex-col items-center">
      <h1 class="text-[40px] font-premium w-full text-left">MEERKAT</h1>
      <img src="/assets/premium-coin.png" class="h-[280px]"/>
    </section>
    <section class="w-full h-max">
      <div class="flex flex-col w-full flex flex-col items-end">
        <h1 class="text-[30px]"><span class="text-background">Miner's</span> Vault</h1>
        <small>Start Mining. Start Earning</small>
      </div>
    </section>
    <section class="flex-1 flex items-center justify-center">
        <router-link to="/main">
          <span class="flex items-center gap-2 gradient-text text-primary font-bold">CONNECT TO TELEGRAM <IconPlug size="15px"/></span>
        </router-link>
    </section>
  </main>
</template>

<style scoped>
  main {
    background-image: linear-gradient(to bottom , var(--black) 49% , var(--purple) 88%);
    color: white;
  }
</style>