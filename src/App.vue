<script setup lang="ts">
import { computed, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivities from './components/pages/TheActivities.vue'
import TheTimeline from './components/pages/TheTimeline.vue'
import TheProgress from './components/pages/TheProgress.vue'
import {
  normalizePageHash,
  generateTimelineItems,
  generateActivitySelectOptions,
  generateActivities
} from '@/helpers/functions'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'
import { type IActivity, type ITimelineItem } from './components/types'

const currentPage = ref<string>(normalizePageHash())
const activities = ref(generateActivities())
const timelineItems = ref(generateTimelineItems(activities.value))
const activitiySelectOptions = computed(() => generateActivitySelectOptions(activities.value))

function goToPage(page: string) {
  currentPage.value = page
}

function deleteActivity(activity: IActivity) {
  timelineItems.value.forEach((timelineitem) => {
    if (timelineitem.activityId === activity.id) {
      timelineitem.activityId = null
      timelineitem.activitySeconds  = 0
    }
  })
  activities.value.splice(activities.value.indexOf(activity), 1)
}

function createActivity(newActivity: IActivity) {
  activities.value.push(newActivity)
}

function setTimelineItemActivity(payload: {
  timelineitem: ITimelineItem
  activity: IActivity | null
}): void {
  payload.timelineitem.activityId = payload.activity?.id || null
}

function setActivitySecondsToComplete(activity: IActivity, secondsToComplete: number): void {
  activity.secondsToComplete = secondsToComplete
}
</script>

<template>
  <TheHeader @navigate="goToPage" />
  <main class="flex flex-grow flex-col">
    <TheTimeline
      @set-timeline-item-activity="setTimelineItemActivity"
      :activities="activities"
      :timeline-items="timelineItems"
      v-show="currentPage === PAGE_TIMELINE"
      :activity-select-options="activitiySelectOptions"
    />
    <TheActivities
      @create-acitivity="createActivity"
      @delete-activity="deleteActivity"
      @set-activity-seconds-to-complete="setActivitySecondsToComplete"
      :activities="activities"
      v-show="currentPage === PAGE_ACTIVITIES"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>
  <TheNav @navigate="goToPage" :current-page="currentPage" />
</template>
