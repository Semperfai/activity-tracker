<script setup lang="ts">
import { formatSeconds, getTotalActivitySeconds } from '@/helpers/functions'
import type { IActivity, ITimelineItem } from './types'
import { computed, inject } from 'vue'
import { timelineItemsKey } from '@/keys'
const props = defineProps({
  activity: {
    type: Object as () => IActivity,
    required: true
  }
})

const timelineItems = inject(timelineItemsKey) as ITimelineItem[]

const classes = computed(() => {
  return `flex items-center rounded bg-purple-100 px-2 font-mono text-xl text-purple-600 ${colorClasses.value}`
})

const colorClasses = computed(() => {
  return secondsDiff.value < 0 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
})
const seconds = computed(() => {
  return `${sign.value}${formatSeconds(secondsDiff.value)}`
})
const sign = computed(() => {
  return Number(secondsDiff.value) >= 0 ? '+' : '-'
})

const secondsDiff = computed(() => {
  return (
    getTotalActivitySeconds(props.activity, timelineItems.value) - props.activity.secondsToComplete
  )
})
</script>
<template>
  <div :class="classes">
    {{ seconds }}
  </div>
</template>
