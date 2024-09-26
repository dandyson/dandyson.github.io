<script setup>
import Nav from '../components/Nav.vue'
import BackgroundCircles from '../components/BackgroundCircles.vue'
import Footer from '../components/Footer.vue'
import nexusFlo from './../assets/webp/nexusflo.webp';
import nexusFloWorryJournal from './../assets/webp/nexusflo-worry-journal.webp';
import nexusFloGeneralNotes from './../assets/webp/nexusflo-general-notes.webp';
import nexusFloWorryBalancer from './../assets/webp/nexusflo-worry-balancer.webp';
import homeMovieHub from './../assets/webp/homemoviehub.webp';
import homeMovieHubUi from './../assets/webp/homemoviehub-ui.webp';
import homeMovieHubCover from './../assets/webp/homemoviehub-cover.webp';
import homeMovieHubProfile from './../assets/webp/homemoviehub-profile.webp';
import homeMovieHubMap from './../assets/webp/homemoviehub-map.webp';
import waygenieCover from './../assets/webp/waygenie-cover.webp';
import waygenieLocation from './../assets/webp/waygenie-location.webp';
import waygenieInterests from './../assets/webp/waygenie-interests.webp';
import waygenieTravel from './../assets/webp/waygenie-travel.webp';
import PortfolioInfoModal from '../components/PortfolioInfoModal.vue';

</script>

<script>
import 'aos/dist/aos.css';

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
            mainImage: homeMovieHubCover,
            infoContent: {
              title: "A central place for Home Movies",
              techStack: [
                {
                  name: 'Vue.js',
                  logo: 'fa-brands fa-vuejs',
                  colour: '#3FB280',
                },
                {
                  name: 'Laravel',
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
                  image: homeMovieHubUi,
                },
                {
                  title: "Personal Profiles",
                  desc: "Users can have each family member as a profile, which can be tagged in videos!",
                  icon: "fa-solid fa-user-tie",
                  image: homeMovieHubProfile,
                },
                {
                  title: "See locations",
                  desc: "Using the integrated Google Maps, users can pin the locations in their videos, allowing a better perspective of where they have been in the world",
                  icon: "fa-solid fa-map-location-dot",
                  image: homeMovieHubMap,
                },
              ],
            }
          },
        },
        {
          name: 'NexusFlo',
          description: 'A well-being app built with Laravel/Vue.js made to help people manage their lives and their mental health.',
          image: nexusFlo,
          githubUrl: 'https://github.com/dandyson/nexusflo',
          liveUrl: 'https://nexusflo.uk/',
          modal: {
            mainTitle: "NexusFlo",
            mainDescription: "A well-being app built with Laravel/Vue.js made to help people manage their lives and their mental health.",
            mainImage: nexusFlo,
            infoContent: {
              title: "An innovative tool crafted with Laravel/Vue.js designed to enhance productivity and support personal growth.",
              techStack: [
                {
                  name: 'Vue.js',
                  logo: 'fa-brands fa-vuejs',
                  colour: '#3FB280',
                },
                {
                  name: 'Laravel',
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
                  image: nexusFloWorryJournal,
                },
                {
                  title: "General Notebook",
                  desc: "For anything they need to remember, users have a notebook included",
                  icon: "fa-solid fa-note-sticky",
                  image: nexusFloGeneralNotes,
                },
                {
                  title: "AI-powered 'Worry Balancer'",
                  desc: "Powered by OpenAI, this allows the user to get a more balanced perspective on their worries automatically!",
                  icon: "fa-solid fa-scale-balanced",
                  image: nexusFloWorryBalancer,
                },
              ],
            }
          },
        },
        {
          name: 'WayGenie',
          description: 'A React.js/Express.js AI Travel Itinerary app designed to provide users with Itineraries for their travels',
          image: waygenieCover,
          githubUrl: 'https://github.com/dandyson/waygenie',
          liveUrl: 'http://waygenie.s3-website.eu-west-2.amazonaws.com/',
          modal: {
            mainTitle: "WayGenie",
            mainDescription: "A cutting-edge tool that uses AI to create personalized travel itineraries for users.",
            mainImage: waygenieCover,
            infoContent: {
              title: "WayGenie's intelligent system considers your interests—be it adventure, relaxation, culture, or cuisine—to create an itinerary that reflects what you love most about traveling.",
              techStack: [
                {
                  name: 'React.js',
                  logo: 'fa-brands fa-react',
                  colour: '#61DBFB',
                },
                {
                  name: 'Express.js',
                  logo: 'fa-brands fa-node',
                  colour: '#7FC727',
                },
              ],
              desc: "WayGenie utilises AI to generate personalized travel itineraries. This project highlights expertise in modern JavaScript frameworks and server-side development, ensuring dynamic user experiences. It incorporates Cypress for end-to-end testing, guaranteeing robust functionality and a seamless travel planning process. It is deployed on both an AWS S3 Bucket as a web server, while the backend is being hosted on Heroku.",
              points: [
                {
                  title: "Personalized Itineraries",
                  desc: "By inputting your desired location, travel dates, interests, and travel style, WayGenie generates customized itineraries that highlight the best activities and experiences suited to you.",
                  icon: "fa-solid fa-book",
                  image: waygenieLocation,
                },
                {
                  title: "Interest-Based Suggestions",
                  desc: "WayGenie's intelligent system considers your interests—be it adventure, relaxation, culture, or cuisine—to create an itinerary that reflects what you love most about traveling.",
                  icon: "fa-solid fa-note-sticky",
                  image: waygenieInterests,
                },
                {
                  title: "Travel Route Advice Included",
                  desc: "Whether you're taking a car, bus, or walking, users receive tailored suggestions that help them navigate their destination efficiently, ensuring a smooth and stress-free travel experience.",
                  icon: "fa-solid fa-scale-balanced",
                  image: waygenieTravel,
                },
              ],
            }
          },
        },
      ],
    }
  },
}
</script>

<template>
    <div>
        <BackgroundCircles>
            <Nav />
            <section id="portfolio" class="py-6 sm:py-12 px-0 sm:px-20" data-aos="fade-up" data-aos-offset="50"
                data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
                <div class="container p-6 mx-auto space-y-8">
                    <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8" data-aos="fade">
                        <h2 class="text-3xl lg:text-5xl tracking-tight font-extrabold mb-2 text-white">Portfolio </h2>
                        <p class="font-light sm:text-xl text-gray-100">Recent Projects and Work</p>
                    </div>
                    <div class="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                        <div v-for="(item, index) in portfolioItems" :key="index"
                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col mx-auto">
                            <div class="h-60">
                                <img class="object-cover object-center w-full h-full rounded-t-md" :src="item.image"
                                    :alt="'portfolio image' + index" />
                            </div>
                            <div
                                class="p-5 flex flex-col justify-between flex-grow bg-white">
                                <a href="#">
                                    <h5
                                        class="mb-2 text-3xl font-bold tracking-tight text-center md:text-left">
                                        {{ item.name }}</h5>
                                </a>
                                <p class="mb-3 font-normal flex-grow text-center md:text-left">{{
                            item.description }}</p>
                                <div class="flex flex-col md:flex-row">
                                    <template v-if="item.modal">
                                        <PortfolioInfoModal :mainTitle="item.modal.mainTitle"
                                            :mainDescription="item.modal.mainDescription"
                                            :mainImage="item.modal.mainImage" :githubUrl="item.githubUrl"
                                            :liveUrl="item.liveUrl" :infoContent="item.modal.infoContent" />
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </BackgroundCircles>
    </div>
</template>