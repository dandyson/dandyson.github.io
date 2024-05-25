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
              <template v-if="item.modal">
                <PortfolioInfoModal 
                  :mainTitle="item.modal.mainTitle"
                  :mainDescription="item.modal.mainDescription"
                  :mainImage="item.modal.mainImage"
                  :githubUrl="item.githubUrl"
                  :liveUrl="item.liveUrl"
                  :infoContent="item.modal.infoContent"
                />
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import nexusflo from './../assets/nexusflo.png';
import homeMovieHub from './../assets/homemoviehub.png';
import oneStop from './../assets/one-stop.png';
import PortfolioInfoModal from './PortfolioInfoModal.vue';


export default {
  components: { PortfolioInfoModal },
  data() {
    return {
      showModal: false,
      portfolioItems: [
        {
          name: 'HomeMovieHub',
          description: 'A Laravel/Vue.js project which is essentially a "Netflix for home movies".',
          image: homeMovieHub,
          githubUrl: 'https://github.com/dandyson/homevideohub',
          liveUrl: 'https://homemoviehub.com',
          modal: {
            mainTitle: "HomeMovieHub",
            mainDescription: "A Netflix-like app which allows a secure place for users to stream their home movies",
            mainImage: "http://localhost:5173/src/assets/homemoviehub-cover.png",
            infoContent: {
              title: "A central place for Home Movies",
              techStack: [
                {
                  logo: 'fa-brands fa-vuejs',
                  colour: '#3FB280',
                },
                {
                  logo: 'fa-brands fa-laravel',
                  colour: '#F72C20',
                },
              ],
              desc: "HomeMovieHub is a secure place online for users to stream their precious home videos, with features such as:",
              points: [
                {
                  title: "Netflix-like UI",
                  desc: "A nice and family UI allows users to easily navigate their collection",
                  icon: "fa-solid fa-tv",
                  image: "http://localhost:5173/src/assets/homemoviehub-ui.png",
                },
                {
                  title: "Personal Profiles",
                  desc: "Users can have each family member as a profile, which can be tagged in videos!",
                  icon: "fa-solid fa-user-tie",
                  image: "http://localhost:5173/src/assets/homemoviehub-profile.png",
                },
                {
                  title: "See locations",
                  desc: "Using the integrated Google Maps, users can pin the locations in their videos, allowing a better perspective of where they have been in the world",
                  icon: "fa-solid fa-map-location-dot",
                  image: "http://localhost:5173/src/assets/homemoviehub-map.png",
                },
              ],
            }
          },
        },
        {
          name: 'NexusFlo',
          description: 'A well-being app built with Laravel/Vue.js made to help people manage their lives and their mental health.',
          image: nexusflo,
          githubUrl: 'https://github.com/dandyson/nexusflo',
          liveUrl: 'https://nexusflo.uk/',
          modal: {
            mainTitle: "NexusFlo",
            mainDescription: "A well-being app built with Laravel/Vue.js made to help people manage their lives and their mental health.",
            mainImage: "http://localhost:5173/src/assets/nexusflo.png",
            infoContent: {
              title: "An innovative tool crafted with Laravel/Vue.js designed to enhance productivity and support personal growth.",
              techStack: [
                {
                  logo: 'fa-brands fa-vuejs',
                  colour: '#3FB280',
                },
                {
                  logo: 'fa-brands fa-laravel',
                  colour: '#F72C20',
                },
              ],
              desc: "NexusFlo helps users to organise their thoughts and emotions to allow them a better perspective on the situations they go through, with features such as:",
              points: [
                {
                  title: "Worry Journal",
                  desc: "The Worry Journal allows users to go through a wizard process to help them understand and balance their anxious thoughts",
                  icon: "fa-solid fa-book",
                  image: "http://localhost:5173/src/assets/nexusflo-worry-journal.png",
                },
                {
                  title: "General Notebook",
                  desc: "For anything they need to remember, users have a notebook included",
                  icon: "fa-solid fa-note-sticky",
                  image: "http://localhost:5173/src/assets/nexusflo-general-notes.png",
                },
                {
                  title: "AI-powered 'Worry Balancer'",
                  desc: "Powered by OpenAI, this allows the user to get a more balanced perspective on their worries automatically!",
                  icon: "fa-solid fa-scale-balanced",
                  image: "http://localhost:5173/src/assets/nexusflo-worry-balancer.png",
                },
              ],
            }
          },
        },
        {
          name: 'WayGenie',
          description: '**UNDER CONSTRUCTION** - An up-and-coming travel itinerary app powered by AI and built with Laravel/Vue.js',
          image: nexusflo,
          // githubUrl: '',
          // liveUrl: '',
          modal: {
            mainTitle: "WayGenie",
            mainDescription: "**UNDER CONSTRUCTION** - An up-and-coming travel itinerary app powered by AI and built with Laravel/Vue.js",
            mainImage: "http://localhost:5173/src/assets/coming-soon.jpeg",
          },
        },
      ],
    }
  },
}
</script>