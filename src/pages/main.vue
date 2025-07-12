<script lang="ts" setup>
import BottomBar from '@/components/BottomBar.vue';
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="flex flex-col h-dvh wrapper md:border-x-2 md:border-primary">
    <Header />
    <RouterView v-slot="{ Component }">
      <Transition name="slide">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <BottomBar />
  </div>
</template>