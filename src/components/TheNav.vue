<script setup lang="ts">
import NavItem from '@/components/NavItem.vue'
import { NAV_ITEMS } from '@/constants'
</script>
<template>
  <nav class="sticky bottom-0 z-10 bg-white text-2xl">
    <ul class="flex items-center justify-around border-t">
      <NavItem v-for="navItem in NAV_ITEMS" :key="navItem.page" :nav-item="navItem"> </NavItem>
    </ul>
  </nav>
</template>
