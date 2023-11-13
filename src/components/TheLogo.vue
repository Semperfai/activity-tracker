<script setup lang="ts">
import { PAGE_TIMELINE } from '@/constants'
import { navigate } from '@/router'
</script>
<template>
  <a :href="`#${PAGE_TIMELINE}`" @click="navigate(PAGE_TIMELINE)">
    <img src="../assets/imgs/logo.png" alt="logo" class="h-9" />
  </a>
</template>
