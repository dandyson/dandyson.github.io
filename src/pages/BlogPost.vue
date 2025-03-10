<template>
  <BackgroundCircles class="min-h-screen">
    <section class="relative z-10 py-10">
      <Nav />
      <div class="mx-4 lg:mx-auto max-w-4xl mt-10" data-aos="fade-up" data-aos-offset="50"
        data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true">
        
        <!-- Category Badge -->
        <div class="flex justify-center mb-4">
          <span class="px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800">
            {{ post.category }}
          </span>
        </div>

        <!-- Title and Date -->
        <div class="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
          <div class="p-8 lg:p-12">
            <h1 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">{{ post.title }}</h1>
            <div class="mb-8 text-gray-600 text-sm flex items-center justify-center">
              <span class="mr-2">
                <font-awesome-icon icon="fa-regular fa-calendar" />
              </span>
              {{ formattedDate }}
            </div>

            <!-- Content -->
            <div class="prose prose-lg max-w-none">
              <RichTextRenderer v-if="post.content" :content="post.content" />
            </div>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="mt-8 flex justify-between">
          <router-link to="/blog" 
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            ← Back to Blog
          </router-link>
        </div>
      </div>
      <Footer />
    </section>
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
});

const formattedDate = computed(() => {
  if (post.value.publishedDate) {
    const date = new Date(post.value.publishedDate);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    }

    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return '';
});
</script>

<style>
/* Improved Typography */
.prose {
  @apply text-gray-800;
}

.prose h2 {
  @apply text-2xl font-bold mt-8 mb-4 text-gray-900;
}

.prose h3 {
  @apply text-xl font-semibold mt-6 mb-3 text-gray-900;
}

.prose p {
  @apply mb-6 leading-relaxed;
}

.prose ul, .prose ol {
  @apply my-6 ml-6;
}

.prose li {
  @apply mb-2;
}

.prose code {
  @apply px-2 py-1 bg-gray-100 rounded text-sm;
}

.prose blockquote {
  @apply pl-4 border-l-4 border-indigo-500 italic my-6 text-gray-700;
}

/* Custom link styling */
.prose a {
  @apply text-indigo-600 hover:text-indigo-800 transition-colors duration-200;
}

/* Custom list styling */
ul.list-disc, ol.list-decimal {
  @apply pl-6;
}

li > p {
  @apply inline;
}
</style>
