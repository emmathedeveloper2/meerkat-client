<script lang="ts" setup>
import type { TgUser } from '@/lib/types';

    defineProps<{
        class?: string;
        user: TgUser
    }>();
</script>

<template>
  <div :class="class" class="flex items-center justify-center gap-1 bg-primary text-primary-foreground rounded-full overflow-hidden border border-[#FFA600]">
    <img
      v-if="user.photo_url"
      :src="user.photo_url"
      alt="User Avatar"
      class="size-full rounded-full object-cover"
      :class="class"
    />
    <span v-else class="font-bold">{{ user.first_name[0].toUpperCase() }} {{ user.last_name?.[0].toUpperCase() }}</span>
  </div>
</template>

<style>

</style>