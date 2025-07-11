<script lang="ts" setup>
  import BottomBar from '@/components/BottomBar.vue';
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="flex flex-col h-screen wrapper md:border-x-2 md:border-primary">
    <Header />
    <RouterView />
    <BottomBar />
  </div>
</template>