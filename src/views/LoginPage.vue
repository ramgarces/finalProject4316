<script setup>
import { useAuth } from '@/composables/useAuth';

const { login } = useAuth();

const logUserIn = () => {}
</script>

<template>
  <form class="login-form" @submit="logUserIn">
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button class="bg-red-600 px-4 py-2" @click="login('admin', 'admin')">
      Log In
    </button>
  </form>
</template>

<style lang="postcss" scoped>
  .login-form {
    @apply flex flex-col max-w-md mx-auto mt-80 gap-4 p-8 bg-yellow-400
    shadow-2xl;
    & input {
      @apply text-xl px-4 py-2 rounded-md ring-blue-600;
    }
  }
</style>