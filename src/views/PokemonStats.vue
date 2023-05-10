<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <main class="flex min-h-screen items-center justify-center">
        <h1 class="text-6xl font-thin text-white">
            Pokemon: {{ route.params.name }}
        </h1>
    </main>
</template>
