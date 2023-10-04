<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheTimeline from './components/pages/TheTimeline.vue'
import TheProgress from './components/pages/TheProgress.vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'

const currentPage = ref<string>(normalizePageHash())

function normalizePageHash(): string {
  const hash = window.location.hash.slice(1)

  if (Object.keys([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE]).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav @navigate="currentPage = $event" :current-page="currentPage" />
</template>
