<script setup lang="ts">
import myNavbar from '@/components/Navbar.vue';
import myFooter from '@/components/Footer.vue';
import startView from '@/views/StartView.vue';
import skillView from '@/views/SkillView.vue';

import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'

const route = useRoute()
const router = useRouter()

router.replace({ name: 'home' })
const sections = ['home','skill']

let lastScrollPosition = window.scrollY
let isScrollingDown = true
const currentScrollPosition = ref(0)

window.addEventListener('scroll', () => {
  currentScrollPosition.value = window.scrollY
  isScrollingDown = currentScrollPosition.value > lastScrollPosition
  lastScrollPosition = currentScrollPosition.value
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {    
        if (entry.isIntersecting && ((entry.intersectionRatio >= 0.2 && entry.intersectionRatio < 0.4) && isScrollingDown) || (entry.intersectionRatio >= 0.5 && !isScrollingDown)) {
          const sectionId = entry.target.id
          if (route.name !== sectionId) {
            router.replace({ name: entry.target.id })
          }
        }
      })
    },
    {
      threshold: [0.2, 0.5],
      rootMargin: '-10% 0px -40% 0px'
    }
  )

  sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
  // Cleanup observer
  return () => {
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.unobserve(element)
    })
  }
})

// Handle route changes
watch(() => route.name, (newRoute) => {
  const element = document.getElementById(newRoute as string)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
})
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  })
}
</script>

<template>
  <my-navbar />
  <start-view />
  <skill-view />
  <my-footer />
  <button @click="scrollToTop" v-if="currentScrollPosition >= 690" class="fixed bottom-4 right-4 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
    </svg>
  </button>
</template>
