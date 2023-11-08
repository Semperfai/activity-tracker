import { type FunctionalComponent } from 'vue'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'
import { generatePeriodSelectOptions } from './helpers/functions'

export const PAGE_TIMELINE = 'timeline'
export const PAGE_ACTIVITIES = 'activities'
export const PAGE_PROGRESS = 'progress'

export const MINUTES_IN_HOUR = 60
export const SECONDS_IN_MINUTE = 60
export const HOURS_IN_DAY = 24
export const MIDNIGHT_HOUR = 0
export const MILLISECONDS_IN_SECOND = 1000
export const PERIOD_IN_MINUTES = [15, 30, 45, 60, 90, 120, 180, 240, 300, 360, 420, 480, 540, 600]
export const SECODNS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE
export const NULLABLE_ACTIVITY = {
  id: null
}

export const NAV_ITEMS: Record<string, FunctionalComponent> = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon
}

export const BUTTON_TYPE_PRIMARY = 'primary'
export const BUTTON_TYPE_NEUTRAL = 'neutral'
export const BUTTON_TYPE_DANGER = 'danger'
export const BUTTON_TYPE_SUCCESS = 'success'
export const BUTTON_TYPE_WARNING = 'warning'

export const BUTTON_TYPES = [
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_SUCCESS,
  BUTTON_TYPE_WARNING
]

export const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIOD_IN_MINUTES)
