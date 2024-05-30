<script setup>
import Nav from './components/Nav.vue';
import { RouterView } from 'vue-router';
</script>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  created() {
    AOS.init({
      once: true,
    });
  },
};
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'slide-down'" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Advanced Slide-Down Transition */
.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 0.6s ease;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}



</style>
