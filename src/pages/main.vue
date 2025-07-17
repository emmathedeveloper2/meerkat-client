<script lang="ts" setup>
import BottomBar from '@/components/BottomBar.vue';
import Header from '@/components/Header.vue'
import LoadingUI from '@/components/LoadingUI.vue';
import { onMounted, ref } from 'vue';

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  } , 2000)
})
</script>

<template>
  <div class="flex flex-col h-dvh wrapper md:border-x-2 md:border-primary">
    <LoadingUI v-if="loading"/>
    <Header />
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <BottomBar />
  </div>
</template>