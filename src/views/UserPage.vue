<script setup>
import SixStack from '@/components/SixStack.vue';
import { useAuth } from '@/composables/useAuth';

const {isAuthenticated, logout, user} = useAuth()
</script>

<template>
  <h1 v-show="isAuthenticated" class="teams-title">{{user.name}}'s Teams</h1>
  <div class="wrapper">
    <h1 class="teams-1">{{ user.name }}'s Team #1</h1>
    <SixStack />
    <button type="button">View Details</button>
    <h1 class="teams-2">{{ user.name }}'s Team #2</h1>
    <SixStack />
    <button type="button">View Details</button>
    
  </div>
</template>

<style lang="postcss" scoped>
  .wrapper {
    @apply container flex flex-col mx-auto py-6;
    h1 {
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