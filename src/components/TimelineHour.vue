<script setup lang="ts">
import { isHourValid } from '@/validators'
import { computed } from 'vue'

const props = defineProps({
  hour: {
    required: true,
    type: Number,
    validator: isHourValid
  }
})

const hourLinkCalsses = [
  'absolute -top-4 left-1/2 -translate-x-1/2 rounded px-2 font-mono text-lg',

  props.hour === new Date().getHours()
    ? 'bg-purple-900 font-black text-white'
    : 'bg-gray-100 text-gray-500'
]

const formattedHour = computed(() => {
  return `${props.hour.toString().padStart(2, '0')}:00`
})
</script>
<template>
  <a :class="hourLinkCalsses" href="#">{{ formattedHour }}</a>
</template>
