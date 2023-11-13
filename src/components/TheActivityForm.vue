<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import { ref, nextTick, inject } from 'vue'
import { SECODNS_IN_HOUR } from '@/constants'
import type { IActivity } from './types'
import { id } from '@/helpers/functions'
import { createActivityKey } from '@/keys'
const name = ref('')

const createActivity = inject(createActivityKey) as (activity: IActivity) => void

const submit = () => {
  createActivity({
    id: id(),
    name: name.value,
    secondsToComplete: 0 * SECODNS_IN_HOUR
  })
  name.value = ''

  nextTick().then(() => {
    window.scrollTo(0, document.body.scrollHeight)
  })
}
</script>
<template>
  <form @submit.prevent="submit" class="sticky bottom-[57px] flex gap-2 border-t bg-white p-4">
    <input
      v-model="name"
      type="text"
      class="w-full rounded border px-4 text-xl"
      placeholder="Activity name"
    />
    <BaseButton type="primary" :disabled="name.trim() === ''">
      <PlusIcon class="h-8" />
    </BaseButton>
  </form>
</template>
