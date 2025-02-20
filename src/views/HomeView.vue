<script setup lang="ts">
import myNavbar from '@/components/Navbar.vue';
import myFooter from '@/components/Footer.vue';
import startView from '@/views/StartView.vue';
import skillView from '@/views/SkillView.vue';
</script>

<template>
  <my-navbar />
  <start-view />
  <skill-view id="skill" />
  <my-footer />
</template>
