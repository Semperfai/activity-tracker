<script setup lang="ts">
import TimelineItem from '@/components/TimelineItem.vue'
import { type ITimelineItem } from '@/components/types'
import { MIDNIGHT_HOUR, PAGE_TIMELINE } from '@/constants'
import { watchPostEffect, ref, nextTick } from 'vue'
import { currentPage } from '@/router'
interface IProps {
  timelineItems: ITimelineItem[]
}

defineProps<IProps>()

defineExpose({
  scrollToHour
})

const timelineItemRefs = ref<HTMLElement[]>([])

function scrollToHour(hour: number | null, isSmooth = true) {
  hour ??= new Date().getHours()

  const options = {
    behavior: isSmooth ? 'smooth' : 'instant'
  }

  const el = hour === MIDNIGHT_HOUR ? document.body : timelineItemRefs.value[hour - 1].$el

  el.scrollIntoView(options)
}

watchPostEffect(async () => {
  if (currentPage.value === PAGE_TIMELINE) {
    await nextTick()

    scrollToHour(null, false)
  }
})
</script>
<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        v-for="timelineitem in timelineItems"
        :key="timelineitem.hour"
        :timeline-item="timelineitem"
        ref="timelineItemRefs"
        @scroll-to-hour="scrollToHour(timelineitem.hour)"
      />
    </ul>
  </div>
</template>
