import toast from 'vue3-hot-toast'

const IS_DEV = false

const BASE_URL = IS_DEV ? "https://d4mkx0vv-8787.uks1.devtunnels.ms" : "https://meerkat-bot-server.emmathedeveloper.workers.dev"
export default class MeerkatAPIBridge {
    
    
    static async increaseBalance(userTelegramId: string){
        
        try {

            const response = await fetch(`${BASE_URL}/api/increase-balance/${userTelegramId}` , {
                method: "POST",
            })
        
            const data = await response.json()
        
            if(!data?.success) throw new Error(data.message)
        
            toast.success(data.message)
            
        } catch (error: any) {
            console.log(error)
            toast.error(error?.message || "Something went wrong")
            throw error
        }
    }

    static async giveBonusForFollowing(userTelegramId: string , platform: string){

        
        try {
            const followedAlready = localStorage.getItem(`followed_on_${platform}`)

            if(followedAlready) throw new Error("You've already done this task")

            const response = await fetch(`${BASE_URL}/api/add-point-for-following/${userTelegramId}` , {
                method: "POST",
                body: JSON.stringify({ platform }),
                headers: {
                    'Content-Type': "application/json"
                }
            })

            const data = await response.json()

            if(!data?.success) throw new Error(data.message)

            toast.success(data.message)

            localStorage.setItem(`followed_on_${platform}`, 'true')
            
        } catch (error: any) {

            if(error?.message.toLowerCase().startsWith("you've already")) {
                localStorage.setItem(`followed_on_${platform}`, 'true')
            }

            console.log(error)
            toast.error(error?.message || "Something went wrong")

            throw error
        }
    }

    static async giveDailyBonus(userTelegramId: string, interaction = false) {

        const today = new Date().toDateString()

        const lastClaimedDate = localStorage.getItem("lastClaimedDate")

        
        try {
            
            if (lastClaimedDate == today) {
                if (interaction) toast.error("You've already claimed today's reward")

                throw new Error("You've already claimed today's reward")
            }

            const response = await fetch(`${BASE_URL}/api/add-daily-bonus/${userTelegramId}`, {
                method: "POST"
            })

            const data = await response.json()

            if (!data?.success) throw new Error(data.message)

            toast.success(data.message)

            localStorage.setItem("lastClaimedDate", today)

        } catch (error: any) {
            console.log(error)
            if (interaction){
                toast.error(error?.message || "Something went wrong")
                throw error
            } 
        }
    }


    static async giveReferralBonus(userTelegramId: string, referrerTelegramId: string) {

        try {

            const response = await fetch(`${BASE_URL}/api/give-referral-bonus`, {
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

            const response = await fetch(`${BASE_URL}/api/create-account`, {
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

            const response = await fetch(`${BASE_URL}/api/wallet-balance/${telegramId}`, {
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