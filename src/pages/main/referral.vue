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
    const qrcode = new QRCode(document.getElementById('qrcode'), {
        text: referralLink,
        width: 180,
        height: 180,
        colorDark: '#000',
        colorLight: '#fff',
        //@ts-ignore
        correctLevel: QRCode.CorrectLevel.H
    });
})
</script>

<template>
    <main class="w-full flex flex-1 flex-col items-center overflow-y-auto p-[30px]">
        <div class="flex items-center justify-between w-full justify-around">
            <RouterLink to="/main">
                <IconBack size="24px" class="cursor-pointer" />
            </RouterLink>

            <div class="flex items-center gap-1">
                <IconReferral size="24px" />
                <h2 class="font-bold text-[20px]">REFERRAL</h2>
            </div>

            <IconBack size="24px" class="cursor-pointer opacity-0" />
        </div>

        <div id="qrcode" class="size-[200px] my-[30px] rounded-[10px] overflow-hidden border-2 border-primary bg-white flex items-center justify-center">
        </div>

        <LargeButton @click="handleCopy" label="COPY LINK" />

        <div class="flex items-center gap-1 mt-[20px]">
            <IconTelegramLogo size="24px" />
            <span>Share via Telegram</span>
        </div>
    </main>
</template>