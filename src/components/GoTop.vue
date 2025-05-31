<script lang="ts" setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    })
}
</script>

<template>
    <button @click="scrollToTop()"
        class="group fixed bottom-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-purple-700 cursor-pointer transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8 text-gray-800 dark:text-white group-hover:text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
        </svg>
    </button>
</template>