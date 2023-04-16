<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/teamSelect">Team Selection</RouterLink>
    <RouterLink to="/pokemonStats">Pokemon Stats</RouterLink>
    <RouterLink to="/teams">Teams</RouterLink>
    <RouterLink to="/user">User</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4 p-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
