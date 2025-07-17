<script lang="ts" setup>
    defineProps<{
        imageUrl: string;
        altText?: string;
        count?: number;
    }>()
</script>

<template>
  <div class="relative size-[50px]">
    <div class="size-full overflow-hidden rounded">
      <img :src="imageUrl" :alt="altText || 'upgrade item'" class="size-full object-cover"/>
    </div>

    <span class="absolute top-0 right-0 bg-red-500 text-primary-foreground text-xs rounded-full size-[15px] translate-x-1/2 grid place-items-center font-bold">
    </span>
  </div>
</template>

<style>

</style>