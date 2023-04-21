<template>
<nav>
    <div class="wrapper">
        <div class="menu">
            <RouterLink to="/" class="menu-item">Home</RouterLink>
            <RouterLink to="/teamSelect" class="menu-item">
                Team Selection
            </RouterLink>
            <RouterLink to="/pokemonStats" class="menu-item">
                Pokemon Stats
            </RouterLink>
            <RouterLink to="/teams" class="menu-item">Teams</RouterLink>
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
    @apply flex h-20 bg-blue-800 text-yellow-300 px-6;

    & .router-link-active {
        @apply underline underline-offset-4;
    }

    .wrapper {
        @apply container mx-auto flex w-full items-center justify-between;

        .menu {
            @apply flex gap-4;

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
                @apply rounded-md px-4 py-2 bg-red-600 hover:bg-yellow-400 
                hover:text-red-600;
            }
        }
    }
}
</style>
