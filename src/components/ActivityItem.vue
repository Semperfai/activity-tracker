<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { BUTTON_TYPE_DANGER } from '../constants'
import { type IActivity } from '../components/types'
import ActivitySecondsToComplete from './ActivitySecondsToComplete.vue'
import { inject } from 'vue'
import { setActivitySecondsToCompleteKey, periodSelectOptionsKey, deleteActivityKey } from '@/keys'

defineProps({
  activity: {
    type: Object as () => IActivity,
    required: true
  }
})

const setActivitySecondsToComplete = inject(setActivitySecondsToCompleteKey) as (
  activity: IActivity,
  secondsToComplete: number
) => void

const periodSelectOptions = inject(periodSelectOptionsKey) as {
  value: number
  label: string
}[]

const deleteActivity = inject(deleteActivityKey) as (activity: IActivity) => void
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="deleteActivity(activity)">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate">{{ activity.name }}</span>
    </div>
    <div class="flex gap-2">
      <BaseSelect
        @select="setActivitySecondsToComplete(activity, $event)"
        class="flex-grow font-mono"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="periodSelectOptions"
      />
      <ActivitySecondsToComplete :activity="activity" v-if="activity.secondsToComplete" />
    </div>
  </li>
</template>
