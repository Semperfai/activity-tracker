<script lang="ts">
import {
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_PRIMARY,
  BUTTON_TYPE_WARNING,
  BUTTON_TYPE_SUCCESS
} from '../constants'

type TypeClassesType = {
  [BUTTON_TYPE_PRIMARY]: string
  [BUTTON_TYPE_DANGER]: string
  [BUTTON_TYPE_NEUTRAL]: string
  [BUTTON_TYPE_WARNING]: string
  [BUTTON_TYPE_SUCCESS]: string
  [key: string]: string
}

const typeClasses: TypeClassesType = {
  [BUTTON_TYPE_PRIMARY]: 'bg-blue-400 enabled:hover:bg-blue-200 text-white',
  [BUTTON_TYPE_DANGER]: 'bg-red-400 enabled:hover:bg-red-200 text-white',
  [BUTTON_TYPE_NEUTRAL]: 'bg-gray-100 enabled:hover:bg-gray-200',
  [BUTTON_TYPE_WARNING]: 'bg-yellow-400 enabled:hover:bg-yellow-200 text-white',
  [BUTTON_TYPE_SUCCESS]: 'bg-green-400 enabled:hover:bg-green-200 text-white'
}
</script>

<script setup lang="ts">
import { isValidButtonType } from '../validators'
const props = defineProps({
  type: {
    default: BUTTON_TYPE_PRIMARY,
    type: String,
    validator: isValidButtonType
  }
})

const classes = `${
  typeClasses[props.type]
} rounded-sm disabled:cursor-not-allowed disabled:opacity-50`
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
