<script setup lang="ts">
import Footer from '@/components/widget/Footer.vue'
import Header from '@/components/widget/Header.vue'
</script>

<template>
  <div>
    <Header class="m-5" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
