<script setup>
import Nav from '../components/Nav.vue'
import BackgroundCircles from '../components/BackgroundCircles.vue'
import Footer from '../components/Footer.vue'
import servers from './../assets/servers.svg';
import working from './../assets/working.svg';

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
  data() {
		return {
			active: false,
		}
	},

	mounted() {
		document.getElementById('about-1').src = servers;
		document.getElementById('about-2').src = working;
	}
}
</script>

<template>
    <div>
        <BackgroundCircles>
            <Nav />
            <section id="about" class="px-0 sm:px-20 text-white" data-aos="fade-up" data-aos-offset="50"
                data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
                <div class="container max-w-xl p-6 py-12 mx-auto space-y-18 lg:px-8 lg:max-w-7xl">
                    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 class="text-3xl lg:text-5xl tracking-tight font-extrabold mb-2">About Me </h2>
                        <p class="font-light sm:text-xl">My Skills and Interests</p>
                    </div>
                    <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div data-aos="fade-up" data-aos-offset="50"
                            data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">

                            <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">I believe in simple, clean and
                                effective websites and apps.</h3>
                            <p class="mt-3 text-lg">
                                My journey into web development started early, 
                                making websites for my bands at the age of 13. 
                                I quickly saw the impact a well-designed website could have, 
                                and I've been hooked ever since!
                            </p>
                            <div class="mt-12 space-y-12">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" class="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium leading-6">HTML/CSS</h4>
                                        <p class="mt-2">
                                            I am skilled in HTML, CSS, and SASS/SCSS, 
                                            and I have experience with various frameworks like 
                                            Bootstrap and TailwindCSS (which this site uses) 
                                            to build beautiful and functional websites.</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" class="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium leading-6">Javascript</h4>
                                        <p class="mt-2">
                                            I regularly work with JavaScript, specializing in Vue.js 
                                            (both Vue 2 and Vue 3). I also have experience with React, 
                                            adding to my versatile front-end development skills.</p>
                                    </div>
                                </div>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" class="w-7 h-7">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h4 class="text-lg font-medium leading-6">PHP</h4>
                                        <p class="mt-2">
                                            For back-end development, I primarily use PHP, 
                                            with extensive experience in the Laravel framework. 
                                            I've also worked with other PHP frameworks like WordPress and Drupal.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" class="mt-10 lg:mt-0" ddata-aos="fade-up" data-aos-offset="50"
                            data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
                            <img src="#" alt="Servers" id="about-1" class="mx-auto rounded-lg">
                        </div>
                    </div>
                    <div>
                        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div class="lg:col-start-2" data-aos="fade-right" data-aos-offset="50" data-aos-delay="10"
                                data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-anchor-placement="top-center">
                                <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">A little more about me</h3>
                                <p class="mt-3 text-lg">I have worked in the retail, finance and music industry - all of
                                    these have given me a wide spectrum of experience within the world. But whenever I
                                    am not programming:</p>
                                <div class="mt-12 space-y-12">
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor" class="w-7 h-7">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h4 class="text-lg font-medium leading-6">I am a Professional Musician</h4>
                                            <p class="mt-2">
                                                I've performed globally in hotels, on cruise ships, and on tours. 
                                                Currently, I am performing as a musician on cruise ships, combining my 
                                                passion for music with travel.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor" class="w-7 h-7">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h4 class="text-lg font-medium leading-6">I have a big interest in all
                                                matters health</h4>
                                            <p class="mt-2">I have a deep interest in health and wellness. 
                                                I regularly practice meditation and yoga, 
                                                and I make time for the gym whenever I can!
                                            </p>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div class="flex items-center justify-center w-12 h-12 rounded-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor" class="w-7 h-7">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h4 class="text-lg font-medium leading-6">I am a movie lover and a video gamer</h4>
                                            <p class="mt-2">
                                                I'm a big fan of movies, especially horror, thriller, 
                                                mystery and science fiction genres. 
                                                As a gamer, I enjoy playing video games, 
                                                with the GTA series being my favorite!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-aos="fade-left"
                                data-aos-offset="30" data-aos-duration="500" data-aos-easing="ease-in-out"
                                data-aos-mirror="true" data-aos-anchor-placement="top-center">
                                <img src="#" alt="Working" id="about-2" class="mx-auto rounded-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </BackgroundCircles>
    </div>
</template>