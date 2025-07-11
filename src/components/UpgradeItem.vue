<script lang="ts" setup>
    defineProps<{
        imageUrl: string;
        title: string;
        isReferral?: boolean;
        buttonText?: string;
    }>()
</script>

<template>
  <div class="w-full p-2 rounded bg-background flex items-center justify-between mt-[5px]">
    <div class="flex items-center gap-1">
        <div class="size-[30px] overflow-hidden">
            <img :src="imageUrl" alt="image" class="size-full object-cover">
        </div>
        <h3 class="font-bold">{{ title }}</h3>
    </div>

    <button :class="{'w-[65px]': isReferral}" class="flex items-center justify-center gap-1 bg-primary rounded-lg border-2 border-brown-deep font-bold px-1">
        <img v-if="!isReferral" src="/assets/coin.png" alt="referral icon" class="size-[20px]" />
        {{ buttonText || 'Text' }}
    </button>
  </div>
</template>