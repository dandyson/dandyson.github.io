<script setup>
import Nav from './components/Nav.vue'
import BackgroundCircles from './components/BackgroundCircles.vue'
import Footer from './components/Footer.vue'
import computer from './assets/computer.svg';

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
  mounted() {
    document.getElementById('computer-svg').src = computer;
  }
}
</script>

<template>
  <div>
    <BackgroundCircles>
      <Nav />
      <section class="py-6 sm:px-20">
        <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:px-24 lg:flex-row lg:justify-between">
          <div class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 class="text-3xl font-bold leading-none sm:text-6xl text-white">Hi, I'm Dan. <br>I'm a Software Developer.
            </h1>
            <p class="mt-6 mb-8 text-lg sm:mb-12 text-white">I am fascinated by all things tech and love
              <br class="hidden md:inline lg:hidden text-white">to build things to help make this world a better place.
            </p>
            <div class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <router-link to="/portfolio" class="px-8 py-3 text-lg font-semibold border rounded text-white grow-animation">See My Work</router-link>
            </div>
          </div>
          <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src="#" alt="Computer SVG" id="computer-svg" class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          </div>
        </div>
      </section>
      <Footer />
    </BackgroundCircles>
  </div>
</template>