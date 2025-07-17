<script setup lang="ts">
import IconReferral from './icons/IconReferral.vue';
import IconHome from './icons/IconHome.vue';
import IconWallet from './icons/IconWallet.vue';

</script>

<template>
  <nav class="flex items-center justify-between p-[10px] text-primary">  
      <RouterLink to="/main">
        <img src="/assets/images/home-icon.png" alt="home-icon" class="size-[24px]"/>
      </RouterLink>
      
      <RouterLink to="/main/referral">
        <img src="/assets/images/link-icon.png" alt="link-icon" class="size-[24px]"/>
      </RouterLink>
      
      <RouterLink to="/main/wallet">
        <img src="/assets/images/wallet-icon.png" alt="home-icon" class="size-[24px]"/>
      </RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    background-color: #0C0605;
    border-top: 2px solid transparent;
    border-image: linear-gradient(to right, #911A53 0%, #C76F0C 48% , #D0685B 100%);
    border-image-slice: 1;
  }

  img {
    filter: drop-shadow(5px -1px 5px #C4084D);
  }
</style>