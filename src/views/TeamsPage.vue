<script setup>
import SixStack from '@/components/SixStack.vue';
</script>

<template>
  <p class="teams-title">Top Rated Teams</p>
  <div class="wrapper">
    <p class="teams-1">Team #1</p>
    <SixStack />
    <p class="teams-2">Team #2</p>
    <SixStack />
    <p class="teams-3">Team #3</p>
    <SixStack />
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
    p {
      @apply p-6 font-semibold text-5xl text-yellow-400;
    }
  }
  .teams-title {
    @apply text-center p-6 font-semibold text-5xl text-yellow-400
      tracking-wide;
  }
</style>