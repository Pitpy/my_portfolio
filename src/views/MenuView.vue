<script setup lang="ts">
import { ref } from 'vue'

interface menu {
    id: number
    name: string
    image: string
    price: string
    description: string
    colors: string
}

const menus = ref<menu[]>([
    { id: 1, name: 'ນ້ຳສະກັດໝາກແຕງໂມ', image: '/menu/water_melon.png', price: '35,000', description: 'ແຕງໂມແທ້ 100%', colors: 'from-[#FF6162] to-[#f44545]' },
    { id: 2, name: 'ນ້ຳສະກັດແຄຣ໋ອດ', image: '/menu/carrot.png', price: '35,000', description: 'ແຄຣ໋ອດແທ້ 100%', colors: 'from-[#f88453d6] to-[#f35d1ed6]' },
    { id: 3, name: 'ນ້ຳສະກັດບີທຣູດສ໌', image: '/menu/beetroot.png', price: '35,000', description: 'ບີທຣູດສ໌ແທ້ 100%', colors: 'from-[#9479A6] to-[#9F71BD]' },
    { id: 4, name: 'ນ້ຳຊາໝາກໄມ້ລວມ', image: '/menu/fruits_tee.png', price: '38,000', description: 'ຊາໝາກໄມ້ລວມຫຼາຍຊະນິດ', colors: 'from-amber-300 to-amber-500' },
    { id: 5, name: 'ນ້ຳສະກັດໝາກໄມ້ລວມ', image: '/menu/mix_1.png', price: '35,000', description: 'ແຄຣ໋ອດ+ແອັບເປີ້ນ+ໝາກນັດ', colors: 'from-[#D0E484] to-[#A1BC1B]' },
    { id: 6, name: 'ນ້ຳສະກັດໝາກໄມ້ລວມ', image: '/menu/mix_2.png', price: '35,000', description: 'ແຕງໂມ+ແອັບເປີ້ນ+ໝາກນັດ', colors: 'from-pink-300 to-pink-400' },
    { id: 7, name: 'ນ້ຳສະກັດໝາກໄມ້ລວມ', image: '/menu/mix_3.png', price: '35,000', description: 'ໝາກເລັ່ນ+ແຕງໂມ+ສິດາ', colors: 'from-indigo-300 to-indigo-400' },
])
</script>

<template>
    <div class="w-screen h-100dvh pb-30">
        <div class="flex flex-col items-center justify-center h-full px-6 my-6">
            <div>
                <h1 class="text-3xl">
                    <strong
                        class="mx-4px font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                        G&G
                    </strong>
                    <span class="text-green-500">ໝາກໄມ້ປອກພ້ອມກິນ</span>
                </h1>
            </div>
            <h1 class="leading-16 text-5xl font-bold text-stone-800 animate-pulse">
                ເມນູ
            </h1>
        </div>
        <div class="mx-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-6">
                <template v-for="menu in menus" :key="menu.id">
                    <div class="group relative bg-white my-8 p-6 flex flex-col"
                        :class="['bg-gradient-to-r', menu.colors]">
                        <div v-if="menu.image"
                            class="absolute -left-6 -translate-y-25  group-active:animate-bounce group-hover:animate-bounce transition-transform duration-300 hover:scale-110">
                            <img :src="menu.image" width="170px" :alt="menu.name" class="-rotate-10" />
                        </div>
                        <div class="ml-32 flex flex-col gap-2 text-white">
                            <h2 class="text-lg font-semibold">{{ menu.name }}</h2>
                            <p class="text-7">{{ menu.description }}</p>
                            <p class="text-2xl font-bold">{{ menu.price }} KIP</p>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
    <footer
        class="fixed bottom-0 left-0 w-full bg-white/70 backdrop-blur-md text-gray-500 text-sm shadow-md py-2 flex flex-col items-center justify-center gap-2">
        <span>
            ໂທລະສັບ: <a href="tel:+8562052956465" class="text-blue-500 hover:underline">+856 20 5295 6465</a>
        </span>
        <span class="text-center text-sm">
            © 2025 G&G ໝາກໄມ້ປອກພ້ອມກິນ. All rights reserved.
        </span>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    font-family: 'Noto Sans Lao', sans-serif;
}
</style>