import {
  SECODNS_IN_HOUR,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE,
  MILLISECONDS_IN_SECOND
} from '@/constants'
import { type IActivitySelectOptions, type IActivity, type ITimelineItem } from '@/components/types'
import { isNull, isNaN } from '@/validators'

export function getTotalActivitySeconds(
  activity: IActivity,
  timelineItems: ITimelineItem[]
): number {
  return timelineItems
    .filter((timelineItem) => timelineItem.activityId === activity.id)
    .reduce((total, timelineItem) => Math.round(timelineItem.activitySeconds) + total, 0)
}

export function id() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

export function normalizeSelectValue(value: any): number | string {
  return isNull(value) || isNaN(value) ? value : +value
}

export function generatePeriodSelectOptions(): { label: string; value: number }[] {
  const periodsInMinutes = [15, 30, 45, 60, 90, 120, 180, 240, 300, 360, 420, 480, 540, 600]
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
