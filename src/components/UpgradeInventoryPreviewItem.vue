<script lang="ts" setup>
    defineProps<{
        imageUrl: string;
        altText?: string;
        count: number;
    }>()
</script>

<template>
  <div class="rounded-md border-2 border-primary bg-background relative size-[50px]">
    <div class="size-full overflow-hidden rounded">
      <img :src="imageUrl" :alt="altText || 'upgrade item'" class="size-full object-cover"/>
    </div>

    <span class="absolute top-0 right-0 bg-primary text-primary-foreground text-xs rounded-full size-[20px] translate-x-1/2 -translate-y-1/2 grid place-items-center font-bold">
        {{ count }}
    </span>
  </div>
</template>

<style>

</style>