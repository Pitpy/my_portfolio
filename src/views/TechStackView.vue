<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import iconVue from '@/components/icon/IconVue.vue';
import iconFlutter from '@/components/icon/IconFlutter.vue';
import iconTailwind from '@/components/icon/IconTailwind.vue';
import iconNuxt from '@/components/icon/IconNuxt.vue';
import iconJavaScript from '@/components/icon/IconJavaScript.vue';
import iconTypeScript from '@/components/icon/IconTypeScript.vue';
import iconDart from '@/components/icon/IconDart.vue';
import iconGo from '@/components/icon/IconGo.vue';
import iconNode from '@/components/icon/IconNode.vue';
import iconHtml from '@/components/icon/IconHtml.vue';
import iconCss from '@/components/icon/IconCss.vue';
import iconPython from '@/components/icon/IconPython.vue';
import iconGit from '@/components/icon/IconGit.vue';
import iconFigma from '@/components/icon/IconFigma.vue';
import iconHono from '@/components/icon/IconHono.vue';
import iconMysql from '@/components/icon/IconMySql.vue';
import iconDocker from '@/components/icon/IconDocker.vue';
import iconRedis from '@/components/icon/IconRedis.vue';
import iconPostgreSQL from '@/components/icon/IconPostgreSQL.vue';
import iconFastAPI from '@/components/icon/IconFastAPI.vue';

const stackList = ref([
    { name: 'HTML5', icon: iconHtml },
    { name: 'CSS3', icon: iconCss },
    { name: 'JavaScript', icon: iconJavaScript },
    { name: 'TypeScript', icon: iconTypeScript },
    { name: 'Vue.js', icon: iconVue },
    { name: 'Nuxt.js', icon: iconNuxt },
    { name: 'Tailwind CSS', icon: iconTailwind },
    { name: 'NodeJs', icon: iconNode },
    { name: 'Hono.js', icon: iconHono },
    { name: 'Python', icon: iconPython },
    { name: 'FastAPI', icon: iconFastAPI },
    { name: 'Go', icon: iconGo },
    { name: 'Dart', icon: iconDart },
    { name: 'Flutter', icon: iconFlutter },
    { name: 'PostgreSQL', icon: iconPostgreSQL },
    { name: 'MySql', icon: iconMysql },
    { name: 'Redis', icon: iconRedis },
    { name: 'Docker', icon: iconDocker },
    { name: 'Git', icon: iconGit },
    { name: 'Figma', icon: iconFigma }
]);

const isVisible = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                isVisible.value = true;
            }
        });
    }, { threshold: 0.1 });

    const techStackSection = document.querySelector('#tech-stack');
    if (techStackSection) {
        observer.observe(techStackSection);
    }
});
</script>

<template>
    <section id="tech-stack"
        class="min-h-[100dvh] scroll-mt-[88px] flex flex-col items-center justify-center bg-gradient-to-tr from-blue-300/20 to-indigo-400/20">
        <h2
            class="text-4xl font-bold my-12 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">
            Tech Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mb-30">
            <div v-for="(stack, index) in stackList" :key="stack.name" :style="{ animationDelay: `${index * 0.1}s` }"
                class="flex flex-col items-center p-6 bg-white/30 dark:bg-gray-800/40 rounded-xl shadow-lg shadow-blue-300/20 dark:shadow-stone-900/20 hover:shadow-xl transition-shadow duration-300 space-y-4"
                :class="{ 'animate-fade-in-up': isVisible }">
                <component :is="stack.icon" class="w-16 h-16" />
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ stack.name }}</h3>
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
}
</style>