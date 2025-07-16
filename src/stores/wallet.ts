import MeerkatAPIBridge from "@/lib/meerkat-api-bridge";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";





export const useWallet = defineStore("wallet", () => {

    const balance = ref(0);

    const auth = useAuthStore()

    const fetchWalletBalance = async () => {
        
        await MeerkatAPIBridge.getWalletBalance(auth.user?.id.toString()!).then(async res => {
            balance.value = res ?? 0
        })
    }

    return {
        balance,
        fetchWalletBalance
    }
})