<template>
  <section id="portfolio" class="py-6 sm:py-12 px-0 sm:px-20" data-aos="fade-up" data-aos-offset="50"
    data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
    <div class="container p-6 mx-auto space-y-8">
      <div class="space-y-2 text-center" data-aos="fade">
        <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">
          Portfolio
        </h3>
        <p class="mt-3 text-lg ">
          See what I have been up to!
        </p>
      </div>
      <div class="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(item, index) in portfolioItems" :key="index"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col mx-auto">
          <div class="h-60">
            <img class="object-cover object-center w-full h-full rounded-t-md" :src="item.image" :alt="'portfolio image' + index" />
          </div>
          <div class="p-5 flex flex-col justify-between flex-grow bg-gradient-to-b from-indigo-900 to-indigo-800">
            <a href="#">
              <h5 class="mb-2 text-3xl font-bold tracking-tight text-white text-center md:text-left">{{ item.name }}</h5>
            </a>
            <p class="mb-3 font-normal text-white flex-grow text-center md:text-left">{{ item.description }}</p>
            <div class="flex flex-col md:flex-row">
              <a v-if="item.githubUrl != ''" :href="item.githubUrl" target="_blank"
                class="inline-flex self-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 md:mb-0 md:mr-2">
                See Github Repo
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
              <a v-if="item.liveUrl != ''" :href="item.liveUrl" target="_blank"
                class="inline-flex self-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                See Live
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import nexusflo from './../assets/nexusflo.png';
import homeMovieHub from './../assets/homemoviehub.png';
import oneStop from './../assets/one-stop.png';

export default {
  data() {
    return {
      portfolioItems: [
        {
          name: 'Home Movie Hub',
          description: 'A Laravel/Vue.js project which is essentially a "Netflix for home movies".',
          image: homeMovieHub,
          githubUrl: 'https://github.com/dandyson/homevideohub',
          liveUrl: 'https://homemoviehub.com',
        },
        { 
          name: 'NexusFlo',
          description: 'A Laravel/Vue.js project made to help people manage their lives and their mental health.',
          image: nexusflo,
          githubUrl: 'https://github.com/dandyson/nexusflo',
          liveUrl: 'https://nexusflo-136651299275.herokuapp.com/',
        },
        {
          name: 'One Stop Inventories',
          description: 'A freelance Wordpress website for a property inventory business.',
          image: oneStop,
          githubUrl: '',
          liveUrl: 'https://onestopinventories.co.uk/',
        },
      ],
    }
  },
}
</script>