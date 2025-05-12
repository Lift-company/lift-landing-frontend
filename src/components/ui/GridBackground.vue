<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <div class="relative flex h-[100vh] w-full items-center justify-center bg-background">
    <div
      :class="cn(
        'absolute inset-0',
        '[background-size:40px_40px]',
        '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
      )"
    />
    <div class="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]" />
    <div class="relative z-20">
      <slot />
    </div>
  </div>
</template>
