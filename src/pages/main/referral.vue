<script lang="ts" setup>
import IconBack from '@/components/icons/IconBack.vue';
import IconReferral from '@/components/icons/IconReferral.vue';
import IconTelegramLogo from '@/components/icons/IconTelegramLogo.vue';
import LargeButton from '@/components/LargeButton.vue';
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
import toast from 'vue3-hot-toast'

const auth = useAuthStore()

const referralLink = `https://t.me/meerkattt_bot/meerkat?startapp=ref_${auth.user?.id}`

const handleCopy = async () => {

    toast.promise(navigator.clipboard.writeText(referralLink) , {
        loading: () => "Copying Link",
        success: () => "Link copied",
        error: () => "Couldn't copy link"
    })
}

onMounted(() => {
    //@ts-ignore
    new QRCode(document.getElementById('qrcode'), {
        text: referralLink,
        width: 170,
        height: 170,
        colorDark: '#000',
        colorLight: '#fff',
        //@ts-ignore
        correctLevel: QRCode.CorrectLevel.H
    });
})
</script>

<template>
    <main class="w-full flex-1 relative z-0 overflow-hidden">
        
        <div class="absolute -z-10 left-1/2 -translate-x-1/2 top-[60%] -translate-y-[70%] size-[500px]">
            <img src="/assets/images/premium-coin.png" alt="coin" class="object-cover size-full">
        </div>

        <section class="size-full flex flex-col items-center overflow-y-auto pt-[70px] p-[30px] relative z-0 bg-black/20">

            <RouterLink to="/main" class="size-[25px] absolute left-4">
                <img src="/assets/images/back-icon.png" alt="back" class="size-full object-contain"/>
            </RouterLink>
    
    
            <div class="size-[250px] rounded bg-[#D7464650] mb-[30px] p-[20px] grid place-items-center rounded-[15px] backdrop-blur">
                <div class="grid place-items-center bg-white p-2">
                    <div id="qrcode"></div>
                </div>
            </div>
    
            <LargeButton @click="handleCopy" label="COPY LINK" />
    
            <div class="flex items-center gap-1 mt-[20px]">
                <img src="/assets/images/telegram-icon.png" alt="telegram" class="size-[20px]">
                <small>Share via Telegram</small>
            </div>
        </section>

    </main>
</template>

<style scoped>
section {
    backdrop-filter: blur(5px);
}
</style>