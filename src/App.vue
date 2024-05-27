<script setup>
import Nav from './components/Nav.vue'
import BackgroundCircles from './components/BackgroundCircles.vue'
import MainHero from './components/MainHero.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
	created () {
		AOS.init({
			once: true,
		});
	}
}
</script>


<template>
  <section class="relative bg-gradient-to-b from-indigo-900 to-indigo-800">
    <BackgroundCircles />
    <Nav />
    <MainHero />
  </section>
  <About />
  <Portfolio />
  <Contact />
  <Footer />
</template>