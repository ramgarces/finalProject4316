<script setup>
import SearchBar from '@/components/SearchBar.vue';
import MainCards from '@/components/MainCards.vue';

import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <main class="flex min-h-screen items-center justify-center">
        <h1 class="text-6xl font-thin text-white">
            Pokemon: {{ route.params.id }}
        </h1>
    </main>
</template>
