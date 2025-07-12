<script setup lang="ts">
import IconReferral from './icons/IconReferral.vue';
import IconHome from './icons/IconHome.vue';
import IconWallet from './icons/IconWallet.vue';

</script>

<template>
  <nav class="flex items-center justify-between p-[10px] text-primary">  
      <RouterLink to="/main">
        <IconHome size="24px"/>
      </RouterLink>

      <RouterLink to="/main/referral">
        <IconReferral size="24px"/>
      </RouterLink>
      
      <RouterLink to="/main/wallet">
        <IconWallet size="24px"/>
      </RouterLink>
  </nav>
</template>

<style scoped>
  nav {
    box-shadow: 0 -7px 20px 0px color-mix(in srgb, #E30404 50%, transparent);
    border-top: 2px solid transparent;
    border-image: linear-gradient(to right, #911A53 0%, #C76F0C 48% , #D0685B 100%);
    border-image-slice: 1;
  }
</style>