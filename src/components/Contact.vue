<template>
  <div
    id="contact"
    class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32"
    data-aos="fade-up"
    data-aos-offset="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
  >
    <div class="flex flex-col justify-between">
      <div class="space-y-2">
        <h2 class="text-4xl font-bold leading-tight lg:text-5xl">
          Let's talk!
        </h2>
        <div>Get in touch for a chat.</div>
      </div>
      <img src="#" alt="Contact" id="contact-image" class="p-6 h-52 md:h-64" />
    </div>
    <div class="w-full md:w-96 md:max-w-full mx-auto" data-aos="fade">
      <div class="p-6 border border-gray-300 sm:rounded-md flex flex-col justify-start">
          <a href="mailto:dannydyson297@gmail.com" class="flex justify-start items-center reveal-animation">
            <div class="w-16 h-16 flex justify-center items-center">
              <font-awesome-icon :style="{ color: '#332F90' }" icon="fa-solid fa-envelope" size="3x" />
            </div>
            <div>
              <p class="ml-8 text-lg font-medium leading-6">Email</p>
            </div>
          </a>
          <a href="https://github.com/dandyson" target="_blank" class="flex justify-start items-center reveal-animation">
            <div class="w-16 h-16 flex justify-center items-center">
              <font-awesome-icon :style="{ color: '#332F90' }" icon="fa-brands fa-github" size="3x" />
            </div>
            <div>
              <p class="ml-8 text-lg font-medium leading-6">Github</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/dandyson297/" target="_blank" class="flex justify-start items-center reveal-animation">
            <div class="w-16 h-16 flex justify-center items-center">
              <font-awesome-icon :style="{ color: '#332F90' }" icon="fa-brands fa-linkedin" size="3x" />
            </div>
            <div>
              <p class="ml-8 text-lg font-medium leading-6">LinkedIn</p>
            </div>
          </a>
          <a href="#" target="_blank" id="download-cv" class="flex justify-start items-center reveal-animation">
            <div class="w-16 h-16 flex justify-center items-center">
              <font-awesome-icon :style="{ color: '#332F90' }" icon="fa-solid fa-file-arrow-down" size="3x" />
            </div>
            <div>
              <p class="ml-8 text-lg font-medium leading-6">Download CV</p>
            </div>
          </a>
      </div>
    </div>
  </div>
</template>

<script>
import cv from './../assets/cv.pdf';
import contactImage from './../assets/contact.svg';

export default {
  data() {
    return {
      baseUrl: window.location.origin + window.location.pathname
    }
  },

  mounted() {
    document.getElementById('contact-image').src = contactImage;
    document.getElementById('download-cv').href = cv;
  },

}
</script>
