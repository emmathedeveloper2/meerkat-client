<script lang="ts" setup>
  import ConnectIcon from '~icons/lucide/unplug'
</script>

<template>
  <main class="flex flex-col items-center justify-center h-screen gap-[36px]">
    <img src="/favicon.png" alt="logo" class="w-[100px] h-[100px]" />

    <span class="text-primary font-bold flex items-center gap-[8px]">
      CONNECT TO TELEGRAM APP
      <connect-icon />
    </span>
  </main>
</template>