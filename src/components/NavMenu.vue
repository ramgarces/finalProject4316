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
            <RouterLink to="/user" class="login-name">User</RouterLink>
            <RouterLink to="/login" class="login-login">Login</RouterLink>
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
            @apply flex gap-10;

            &-name {
                @apply rounded-md px-4 py-2 hover:bg-yellow-400 
                hover:text-red-600;
            }
            &-login {
                @apply rounded-md px-4 py-2 bg-yellow-400 text-red-600
                hover:text-yellow-400 hover:bg-red-600 ;
            }
        }
    }
}
</style>
