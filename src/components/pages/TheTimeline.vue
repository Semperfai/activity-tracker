<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'
import { type IActivity, type IActivitySelectOptions, type ITimelineItem } from '@/components/types'
interface IProps {
  activities: IActivity[]
  timelineItems: ITimelineItem[]
  activitySelectOptions: IActivitySelectOptions[]
}

const emit = defineEmits<{
  (
    e: 'setTimelineItemActivity',
    payload: { timelineitem: ITimelineItem; activity: IActivity | null }
  ): void
}>()
defineProps<IProps>()
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        :activities="activities"
        v-for="timelineitem in timelineItems"
        :key="timelineitem.hour"
        :timeline-item="timelineitem"
        @select-activity="emit('setTimelineItemActivity', { timelineitem, activity: $event })"
        :activity-select-options="activitySelectOptions"
      />
    </ul>
  </div>
</template>
