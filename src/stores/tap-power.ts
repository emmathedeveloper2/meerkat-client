import { defineStore } from "pinia";
import { ref } from "vue";





export const useTapPowerStore = defineStore('tappower' , () => {

    const currentTapPower = ref(0)

    const MAX_TAP_POWER = 5

    let dropPowerTimer: number;

    const increase = () => {

        if(currentTapPower.value >= MAX_TAP_POWER) return

        currentTapPower.value += 1

        clearInterval(dropPowerTimer)

        dropPowerTimer = setInterval(() => {
            if(currentTapPower.value != 0) currentTapPower.value -= 1
        } , 200)
    }

    return {
        increase,
        currentTapPower
    }
})