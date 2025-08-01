import MeerkatAPIBridge from "@/lib/meerkat-api-bridge";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useAuthStore } from "./auth";
import { useWallet } from "./wallet";




export const useTasksStore = defineStore('tasks', () => {

    const auth = useAuthStore()

    const wallet = useWallet()

    const tasks = ref<any[]>([])

    const load_state = ref<'loading' | 'success' | 'error'>('loading')

    const getAllTasks = async () => {

        if (tasks.value.length > 0) return

        try {

            load_state.value = 'loading'

            tasks.value = await MeerkatAPIBridge.getAllTasks()

            load_state.value = 'success'
        } catch (error) {

            load_state.value = 'error'
        }
    }

    const fulfillTasks = async (task: any) => {

        if (task.type == "following") {
            const a = document.createElement("a")

            a.setAttribute("href", task.metadata.url)

            a.setAttribute("target", "_blank")

            a.click()
        }

        setTimeout(async () => {
            if (auth.user) {
                try {
                    wallet.balance += task.points

                    const idx = tasks.value.findIndex(t => t.id == task.id)

                    if (idx != -1) tasks.value[idx].done = true

                    await MeerkatAPIBridge.giveBonusForCompletingTask(task, auth.user.id.toString())

                } catch (error: any) {
                    wallet.balance -= task.points

                    const idx = tasks.value.findIndex(t => t.id == task.id)

                    if (idx != -1) tasks.value[idx].done = false
                }
            }
        }, 10000)
    }

    return {
        tasks,
        load_state,
        getAllTasks,
        fulfillTasks
    }
})