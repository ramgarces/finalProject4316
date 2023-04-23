<script setup>
  import { ref } from 'vue'
  const title = ref('Home Page 🎈')
</script>

<template>
  <div class="wrapper">
    <div class="card-image">
      <img src="../assets/Poké_Ball_icon.svg.png" alt="" srcset="" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
    .card-image {
      @apply mx-auto;
    }
  }
</style>
