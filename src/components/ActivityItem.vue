<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '../constants'
import { type IActivity } from '../components/types'

defineProps({
  activity: {
    type: Object as () => IActivity,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'setSecondsToComplete', secondsToComplete: number): void
  (e: 'delete'): void
}>()
</script>
<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER" @click="emit('delete')">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate">{{ activity.name }}</span>
    </div>
    <div>
      <BaseSelect
        @select="emit('setSecondsToComplete', $event || 0)"
        class="font-mono"
        placeholder="hh:mm"
        :selected="activity.secondsToComplete || null"
        :options="PERIOD_SELECT_OPTIONS"
      />
    </div>
  </li>
</template>
