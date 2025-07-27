<script lang="ts" setup>
import MeerkatAPIBridge from '@/lib/meerkat-api-bridge'
import { useAuthStore } from '@/stores/auth'
import { useWallet } from '@/stores/wallet'

const auth = useAuthStore()

const wallet = useWallet()

const tasks = [
    {
        done: !!(localStorage.getItem(`followed_on_twitter`)),
        text: 'Follow us on X',
        points: 1,
        url: 'https://x.com/meerkatairdrop?t=mU5KmfbUXHb_74jTPZTF_g&s=09',
        platform: 'twitter',
        onClick: function(){
            
            const a = document.createElement('a')

            a.setAttribute('href' , this.url)
            a.setAttribute('target' , '_blank')

            a.click()

            setTimeout(async () => {
                if(auth.user) MeerkatAPIBridge.giveBonusForFollowing(auth.user.id.toString() , 'twitter').then(() => {
                    wallet.balance += 1
                })
            } , 10000)
        }
    },
]
</script>

<template>
    <section class="flex flex-col w-full rounded-lg border border-[#911A53] p-2 mb-[20px]">
        <h2 class="text-[18px] font-bold mb-[20px]">REWARDS</h2>

        <div v-for="task in tasks"
            class="flex items-center justify-between w-full bg-[#3C312B] backdrop-blur p-2 rounded-lg mb-1">
            <div class="flex flex-col">
                <p class="font-bold">{{ task.text }}</p>
                <small class="font-bold opacity-70">Earn {{ task.points }} point</small>
            </div>

            <button :disabled="task.done" class="rounded-[10px] px-2 disabled:opacity-50"  @click="() => task.onClick()">
                {{ task.done ? "Done" : "Follow" }}
            </button>
        </div>

    </section>
</template>

<style scoped>
    button {
        background-image: linear-gradient(to right, #F90004 , #E9A94E);
        box-shadow: 0 7px 50px 15px #AD0600;
    }
</style>