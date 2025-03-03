<script lang="ts" setup>

</script>

<template>
    <section id="home"
        class="min-h-[100dvh] scroll-mt-[88px] flex flex-col-reverse md:flex-row items-center justify-center gap-16 px-4 md:px-0">
        <article class="text-center md:text-left animate-slideInLeft">
            <p
                class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hi
            </p>
            <p class="text-2xl md:text-3xl font-semibold mt-2 dark:text-white">I'm Pitpy BPSS</p>
            <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mt-1">Fullstack Developer</p>
            <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 mt-4 animate-pulse">Let's work together
            </p>
        </article>
        <div class="animate-slideInRight">
            <div class="relative">
                <div
                    class="absolute -inset-3 bg-gradient-to-r from-purple-400 via-blue-500 to-pink-600 rounded-full blur animate-[spin_3s_linear_infinite]">
                </div>
                <img class="size-50 md:size-70 rounded-full relative border-2 border-white dark:border-gray-800"
                    src="/pitpy.jpg" alt="Pitpy BPSS | ປິດປີ່ ບຸນພາໄຊຊົນ" />
            </div>
        </div>
        <router-link :to="{ name: 'techstack' }"
            class="absolute bottom-16 animate-bounce bg-gradient-to-b from-purple-400/30 to-pink-600/30 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
                class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
        </router-link>
    </section>
</template>

<style scoped>
@keyframes slideInLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.animate-slideInLeft {
    animation: slideInLeft 1s ease-out forwards;
}

.animate-slideInRight {
    animation: slideInRight 1s ease-out forwards;
}
</style>