<template>
  <BackgroundCircles class="min-h-screen ">
    <section class="relative z-10 py-10">
      <Nav />
      <div class="mx-8 lg:mx-24 mt-10 p-10 lg:p-12 bg-white rounded-lg border border-gray-200 shadow-md" data-aos="fade-up" data-aos-offset="50"
        data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
        <h1 class="text-2xl lg:text-4xl text-center font-bold mb-8">{{ post.title }}</h1>
        <div class="mb-8 text-gray-500 text-sm text-center">
          Published on: {{ formattedDate }}
        </div>
        <RichTextRenderer :content="post.content" />
      </div>
    </section>
    <Footer />
  </BackgroundCircles>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import RichTextRenderer from '../components/RichTextRenderer.vue';
import Nav from '../components/Nav.vue';
import BackgroundCircles from '../components/BackgroundCircles.vue';
import { getPost } from '../services/blogService.js';
import Footer from '../components/Footer.vue'

const route = useRoute();
const post = ref({});

onMounted(async () => {
  post.value = await getPost(route.params.id);
  console.log(post.value);
});

const formattedDate = computed(() => {
  if (post.value.publishedDate) {
    const date = new Date(post.value.publishedDate);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return '';
});
</script>

<style>
/* Custom CSS for proper list item styling */
ul.list-disc, ol.list-decimal {
  padding-left: 1.5rem; /* Adjust the padding to your desired indentation */
}

li > p {
  display: inline; /* Ensure the paragraph within list items is displayed inline */
}
</style>
