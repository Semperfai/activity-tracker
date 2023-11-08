import {
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  PAGE_TIMELINE,
  HOURS_IN_DAY,
  SECODNS_IN_HOUR,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
  MILLISECONDS_IN_SECOND
} from '@/constants'
import { type IActivitySelectOptions, type IActivity, type ITimelineItem } from '@/components/types'
import { isNull, isNaN } from '@/validators'

export function normalizePageHash(): string {
  const hash = window.location.hash.slice(1)

  if (Object.keys([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE]).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}

export function generateTimelineItems(activities: IActivity[]): ITimelineItem[] {
  return [...Array(HOURS_IN_DAY).keys()].map((hour) => {
    return {
      hour,
      activityId: hour % 4 === 0 ? null : activities[hour % 2].id,
      activitySeconds: hour % 4 === 0 ? 0 : (15 * SECONDS_IN_MINUTE * hour) % SECODNS_IN_HOUR
    }
  })
}

export function generateActivitySelectOptions(activities: IActivity[]): IActivitySelectOptions[] {
  return activities.map((activity) => ({
    label: activity.name,
    value: activity.id
  }))
}

export function generateActivities(): IActivity[] {
  return ['Coding', 'Design', 'Testing', 'Planning', 'Meeting', 'Research', 'Other'].map(
    (name, hours) => ({
      id: id(),
      name,
      secondsToComplete: hours * SECODNS_IN_HOUR
    })
  )
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value: any): number | string {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptions(
  periodsInMinutes: number[]
): { label: string; value: number }[] {
  return periodsInMinutes.map((minutes) => ({
    label: generatePeriodSelectOptionsLabel(minutes),
    value: minutes * SECONDS_IN_MINUTE
  }))
}

export function generatePeriodSelectOptionsLabel(periodsInMinutes: number): string {
  const hours = Math.floor(periodsInMinutes / MINUTES_IN_HOUR)
    .toString()
    .padStart(2, '0')
  const minutes = (periodsInMinutes % MINUTES_IN_HOUR).toString().padStart(2, '0')

  return `${hours}:${minutes}`
}

export function formatSeconds(seconds: number): string {
  const date = new Date()

  date.setTime(Math.abs(seconds) * MILLISECONDS_IN_SECOND)

  const utc = date.toUTCString()

  return utc.substring(utc.indexOf(':') - 2, utc.indexOf(':') + 6)
}
