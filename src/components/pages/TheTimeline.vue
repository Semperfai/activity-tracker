<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'
import { type ITimelineItem } from '@/components/types'
interface IProps {
  timelineItems: ITimelineItem[]
}

defineProps<IProps>()
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineitem in timelineItems"
        :key="timelineitem.hour"
        :timeline-item="timelineitem"
      />
    </ul>
  </div>
</template>
