import type { IActivity, ITimelineItem } from '@/components/types'
import { ref } from 'vue'
import { activities } from './activities'
import { HOURS_IN_DAY } from '@/constants'

export const timelineItems = ref(generateTimelineItems(activities.value))

export function setTimelineItemActivity(payload: {
  timelineItem: ITimelineItem
  activityId: string | null
}): void {
  payload.timelineItem.activityId = payload.activityId
}

export function resetTimelineItemActivities(activity: IActivity): void {
  timelineItems.value.forEach((timelineitem) => {
    if (timelineitem.activityId === activity.id) {
      timelineitem.activityId = null
      timelineitem.activitySeconds = 0
    }
  })
}

export function updateTimelineItemActivitySeconds(
  timelineitem: ITimelineItem,
  second: number
): void {
  timelineitem.activitySeconds += second
}

function generateTimelineItems(activities: IActivity[]): ITimelineItem[] {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => {
    return {
      hour,
      activityId: [1, 2, 3, 4, 5].includes(hour) ? activities[hour % 3].id : null,
      activitySeconds: [1, 2, 3, 4, 5].includes(hour) ? hour * 600 : null
      // activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
      // activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECODNS_IN_HOUR
    }
  })
}
