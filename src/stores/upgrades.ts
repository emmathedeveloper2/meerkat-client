import MeerkatAPIBridge from "@/lib/meerkat-api-bridge";
import { defineStore } from "pinia";
import { ref } from "vue";


const useUpgradesStore = defineStore('upgrades' , () => {

    const upgrades = ref<any[]>([])

    const getAllUpgrades = async () => {

        try {
            
            upgrades.value = await MeerkatAPIBridge.getUpgrades()

        } catch (error: any) {
            
        }
    }

    return {
        getAllUpgrades
    }
})

export default useUpgradesStore