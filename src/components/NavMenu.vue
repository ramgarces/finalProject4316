<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const {isAuthenticated} = useAuth()
</script>

<template>
<nav>
    <div class="wrapper">
        <div class="menu">
            <RouterLink to="/" class="menu-item">Home</RouterLink>
            <RouterLink to="/teams" class="menu-item">Teams</RouterLink>
            <RouterLink to="/teamSelect" class="menu-item">
                Team Selection
            </RouterLink>
            <RouterLink to="/pokemonStats" class="menu-item">
                Pokédex
            </RouterLink>
        </div>
        <div class="login">
            <div v-if="isAuthenticated">
                <RouterLink to="/user" class="login-name">User</RouterLink>
                <RouterLink to="/login" class="login-logout">Logout</RouterLink>
            </div>
            <div v-else>
                <RouterLink to="/login" class="login-login">Login</RouterLink>
            </div>
        </div>
    </div>
</nav>
</template>

<style lang="postcss" scoped>
nav {
    @apply flex h-20 bg-red-700 text-yellow-400 px-4 text-xl font-bold;

    & .router-link-active {
        @apply bg-blue-800;
    }

    .wrapper {
        @apply container mx-auto flex w-full items-center justify-between;

        .menu {
            @apply flex gap-6;

            &-item {
                @apply rounded-md px-4 py-2 hover:bg-yellow-400 
                hover:text-red-600;
            }
        }

        .login {
            @apply flex gap-2;
            div {
                @apply py-2
            }
            &-name {
                @apply rounded-md px-4 py-2 hover:bg-yellow-400 
                hover:text-red-600;
            }
            &-login {
                @apply rounded-md px-4 py-2 bg-green-600 text-white
                hover:text-white hover:bg-green-800 ;
            }
            &-logout {
                @apply rounded-md mx-2 px-4 py-2 bg-yellow-400 text-red-600
                hover:text-red-600 hover:bg-yellow-600 ;
            }
        }
    }
}
</style>
