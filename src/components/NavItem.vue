<script setup lang="ts">
import { navigate, currentPage } from '@/router'
import { computed, type FunctionalComponent } from 'vue'

const props = defineProps<{
  navItem: {
    icon: FunctionalComponent
    page: string
  }
}>()

const classes = computed(() => [
  'flex flex-col items-center p-2 text-xs capitalize',
  {
    'pointer-events-none bg-gray-200': props.navItem.page === currentPage.value
  }
])
</script>
<template>
  <li class="flex-1">
    <a :href="`#${navItem.page}`" :class="classes" @click="navigate(navItem.page)">
      <component :is="navItem.icon" class="h-6 w-6" />
      {{ navItem.page }}
      >
    </a>
  </li>
</template>
