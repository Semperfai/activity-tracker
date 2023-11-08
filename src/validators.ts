import { BUTTON_TYPES, HOURS_IN_DAY, MIDNIGHT_HOUR } from './constants'

export function isUndefinedOrNull(value: any): boolean {
  return value === undefined || value === null
}

export function isHourValid(hour: number): boolean {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

export function isNumber(value: any): boolean {
  return typeof value === 'number'
}

export function isString(value: any): boolean {
  return typeof value === 'string'
}

export function isBetween(value: number, start: number, end: number): boolean {
  return value >= start && value <= end
}

export function isNotEmptyString(str: string) {
  return isString(str) && str.length > 0
}

export function isValidButtonType(type: string) {
  return BUTTON_TYPES.includes(type)
}

export function isUndefined(value: any) {
  return value === undefined
}

export function isNull(value: any) {
  return value === null
}

export function isNaN(value: any) {
  return Number.isNaN(+value)
}
