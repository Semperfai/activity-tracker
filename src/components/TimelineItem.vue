<script setup lang="ts">
import { type ITimelineItem, type IActivitySelectOptions, type IActivity } from '@/components/types'
import BaseSelect from './BaseSelect.vue'
import TimelineStopwatch from './TimelineStopwatch.vue'
import TimelineHour from './TimelineHour.vue'
import { NULLABLE_ACTIVITY } from '@/constants'
interface IProps {
  timelineItem: ITimelineItem
  activities: IActivity[]
  activitySelectOptions: IActivitySelectOptions[]
}

const props = defineProps<IProps>()
const emit = defineEmits<{
  selectActivity: [activity: IActivity | null]
}>()

function selectActivity(activityId: string) {
  emit('selectActivity', findActivityById(activityId))
}

function findActivityById(id: string): IActivity | null {
  return props.activities.find((activity) => activity.id === id) || NULLABLE_ACTIVITY.id
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      @select="selectActivity"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      placeholder="Rest"
    />
    <TimelineStopwatch :seconds="timelineItem.activitySeconds" />
  </li>
</template>
