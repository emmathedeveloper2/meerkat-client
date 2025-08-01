<script lang="ts" setup>
import { useTasksStore } from '@/stores/tasks'
import { onMounted } from 'vue'

const tasks_store = useTasksStore()

onMounted(() => {
    tasks_store.getAllTasks()
})

</script>

<template>
    <section class="flex flex-col w-full rounded-lg border border-[#911A53] p-2 mb-[20px]">
        <h2 class="text-[18px] font-bold mb-[20px]">TASKS</h2>

        <p v-if="tasks_store.load_state == 'loading'" class="w-full text-center animate-pulse">Loading tasks...</p>
        <p v-if="tasks_store.load_state == 'error'" class="w-full text-center">Couldn't get tasks</p>

        <div v-if="tasks_store.load_state == 'success'" v-for="task in tasks_store.tasks"
            class="flex items-center justify-between w-full bg-[#3C312B] backdrop-blur p-2 rounded-lg mb-1">
            <div class="flex flex-col">
                <p class="font-bold">{{ task.title }}</p>
                <small class="font-bold opacity-70">Earn {{ task.points }} point</small>
            </div>

            <button :disabled="task.done" class="rounded-[10px] px-2 disabled:opacity-50"
                @click="() => tasks_store.fulfillTasks(task)">
                {{ task.done ? "Done" : task.label }}
            </button>
        </div>
    </section>
</template>

<style scoped>
button {
    background-image: linear-gradient(to right, #F90004, #E9A94E);
    box-shadow: 0 7px 50px 15px #AD0600;
}
</style>