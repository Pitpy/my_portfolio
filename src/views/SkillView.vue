<script lang="ts" setup>
import { ref } from 'vue';
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

const skillList = ref([
    { name: 'Vue.js', icon: iconVue },
    { name: 'Nuxt.js', icon:  iconNuxt },
    {name: 'Flutter', icon: iconFlutter},
    { name: 'Tailwind CSS', icon: iconTailwind },
    { name: 'NodeJs', icon: iconNode },
    { name: 'Hono.js', icon: iconHono },
    { name: 'Dart', icon: iconDart },
    { name: 'Go', icon: iconGo },
    { name: 'JavaScript', icon: iconJavaScript },
    { name: 'TypeScript', icon: iconTypeScript },
    { name: 'HTML5', icon: iconHtml },
    { name: 'CSS3', icon: iconCss },
    { name: 'Python', icon: iconPython },
    { name: 'MySql', icon: iconMysql },
    { name: 'Git', icon: iconGit },
    { name: 'Figma', icon: iconFigma },
]);
</script>

<template>
    <section class="size-100dvh flex flex-col items-center justify-center min-h-screen pt-16 pb-24 bg-gradient-to-tr from-blue-300/20 to-indigo-400/20">
        <h2 class="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text">Skills</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div v-for="skill in skillList" :key="skill.name" class="flex flex-col items-center p-6 bg-white/30 dark:bg-gray-800/40 rounded-xl shadow-lg shadow-blue-300/20 dark:shadow-stone-900/20 hover:shadow-xl transition-shadow duration-300 space-y-4">
                <component :is="skill.icon" class="w-16 h-16" />
                <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">{{ skill.name }}</h3>
            </div>
        </div>
    </section>
</template>

<style scoped></style>