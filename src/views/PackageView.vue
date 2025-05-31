<script setup lang="ts">
import { onMounted, useHeader } from 'vue';
import Footer from '@/components/Footer.vue';

onMounted(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Lao:wght@100;200;300;400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Apply font to body
    document.body.style.fontFamily = '"Noto Sans Lao", sans-serif';
})

const packages = [
    {
        name: 'ພື້ນຖານ',
        description: 'ເໝາະສໍາລັບທຸລະກິດຂະໜາດນ້ອຍ ແລະ ເວັບໄຊທ໌ສ່ວນບຸກຄົນ.',
        price: '15,000,000 ກີບ',
        isRecommended: false,
        features: [
            'ຮອງຮັບໄດ້ 5 ໜ້າ',
            'Landing Page ພື້ນຖານ',
            'Responsive Design',
            'SEO ພື້ນຖານ',
            'ແບບຟອມຕິດຕໍ່ປະສານງານ',
            'ສະແດງສະຖານທີ່',
            'ຮອງຮັບສູງສຸດ 2 ພາສາ'
        ],
    },
    {
        name: 'ມືອາຊີບ',
        description: 'ສໍາລັບທຸລະກິດຂະໜາດນ້ອຍຫາກາງ ແລະ ເວັບໄຊທ໌ສ່ວນບຸກຄົນ ທີ່ຕ້ອງການຟັງຊັນເພີ່ນເຕີນ.',
        price: '35,000,000 ກີບ',
        isRecommended: false,
        features: [
            'ມີລະບົບສະມັກສະມາຊິກ',
            'ອີເມວ Marketing',
            'ຮອງຮັບການຈັດການເນື້ອຫາ',
            'ສະແດງສະຖານທີ່',
            'ການຈັດການບລັອກ',
            'ແບບຟອມຕິດຕໍ່ປະສານງານ',
            'SEO ຂັ້ນສູງ',
            'ຮອງຮັບສູງສຸດ 4 ພາສາ'
        ],
    },
    {
        name: 'ວິສາຫະກິດ',
        description: 'ເໝາະສຳຫລັບທຸລະກິດຂະໜາດກາງຫາໃຫຍ່ ແລະ ເວັບໄຊທ໌ທີ່ຕ້ອງການຟັງຊັນເພີ່ນເຕີນ.',
        price: '75,000,000 ກີບ',
        isRecommended: false,
        features: [
            'ມີລະບົບສະມັກສະມາຊິກ',
            'ອີເມວ Marketing',
            'ຮອງຮັບການຈັດການເນື້ອຫາ',
            'ສະແດງສະຖານທີ່',
            'ການຈັດການສິນຄ້າ',
            'ຟັງຊັນຄ້າຂາຍອອນໄລນ໌',
            'ການຈັດການບລັອກ',
            'SEO ຂັ້ນສູງ',
            'ຮອງຮັບສູງສຸດ 6 ພາສາ',
        ],
    },
]
</script>

<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mb-10">
        <div class="max-w-7xl mx-auto">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    ແພັກເກັດການພັດທະນາເວັບໄຊທ໌
                </h2>
                <p class="mt-4 text-xl text-gray-600">
                    ເລືອກແພັກເກັດທີ່ສົມບູນແບບສໍາລັບຄວາມຕ້ອງການເວັບໄຊທ໌ຂອງທ່ານ
                </p>
            </div>
            <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                <template v-for="pkg, index in packages" :key="index">
                    <div class="relative overflow-hidden border border-gray-300 rounded-lg"
                        :class="pkg.isRecommended ? 'bg-gradient-to-r from-orange-100 to-red-100' : 'bg-white'">
                        <div v-if="pkg.isRecommended"
                            :class="index === 1 ? 'bg-gradient-to-r from-orange-400 to-red-500' : 'bg-gray-200'"
                            class="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                            ແນະນໍາ
                        </div>
                        <div class="px-6 py-8">
                            <h3 class="text-2xl font-bold text-gray-900">{{ pkg.name }}</h3>
                            <p class="mt-4 text-gray-600">{{ pkg.description }}</p>
                            <div class="mt-7">
                                <span class="relative text-4xl text-gray-900">
                                    <small class="absolute -top-2 text-sm text-gray-500">ເລີ່ມຕົ້ນ</small>
                                    <span class="font-extrabold">{{ pkg.price }}</span>
                                </span>
                                <span class="text-base font-medium text-gray-500">/ໂຄງການ</span>
                            </div>
                            <ul class="mt-6 space-y-4">
                                <li v-for="ftr in pkg.features" class="flex items-center">
                                    <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span class="ml-3 text-gray-700">{{ ftr }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
    <Footer />
</template>