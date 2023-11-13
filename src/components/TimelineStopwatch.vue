<script setup lang="ts">
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_SUCCESS,
  MILLISECONDS_IN_SECOND
} from '@/constants'
import BaseButton from './BaseButton.vue'
import { ArrowPathIcon, PauseIcon, PlayIcon } from '@heroicons/vue/24/outline'
import { formatSeconds } from '@/helpers/functions'
import { ref, inject } from 'vue'
import type { ITimelineItem } from './types'
import { updateTimelineItemActivitySecondsKey } from '../keys'

const props = defineProps({
  timelineItem: {
    type: Object as () => ITimelineItem,
    required: true
  }
})

const updateTimelineItemActivitySeconds = inject(updateTimelineItemActivitySecondsKey) as (
  timelineItem: ITimelineItem,
  second: number
) => void

const seconds = ref(props.timelineItem.activitySeconds)
const isRunning = ref<boolean | number>(false)
const isStartButtonDisabled = props.timelineItem.hour !== new Date().getHours()

function start() {
  isRunning.value = setInterval(() => {
    updateTimelineItemActivitySeconds(props.timelineItem, 1)

    seconds.value++
  }, MILLISECONDS_IN_SECOND)
}

function stop() {
  if (typeof isRunning.value === 'number') {
    clearInterval(isRunning.value)
    isRunning.value = false
  }
}
function reset() {
  stop()

  updateTimelineItemActivitySeconds(props.timelineItem, -seconds.value)

  seconds.value = 0
}
</script>
<template>
  <div class="flex w-full items-center gap-2">
    <BaseButton @click="reset" :disabled="!seconds" :type="BUTTON_TYPE_DANGER">
      <ArrowPathIcon class="h-8" />
    </BaseButton>
    <div class="flex flex-grow items-center rounded bg-gray-100 px-2 font-mono">
      {{ formatSeconds(seconds) }}
    </div>
    <BaseButton v-if="isRunning" @click="stop" :type="BUTTON_TYPE_WARNING">
      <PauseIcon class="h-8" />
    </BaseButton>
    <BaseButton v-else @click="start" :type="BUTTON_TYPE_SUCCESS" :disabled="isStartButtonDisabled">
      <PlayIcon class="h-8" />
    </BaseButton>
  </div>
</template>
