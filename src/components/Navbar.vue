<script lang="ts" setup>
import { onMounted } from "vue";
function darkModeToggle() {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
}
onMounted(() => {
    document.documentElement.classList.toggle(
        "dark",
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
});
</script>

<template>
    <nav
        class="fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-6 px-4 md:px-24 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <a href="/" class="flex items-center justify-center gap-2">
            <img class="size-8 rounded-full" src="/logo.jpg" alt="Pitpy BPSS | ປິດປີ່ ບຸນພາໄຊຊົນ" />
            <p class="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-600 to-purple-500 dark:from-purple-400 dark:via-pink-500 dark:to-purple-400 animate-gradient">
                Pitpy BPSS
            </p>
        </a>
        <div class="flex space-x-4">
            <a href="https://www.facebook.com/PitpyBPSS" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2">
                <img class="size-5 dark:invert" src="@/assets/icon/fb.svg" alt="Pitpy BPSS Facebook" />
            </a>
            <a href="https://www.instagram.com/pitpybpss/" target="_blank" rel="noopener noreferrer"
                class="flex items-center gap-2">
                <img class="size-5 dark:invert" src="@/assets/icon/ig.svg" alt="Pitpy BPSS Instagram" />
            </a>
            <a href="https://x.com/Pitpy" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2">
                <img class="size-4 dark:invert" src="@/assets/icon/x.svg" alt="Pitpy BPSS X" />
            </a>
            <button @click="darkModeToggle()" id="darkModeToggle"
                class="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
                <img class="size-6 dark:hidden" src="@/assets/icon/moon.svg" alt="dark mode" />
                <img class="size-6 hidden dark:block" src="@/assets/icon/sun.svg" alt="light mode" />
            </button>
        </div>
    </nav>
</template>

<style scoped>
@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.animate-gradient {
    background-size: 200% auto;
    animation: gradient 3s linear infinite;
}
</style>
