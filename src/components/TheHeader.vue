<script setup lang="ts">
import { PAGE_TIMELINE, PAGE_PROGRESS } from '@/constants'
import TheLogo from '@/components/TheLogo.vue'
import TheHeaderProgress from '@/components/TheHeaderProgress.vue'

const emit = defineEmits<{
  navigate: [page: string]
}>()
</script>
<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
