<script lang="ts" setup>
  import { Toaster } from 'vue3-hot-toast'
</script>

<template>
  <div class="h-dvh w-dvw">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component"/>
      </transition>
    </router-view>
    <Toaster position="bottom-center"/>
  </div>
</template>