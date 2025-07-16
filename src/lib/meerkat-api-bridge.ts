import toast from 'vue3-hot-toast'


export default class MeerkatAPIBridge {


    static async giveReferralBonus(userTelegramId: string, referrerTelegramId: string) {

        try {

            const response = await fetch('/api/give-referral-bonus', {
                method: 'POST',
                body: JSON.stringify({ userTelegramId, referrerTelegramId }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()

            if (!data?.success) throw new Error(data.message)

        } catch (error: any) {
            console.log(error)
            toast.error(error?.message || "Something went wrong")
        }
    }

    static async createAccount(telegramId: string, callback?: any) {

        let id;

        try {

            if (localStorage.getItem('signedup')) return callback?.()

            id = toast.loading("Connecting...")

            const response = await fetch('/api/create-account', {
                method: 'POST',
                body: JSON.stringify({ telegramId }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()

            if (data && data.success) {
                localStorage.setItem('signedup', 'true')
                toast.dismiss(id)
                id = toast.success("Connected successfully")

                callback?.()
            }

            if (!data?.success) throw new Error(data.message)

        } catch (error: any) {
            console.log(error)
            toast.dismiss(id)
            toast.error(error?.message || "Something went wrong", { id })
        }
    }

    static async getWalletBalance(telegramId: string) {

        try {

            const response = await fetch(`/api/wallet-balance/${telegramId}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()

            if (data && data.success) {
                return data.data
            }


        } catch (error: any) {
            console.log(error)
            toast.error(error?.message || "Something went wrong")
        }
    }
}