<script setup>
const selectCard = () => {
        console.log(`PokemonID`)
    }
</script>

<template>
    <div class="card" @click="selectCard">
        <div class="card-image">
            <img src="../assets/Poké_Ball_icon.svg.png" alt="" srcset="" />
        </div>
        <div class="card-details">
            <p class="card-details-name">Pokemon Name</p>
            <p class="card-details-type">Pokemon Type</p>
            <p class="card-details-number">Pokemon Number</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">
    .card {
        @apply cursor-pointer overflow-hidden rounded-md bg-yellow-400 p-8
        shadow-xl transition-transform duration-150 hover:scale-105
        hover:shadow-red-500;
        &-image{
            img {
                @apply mx-auto;
            }
        }
        &-details {
            @apply flex flex-col gap-2 pt-6 text-center;
            &-number{
                @apply text-lg font-bold italic;
            }
            &-name {
                @apply text-2xl font-bold;
            }
        }
    }
</style>