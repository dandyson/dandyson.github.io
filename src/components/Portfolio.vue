<template>
  <section
    id="portfolio"
    class="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 px-0 sm:px-20"
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
  >
    <div class="container p-6 mx-auto space-y-8">
      <div class="space-y-2 text-center" data-aos="fade">
        <h3
          class="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50"
        >
          Portfolio
        </h3>
        <p class="mt-3 text-lg dark:text-gray-400">
          See what I have been up to!
        </p>
      </div>
      <div
        class="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
      >

        <custom-card2 v-for="(item, index) in portfolioItems" :key="index">
          <div class="rounded-md shadow-md bg-gray-900 text-gray-100" data-aos="fade">
                <img
                  :src="item.image"
                  alt=""
                  class="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
                />
                <div class="flex flex-col justify-between p-6 space-y-8">
                  <div class="space-y-2">
                    <h2 class="text-2xl font-semibold tracking-wide">
                      {{ item.name }}
                    </h2>
                    <p class="text-gray-100">
                      {{ item.description }}
                    </p>
                  </div>
                  <a
                    target="_blank"
                    v-if="item.githubUrl != ''"
                    :href="item.githubUrl"
                    class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 grow-animation"
                  >
                    See Github Repo
                  </a>
                  <a
                    target="_blank"
                    v-if="item.liveUrl != ''"
                    :href="item.liveUrl"
                    class="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 grow-animation"
                  >
                    See Live
                  </a>
                </div>
              </div>
        </custom-card2>

      </div>
    </div>
  </section>
</template>

<script>
import centre from './../assets/centre-app.png';
import reactFace from './../assets/react-face-recognition.png';
import oneStop from './../assets/one-stop.png';

export default {
  data() {
    return {
      portfolioItems: [
        { 
          name: 'Centre App',
          description: '(In progress) - A Laravel/Vue.js project made to help people manage their mental health.',
          image: centre,
          githubUrl: '',
          liveUrl: '',
        },
        {
          name: 'Facial Recognition App',
          description: 'A React project made to test an image facial recognition API.',
          image: reactFace,
          githubUrl: 'https://github.com/dandyson/facerecognitionapp',
          liveUrl: '',
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