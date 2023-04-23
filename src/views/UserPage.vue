<script setup>
import SixStack from '@/components/SixStack.vue';
</script>

<template>
  <p class="teams-title">User's Teams</p>
  <div class="wrapper">
    <p class="teams-1">Your Team #1</p>
    <SixStack />
    <button type="button">View Details</button>
    <p class="teams-2">Your Team #2</p>
    <SixStack />
    <button type="button">View Details</button>
    <p class="teams-3">Your Team #3</p>
    <SixStack />
    <button type="button">View Details</button>
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
    p {
      @apply p-6 font-semibold text-5xl text-yellow-400;
    }
    button {
      @apply text-center p-4 font-semibold text-2xl text-yellow-400 
      bg-red-600 w-60 self-center mt-6 rounded-md border-2
      border-blue-700 hover:bg-blue-700
      hover:border-yellow-400 hover:border-2;
    }
  }
  .teams-title {
    @apply text-center p-6 font-semibold text-5xl text-yellow-400
      tracking-wide;
  }
</style>