
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 16 16"><!-- Icon from Gravity UI Icons by YANDEX LLC - https://github.com/gravity-ui/icons/blob/main/LICENSE --><path fill="currentColor" fillRule="evenodd" d="M2.47 4.72a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06L4.81 6H9a3.25 3.25 0 0 1 0 6.5H8A.75.75 0 0 0 8 14h1a4.75 4.75 0 1 0 0-9.5H4.81l1.72-1.72a.75.75 0 0 0-1.06-1.06z" clipRule="evenodd" /></svg>
</template>

<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    default: '50px'
  }
})

</script>