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
</script>
<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem v-for="activity in activities" :key="activity.id" :activity="activity" />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm />
  </div>
</template>
