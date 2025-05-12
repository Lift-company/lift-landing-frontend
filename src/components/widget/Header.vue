<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import LineiconsGithub from '~icons/lineicons/github'
import LineiconsTelegram from '~icons/lineicons/telegram'
import LineiconsVercel from '~icons/lineicons/vercel'
import LineiconsX from '~icons/lineicons/x'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <header :class="cn('bg-card absolute top-0 left-0 right-0 z-10 px-6 py-4 rounded-4xl shadow-xs flex items-center justify-between', props.class)">
    <RouterLink class="flex items-center gap-1 text-xl font-semibold" to="/">
      <LineiconsVercel class=" w-6 rotate-180 h-6 text-primary" />
      <span class=" text-xl font-semibold">LIFT</span>
    </RouterLink>
    <nav class="flex items-center gap-4">
      <RouterLink to="/admin">
        Administration
      </RouterLink>
      <RouterLink to="/about">
        About
      </RouterLink>
      <RouterLink to="/products">
        Products
      </RouterLink>
      <RouterLink to="/services">
        Services
      </RouterLink>
      <RouterLink to="/contact">
        Contact
      </RouterLink>
    </nav>
    <div class="flex items-center gap-4">
      <LineiconsTelegram class=" w-6 h-6 text-foreground" />
      <LineiconsX class=" w-6 h-6 text-foreground" />
      <LineiconsGithub class=" w-6 h-6 text-foreground" />
    </div>
  </header>
</template>
