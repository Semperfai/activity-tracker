<script setup lang="ts">
import NavItem from '@/components/NavItem.vue'
import { NAV_ITEMS } from '@/constants'

const emit = defineEmits<{
  navigate: [page: string]
}>()

defineProps<{
  currentPage: string
}>()
</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white text-2xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'pointer-events-none bg-gray-200': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
