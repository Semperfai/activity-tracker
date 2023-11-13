import { ref } from 'vue'
import { PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE } from './constants'

export const currentPage = ref<string>(normalizePageHash())

export const timelineRef = ref()

export function navigate(page: string) {
  if (currentPage.value === PAGE_TIMELINE && page === PAGE_TIMELINE) {
    if (timelineRef.value) {
      timelineRef.value.scrollToHour(null, false)
    }
  } else if (page !== PAGE_TIMELINE) {
    document.body.scrollIntoView()
  }
  currentPage.value = page
}

export function normalizePageHash(): string {
  const hash = window.location.hash.slice(1)

  if (Object.keys([PAGE_ACTIVITIES, PAGE_PROGRESS, PAGE_TIMELINE]).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
