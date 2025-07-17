import { defineStore } from "pinia";
import { ref } from "vue";

export const useTapPowerStore = defineStore('tappower', () => {

    const totalTaps = ref(0)

    let dropTotalTapsTimer: number;

    let dropTotalTapsTimeOut: number;

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

                if(totalTaps.value <= 0){
                    clearInterval(dropTotalTapsTimer)
                    clearTimeout(dropTotalTapsTimeOut)
                    return
                }

                totalTaps.value -= 1
            } , 200)
        } , 1000)

    }

    return {
        increaseTotalTaps,
        totalTaps
    }
})