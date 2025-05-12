<script setup lang="ts">
import { ref } from 'vue'

const year = ref(new Date().getFullYear())
</script>

<template>
  <footer>
    <div class="container">
      <p>Footer</p>
      <p>&copy; {{ year }}</p>
    </div>
  </footer>
</template>
