<script setup lang="ts">
import ActivityItem from '../ActivityItem.vue'
import TheActivitiesEmptyState from '../TheActivitiesEmptyState.vue'
import TheActivityForm from '../TheActivityForm.vue'
import { type IActivity } from '../../components/types'
defineProps({
  activities: {
    type: Array as () => IActivity[],
    required: true
  }
})

const emit = defineEmits<{
  (e: 'delete-activity', activity: IActivity): void
  (e: 'create-acitivity', newActivity: IActivity): void
  (e: 'setActivitySecondsToComplete', activity: IActivity, secondsToComplete: number): void
}>()

const submitActivityForm = (newActivity: IActivity) => {
  emit('create-acitivity', newActivity)
}

function setSecondsToComplete(activity: IActivity, secondsToComplete: number) {
  emit('setActivitySecondsToComplete', activity, secondsToComplete)
}
</script>
<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem
        @delete="emit('delete-activity', activity)"
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="submitActivityForm" />
  </div>
</template>
