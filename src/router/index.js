import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Home.vue';
import About from '../pages/About.vue';
import Portfolio from '../pages/Portfolio.vue';
import Blog from '../pages/Blog.vue';
import BlogPost from '../pages/BlogPost.vue';
import Contact from '../pages/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade' },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { transition: 'fade' },
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: { transition: 'fade' },
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: { transition: 'fade' },
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    meta: { transition: 'fade' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { transition: 'fade' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
