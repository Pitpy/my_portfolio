<script setup lang="ts">
import myNavbar from '@/components/Navbar.vue';
import myFooter from '@/components/Footer.vue';
import startView from '@/views/StartView.vue';
import techStackView from '@/views/TechStackView.vue';
import goPackage from '@/components/GoPackage.vue';
import goTop from '@/components/GoTop.vue';

import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'

const route = useRoute()
const router = useRouter()

const sections = ['home', 'tech-stack']

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
</script>

<template>
  <my-navbar />
  <start-view />
  <tech-stack-view />
  <go-package />
  <my-footer />
  <go-top v-if="currentScrollPosition >= 690" />
</template>
