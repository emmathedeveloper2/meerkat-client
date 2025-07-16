import { defineStore } from "pinia";
import { ref } from "vue";





export const useTapPowerStore = defineStore('tappower', () => {

    const currentTapPower = ref(0)

    const totalTaps = ref(0)

    const MAX_TAP_POWER = 5

    let dropPowerTimer: number;

    let dropTotalTapsTimer: number;

    let dropTotalTapsTimeOut: number;

    const increase = () => {

        if (currentTapPower.value >= MAX_TAP_POWER) return

        currentTapPower.value += 1

        clearInterval(dropPowerTimer)

        dropPowerTimer = setInterval(() => {
            if (currentTapPower.value != 0) currentTapPower.value -= 1
        }, 200)

        dropPowerTimer = setInterval(() => {
            if (currentTapPower.value != 0) currentTapPower.value -= 2
        }, 200)

        increaseTotalTaps()
    }

    const increaseTotalTaps = () => {

        if (totalTaps.value >= 100) return

        if (totalTaps.value < 20) {
            totalTaps.value += 2
        } else if (totalTaps.value >= 20 && totalTaps.value <= 50) {
            totalTaps.value += 1
        } else if (totalTaps.value > 50 && totalTaps.value <= 60) {
            totalTaps.value += .5
        } else if (totalTaps.value > 60 && totalTaps.value <= 90) {
            totalTaps.value += .25
        } else {
            totalTaps.value += .05
        }

        clearTimeout(dropTotalTapsTimeOut)

        clearInterval(dropTotalTapsTimer)

        dropTotalTapsTimeOut = setTimeout(() => {
            dropTotalTapsTimer = setInterval(() => {
                totalTaps.value -= 1
            } , 200)
        } , 1000)

    }

    return {
        increase,
        currentTapPower,
        increaseTotalTaps,
        totalTaps
    }
})