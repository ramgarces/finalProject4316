<script setup>
    import SingleCard from './SingleCard.vue'
</script>


<template>
    <div class="sub-wrapper">
        <SingleCard v-for="n in 6"/>
    </div>
</template>

<style lang="postcss" scoped>
    .sub-wrapper {
        @apply grid grid-cols-6 gap-4;
    }
</style>