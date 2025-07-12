<script lang="ts" setup>
import IconBack from '@/components/icons/IconBack.vue';
import IconReferral from '@/components/icons/IconReferral.vue';
import IconTelegramLogo from '@/components/icons/IconTelegramLogo.vue';
import LargeButton from '@/components/LargeButton.vue';

    
</script>

<template>
    <main class="w-full flex flex-1 flex-col items-center overflow-y-auto p-[30px]">
        <div class="flex items-center justify-between w-full justify-around">
            <RouterLink to="/main">
                <IconBack size="24px" class="cursor-pointer"/>
            </RouterLink>
            
            <div class="flex items-center gap-1">
                <IconReferral size="24px" />
                <h2 class="font-bold text-[20px]">REFERRAL</h2>
            </div>

            <IconBack size="24px" class="cursor-pointer opacity-0"/>
        </div>

        <div class="size-[200px] my-[30px] rounded-[10px] overflow-hidden border-2 border-primary p-4 bg-white">
            <img src="/assets/qr-code.png" alt="Referral Image" class="w-full h-full object-cover" />
        </div>

        <LargeButton label="COPY LINK"/>

        <div class="flex items-center gap-1 mt-[20px]">
            <IconTelegramLogo size="24px" />
            <span>Share via Telegram</span>
        </div>
    </main>
</template>