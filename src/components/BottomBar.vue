<script setup lang="ts">
import IconReferral from './icons/IconReferral.vue';
import IconHome from './icons/IconHome.vue';
import IconWallet from './icons/IconWallet.vue';

</script>

<template>
  <nav class="flex items-center justify-between p-[10px] border-t-2 border-primary text-primary">  
      <router-link to="/main">
        <IconHome size="24px"/>
      </router-link>
      <IconReferral size="24px"/>
      <IconWallet size="24px"/>
  </nav>
</template>

<style scoped>
  nav {
    box-shadow: 0 -7px 20px 0px color-mix(in srgb, var(--brown-deep) 50%, transparent);
  }
</style>