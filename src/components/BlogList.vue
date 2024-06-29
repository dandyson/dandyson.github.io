<template>
  <div>
    <section id="blog">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-24">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="text-3xl lg:text-5xl tracking-tight font-extrabold text-white mb-4">{{ this.title }}</h2>
          <p class="font-light sm:text-xl text-gray-100">See My Plans, Thoughts and Strategies</p>
        </div>
        <div :class="posts.length === 1 ? 'flex flex-col gap-4 p-4' : 'grid grid-cols-1 md:grid-cols-2 gap-8 p-4'">
          <article v-for="post in posts" :key="post.id"
            class="p-6 bg-white rounded-lg border border-gray-200 shadow-md mb-6">
            <div class="flex flex-col md:flex-row justify-between md:items-center mb-5 text-gray-500">
              <span
                class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <font-awesome-icon v-if="post.category === 'General'" class="mr-1" :style="{ color: 'grey' }" icon="fa-solid fa-list" size="1x" />
                {{ post.category }}
              </span>
              <span class="text-sm">
                {{ formatDate(post.createdAt) }} 
                <span v-if="formatDate(post.createdAt) !== 'Today'">({{ daysAgo(post.createdAt) }} days ago)</span>
              </span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
            </h2>
            <p class="mb-5 font-light text-gray-500">
              {{ post.excerpt || truncateText(post.content, 200) }}
            </p>
            <div class="flex justify-between items-center">
              <router-link :to="`/blog/${post.id}`"
                class="inline-flex items-center font-medium text-primary-600 hover:underline">
                Read more
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </router-link>
            </div>
          </article>
        </div>

        <div v-if="!listAllBlogs" class="flex justify-center mt-12">
          <router-link to="/blog" class="px-8 py-3 text-lg font-semibold border rounded text-white grow-animation">See All Blog Posts</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getAllPosts, getLatestEntries } from '../services/blogService.js';
import RichTextRenderer from './RichTextRenderer.vue';

export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Blog',
    },
    listAllBlogs: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = this.listAllBlogs ? await getAllPosts() : await getLatestEntries();
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const today = new Date();
      
      // Check if the date is today
      if (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      ) {
        return 'Today';
      }

      // If not today, format the date
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    },

    daysAgo(dateStr) {
      const postDate = new Date(dateStr);
      const now = new Date();

      // Reset time components to midnight, so it only takes days into account
      postDate.setHours(0, 0, 0, 0);
      now.setHours(0, 0, 0, 0);

      // Calculate difference in days
      const diffTime = Math.floor((now - postDate) / (1000 * 60 * 60 * 24));
      return diffTime;
    },
    truncateText(content, limit) {
      const text = content.content.map((block) => block.content.map((node) => node.value).join(' ')).join(' ');
      return text.length > limit ? text.slice(0, limit) + '...' : text;
    }
  },
  components: {
    RichTextRenderer
  }
};
</script>
