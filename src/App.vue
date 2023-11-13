<script setup lang="ts">
import { provide, readonly } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheTimeline from './components/pages/TheTimeline.vue'
import TheProgress from './components/pages/TheProgress.vue'
import { generatePeriodSelectOptions } from '@/helpers/functions'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { currentPage, timelineRef } from '@/router'
import * as keys from '@/keys'
import {
  setActivitySecondsToComplete,
  createActivity,
  deleteActivity,
  activitiySelectOptions,
  activities
} from '@/modules/activities'
import {
  timelineItems,
  updateTimelineItemActivitySeconds,
  setTimelineItemActivity,
  resetTimelineItemActivities
} from '@/modules/timelineitems'
import type { IActivity } from '@/components/types'

//Provide - Vue 3 feature for transfer data between components
provide(keys.updateTimelineItemActivitySecondsKey, updateTimelineItemActivitySeconds)
provide(keys.setTimelineItemActivityKey, setTimelineItemActivity)
provide(keys.setActivitySecondsToCompleteKey, setActivitySecondsToComplete)
provide(keys.createActivityKey, createActivity)
provide(keys.deleteActivityKey, (activity: IActivity) => {
  resetTimelineItemActivities(activity)
  deleteActivity(activity)
})
provide(keys.timelineItemsKey, readonly(timelineItems))
provide(keys.activitySelectOptionsKey, readonly(activitiySelectOptions))
provide(keys.periodSelectOptionsKey, readonly(generatePeriodSelectOptions()))

console.log(keys)
</script>

<template>
  <TheHeader />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      :timeline-items="timelineItems"
      ref="timelineRef"
      :current-page="currentPage"
      v-show="currentPage === PAGE_TIMELINE"
    />
    <TheActivities :activities="activities" v-show="currentPage === PAGE_ACTIVITIES" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav />
</template>
