import MeerkatAPIBridge from "@/lib/meerkat-api-bridge";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";





export const useWallet = defineStore("wallet", () => {

    const balance = ref(0);

    const auth = useAuthStore()

    const fetchWalletBalance = async () => {
        
        if(auth.user) await MeerkatAPIBridge.getWalletBalance(auth.user.id.toString()).then(async res => {
            balance.value = res ?? 0
        })
    }

    const getDailyBonus = async () => {
         if(auth.user) await MeerkatAPIBridge.giveDailyBonus(auth.user.id.toString())
    }

    const increaseBalance = async () => {
        try {

            balance.value += 1

            if(auth.user) await MeerkatAPIBridge.increaseBalance(auth.user.id.toString())

        } catch (error) {

            balance.value -= 1

            throw error
        }
    }

    return {
        balance,
        fetchWalletBalance,
        getDailyBonus,
        increaseBalance
    }
})