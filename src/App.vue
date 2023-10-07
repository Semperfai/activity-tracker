<script setup lang="ts">
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheTimeline from './components/pages/TheTimeline.vue'
import TheProgress from './components/pages/TheProgress.vue'
import { normalizePageHash, generateTimelineItems } from '@/helpers/functions'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'

const currentPage = ref<string>(normalizePageHash())
const timelineItems = generateTimelineItems()

function goToPage(page: string) {
  currentPage.value = page
}
</script>

<template>
  <TheHeader @navigate="goToPage" />
  <main class="flex flex-grow flex-col">
    <TheTimeline :timeline-items="timelineItems" v-show="currentPage === PAGE_TIMELINE" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav @navigate="goToPage" :current-page="currentPage" />
</template>
