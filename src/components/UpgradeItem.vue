<script lang="ts" setup>
    defineProps<{
        imageUrl: string;
        title: string;
        isReferral?: boolean;
        price?: string
    }>()
</script>

<template>
  <div class="w-full p-2 rounded flex items-center justify-between mt-[5px] bg-[#4D4B4B50] border-white cont">
    <div class="flex items-center">
        <div class="size-[35px] overflow-hidden">
            <img :src="imageUrl" alt="image" class="object-cover size-full">
        </div>
        <h3>{{ title }}</h3>
    </div>

    <div v-if="price && !isReferral" class="flex items-center gap-1">
        <img src="/assets/images/coin-icon.png" alt="coin" class="size-[20px]"/>
        <small class="font-semibold">100</small>
    </div>
    
    <div v-if="isReferral" class="flex items-center gap-2">
        <div class="flex items-ccnter gap-1">
            <small>+10</small>
            <img src="/assets/images/coin-icon.png" alt="coin" class="size-[20px]"/>
        </div>

        <button class="rounded-[10px] px-2">
            invite
        </button>
    </div>
  </div>
</template>

<style scoped>
    .cont {
        border-width: 0.5px;
    }
    button {
        background-image: linear-gradient(to right, #F90004 , #E9A94E);
        box-shadow: 0 7px 50px 15px #AD0600;
    }
</style>