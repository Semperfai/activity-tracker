import type { IActivity, IActivitySelectOptions } from '@/components/types'
import { SECODNS_IN_HOUR } from '@/constants'
import { id } from '@/helpers/functions'
import { computed, ref } from 'vue'

export const activities = ref(generateActivities())
export const activitiySelectOptions = computed(() =>
  generateActivitySelectOptions(activities.value)
)

export function deleteActivity(activity: IActivity) {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

export function createActivity(newActivity: IActivity) {
  activities.value.push(newActivity)
}

export function setActivitySecondsToComplete(activity: IActivity, secondsToComplete: number): void {
  activity.secondsToComplete = secondsToComplete || 0
}

function generateActivitySelectOptions(activities: IActivity[]): IActivitySelectOptions[] {
  return activities.map((activity) => ({
    label: activity.name,
    value: activity.id
  }))
}

function generateActivities(): IActivity[] {
  return ['Coding', 'Design', 'Testing', 'Planning', 'Meeting', 'Research', 'Other'].map(
    (name, hours) => ({
      id: id(),
      name,
      secondsToComplete: hours * SECODNS_IN_HOUR
    })
  )
}
