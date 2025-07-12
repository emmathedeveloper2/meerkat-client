import type { TgUser } from "@/lib/types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";




export const useAuthStore = defineStore("user" , () => {
    const user = ref<TgUser|undefined>()

    const isAuthorized = computed(() => !!user.value)
    
    return {
        user,
        isAuthorized,
    }
})