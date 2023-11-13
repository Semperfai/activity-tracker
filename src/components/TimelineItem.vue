<script setup lang="ts">
import { type ITimelineItem, type IActivitySelectOptions } from '@/components/types'
import BaseSelect from './BaseSelect.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import TimelineHour from './TimelineHour.vue'
import { inject } from 'vue'
import { activitySelectOptionsKey, setTimelineItemActivityKey } from '@/keys'
interface IProps {
  timelineItem: ITimelineItem
}

const activitySelectOptions = inject(activitySelectOptionsKey) as IActivitySelectOptions[]
const setTimelineItemActivity = inject(setTimelineItemActivityKey) as (payload: {
  timelineItem: ITimelineItem
  activityId: string
}) => void

defineProps<IProps>()
const emit = defineEmits<{
  scrollToHour: []
  updateActivitySeconds: [seconds: number]
}>()
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour @click.prevent="emit('scrollToHour')" :hour="timelineItem.hour" />
    <BaseSelect
      @select="setTimelineItemActivity({ timelineItem, activityId: $event })"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
    />
    <TimelineStopwatch :timeline-item="timelineItem" />
  </li>
</template>
