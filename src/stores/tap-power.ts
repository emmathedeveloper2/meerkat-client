import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { useWallet } from "./wallet";

export const useTapPowerStore = defineStore('tappower', () => {

    const totalTaps = ref(0)

    const wallet = useWallet()

    let dropTotalTapsTimer: number;

    let dropTotalTapsTimeOut: number;

    let animationTimeout: number;

    let tappingDisabled = ref(false)

    let animating = ref(false)

    let popCoin = ref(false)

    const increaseTotalTaps = async () => {

        clearTimeout(dropTotalTapsTimeOut)

        clearInterval(dropTotalTapsTimer)

        clearTimeout(animationTimeout)

        if (totalTaps.value >= 100) {

            popCoin.value = true

            setTimeout(() => {
                popCoin.value = false
                animating.value = false
            } , 1000)
            
            tappingDisabled.value = true

            wallet.increaseBalance().then(() => {
                totalTaps.value = 0
            }).finally(() => {
                tappingDisabled.value = false
                animating.value = false
            })

            return
        }

        if (totalTaps.value < 20) {
            totalTaps.value += 2
        } else if (totalTaps.value >= 20 && totalTaps.value <= 50) {
            totalTaps.value += 1
        } else if (totalTaps.value > 50 && totalTaps.value <= 60) {
            totalTaps.value += .5
        } else if (totalTaps.value > 60 && totalTaps.value <= 90) {
            totalTaps.value += .25
        } else {
            totalTaps.value += .20
        }

        animating.value = true

        animationTimeout = setTimeout(() => {
            animating.value = false
        }, 1000)

        dropTotalTapsTimeOut = setTimeout(() => {
            dropTotalTapsTimer = setInterval(() => {

                if (totalTaps.value <= 0) {
                    clearInterval(dropTotalTapsTimer)
                    clearTimeout(dropTotalTapsTimeOut)
                    return
                }

                totalTaps.value -= 1
            }, 200)
        }, 1000)

    }

    return {
        increaseTotalTaps,
        totalTaps,
        tappingDisabled,
        animating,
        popCoin
    }
})