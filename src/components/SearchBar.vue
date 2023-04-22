<template>
<div class="wrapper">
    <input type="text" placeholder="Pokemon Name Search" class="search" />
    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </span>
</div>
</template>

<style lang="postcss" scoped>
.wrapper {
    @apply relative flex w-full items-stretch;

    .search {
        @apply px-16 py-4 placeholder-slate-500 text-slate-800 rounded-md 
        border-0 outline-none focus:ring-yellow-400 focus:ring-4;
    }

    .icon {
        @apply absolute left-5 pr-8 py-4 text-slate-400;
    }
}
</style>
