<template>
  <div>
    <section id="blog">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-24">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="text-3xl lg:text-5xl tracking-tight font-extrabold mb-4" :class="listAllBlogs ? 'text-white' : 'text-black'">{{ this.title }}</h2>
          <p class="font-light sm:text-xl" :class="listAllBlogs ? 'text-gray-100' : 'text-gray-900'">See My Plans, Thoughts and Strategies</p>
        </div>
        <div :class="posts.length === 1 ? 'flex flex-col gap-4 p-4' : 'grid grid-cols-1 md:grid-cols-2 gap-8 p-4'">
          <article v-for="post in posts" :key="post.id"
            class="p-6 rounded-lg border border-gray-200 shadow-md mb-6 flex flex-col h-full" :class="listAllBlogs ? 'bg-white' : 'bg-indigo-800'">
            <div class="flex flex-col lg:flex-row justify-between mb-5 text-gray-500">
              <span
                class="text-xs font-medium inline-flex items-center py-0.5 rounded" :class="listAllBlogs ? 'text-gray-500' : 'text-white'">
                <font-awesome-icon v-if="post.category === 'General'" class="mr-1" :style="{ color: listAllBlogs ? 'grey' : 'white' }" icon="fa-solid fa-list" size="1x" />
                <font-awesome-icon v-else-if="post.category === 'GDPR & Security'" class="mr-1" :style="{ color: listAllBlogs ? 'grey' : 'white' }" icon="fa-solid fa-lock" size="1x" />
                <font-awesome-icon v-else-if="post.category === 'Python & Robotics'" class="mr-1" :style="{ color: listAllBlogs ? 'grey' : 'white' }" icon="fa-solid fa-robot" size="1x" />
                <font-awesome-icon 
                    v-else
                    class="mr-1" 
                    :style="{ color: listAllBlogs ? 'grey' : 'white' }" 
                    icon="fa-solid fa-list" 
                    size="1x" 
                />
                {{ post.category }}
              </span>
              <span class="text-sm mt-1 sm:mt-0" :class="listAllBlogs ? 'text-gray-500' : 'text-white'">
                {{ formatDate(post.createdAt) }} 
                <span v-if="formatDate(post.createdAt) !== 'Today'">({{ daysAgo(post.createdAt) }} days ago)</span>
              </span>
            </div>
            <div class="flex-grow">
              <h2 class="mb-2 text-2xl font-bold tracking-tight " :class="listAllBlogs ? 'text-gray-900' : 'text-white'">
                <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
              </h2>
              <p class="mb-5 font-light " :class="listAllBlogs ? 'text-gray-500' : 'text-white'">
                {{ post.excerpt || truncateText(post.content, 200) }}
              </p>
            </div>
            <div class="flex justify-between items-center mt-auto">
              <router-link :to="`/blog/${post.id}`"
                class="inline-flex items-center font-medium hover:underline border border-gray-400 rounded-md p-2"
                :class="listAllBlogs ? 'text-primary-600' : 'text-white'">
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
          <router-link to="/blog" class="inline-flex items-center px-8 py-3 text-lg font-semibold border rounded text-white bg-indigo-800 hover:scale-110 transition-transform duration-300">
            See All Blog Posts
            <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </router-link>
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
