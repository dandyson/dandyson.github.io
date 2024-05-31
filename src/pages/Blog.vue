<template>
    <div class="min-h-screen">
        <BackgroundCircles customClasses="min-h-screen">
            <Nav />
            <BlogList title="Blog" listAllBlogs data-aos="fade-up" data-aos-offset="50"
                data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-mirror="true" />
                <Footer />
        </BackgroundCircles>

    </div>
</template>

<script setup>
import Nav from '../components/Nav.vue'
import BackgroundCircles from '../components/BackgroundCircles.vue'
import BlogList from '../components/BlogList.vue'
import Footer from '../components/Footer.vue'
</script>