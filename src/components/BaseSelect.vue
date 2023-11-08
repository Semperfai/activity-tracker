<script setup lang="ts">
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { isUndefinedOrNull } from '@/validators'
import { normalizeSelectValue } from '@/helpers/functions'

const emits = defineEmits(['select'])
const props = defineProps<{
  options: { value: string | number; label: string }[]
  placeholder: string
  selected?: string | number | null
}>()

const select = (value: any) => {
  emits('select', normalizeSelectValue(value))
}

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))
</script>
<template>
  <div class="flex gap-2">
    <BaseButton type="neutral" @click="select(null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
      @change="select($event?.target?.value)"
    >
      <option :selected="isNotSelected" disabled value="">{{ placeholder }}</option>
      <option
        v-for="{ value, label } in options"
        :value="value"
        :key="value"
        :selected="selected === value"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
