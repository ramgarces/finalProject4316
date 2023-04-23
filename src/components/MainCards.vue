<script setup>
    import SingleCard from './SingleCard.vue';
</script>

<template>
    <div class="sub-wrapper">
        <SingleCard v-for="n in 20"/>
    </div>
</template>

<style lang="postcss" scoped>
    .sub-wrapper {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
        xl:grid-cols-4;
    }
</style>