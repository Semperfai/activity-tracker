<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { PAGE_PROGRESS } from '@/constants'
import { navigate } from '@/router'
</script>
<template>
  <a :href="`#${PAGE_PROGRESS}`" @click="navigate(PAGE_PROGRESS)">
    <div v-if="true" class="flex items-center gap-1 text-sm">
      Day complete
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1 text-sm">
      <div>Progress: <span class="font-mono">20%</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>
