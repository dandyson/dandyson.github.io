<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Nav from './components/Nav.vue'
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
  <section class="bg-gradient-to-b from-indigo-900 to-indigo-800">
    <Nav />
    <MainHero />
  </section>
  <About />
  <Portfolio />
  <Contact />
  <Footer />
</template>