export interface IActivitySelectOptions {
  value: string
  label: string
}

export interface IActivity {
  id: string
  name: string
  secondsToComplete: number
}

export interface ITimelineItem {
  hour: number
  activityId: null | string
  activitySeconds: number
}
