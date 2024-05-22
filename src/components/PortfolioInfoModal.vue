<template>
    <div>
        <!-- Modal Button -->
        <button @click="isVisible = true"
            class="inline-flex self-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 md:mb-0 md:mr-2"
            type="button">
            <font-awesome-icon :style="{ color: '#FFF' }" icon="fa-solid fa-circle-info" size="1x" />
            <span class="ml-2">Info</span>
        </button>
        <!-- End Modal Button -->

        <!-- Extra Large Modal -->
        <transition name="modal-fade">
            <div v-if="isVisible" tabindex="-1"
                class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full text-white bg-black/50">
                <div class="relative w-full max-w-7xl max-h-full mx-auto">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow bg-gradient-to-b from-indigo-900 to-gray-900 text-left">
                        <!-- Modal header -->
                        <div class="grid grid-cols-3 items-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-4xl font-medium text-gray-900 dark:text-white justify-self-start">
                                {{ mainTitle }}
                            </h3>

                            <div class="flex justify-center gap-x-2">
                                <a v-if="githubUrl !== undefined" :href="githubUrl" target="_blank"
                                    class="hidden md:flex inline-flex self-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2 md:mb-0">
                                    <font-awesome-icon class="lg:mr-3" :style="{ color: '#fff' }" icon="fa-brands fa-github" size="2x" />
                                    <span class="hidden lg:flex ">See Code</span>
                                </a>
                                <a v-if="liveUrl !== undefined" :href="liveUrl" target="_blank"
                                    class="hidden md:flex inline-flex self-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <font-awesome-icon class="lg:mr-3" :style="{ color: '#fff' }" icon="fa-solid fa-globe" size="2x" />
                                    <span class="hidden lg:flex ">See Live</span>
                                </a>
                            </div>

                            <button type="button"
                                class="justify-self-end text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="close">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>

                        <!-- Modal body -->
                        <div class="p-4 md:p-5 space-y-4">
                            <div class="container max-w-xl p-6 py-12 mx-auto space-y-16 lg:px-8 lg:max-w-7xl">
                                <div>
                                    <h2 class="text-3xl font-bold tracking-tight text-center sm:text-5xl">Project:
                                        {{ mainTitle }} </h2>
                                    <p class="max-w-3xl mx-auto mt-4 text-xl text-center">{{ mainDescription }}</p>
                                </div>
                                <div class="flex justify-center px-12">
                                    <img :src="mainImage" alt="" srcset="">
                                </div>
                                <!-- Features -->
                                <div v-if="infoContent">
                                    <div class="px-4 lg:px-12 pt-12 pb-16 lg:w-3/4">
                                        <div>
                                            <h3 class="text-2xl font-bold tracking-tight sm:text-3xl">{{ infoContent.title }}</h3>
                                            <p class="mt-3 text-lg">{{ infoContent.desc }}</p>
                                        </div>
                                    </div>
                                    <div v-for="(feature, index) in infoContent.points" :key="index" class="my-24 lg:my-12">
                                        <div v-if="index % 2 === 0" class="grid lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center px-4 lg:px-12">
                                            <div class="space-y-12 lg:order-1">
                                                <div class="flex">
                                                    <div class="ml-4">
                                                        <div class="flex items-center">
                                                            <font-awesome-icon class="mr-3" :style="{ color: '#fff' }" :icon="feature.icon" size="2x" />
                                                            <h4 class="text-lg font-medium leading-6">{{ feature.title }}</h4>
                                                        </div>
                                                        <p class="mt-2">{{ feature.desc }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div aria-hidden="true" class="mt-10 lg:mt-0 lg:order-2">
                                                <img :src="feature.image" alt="Servers" id="about-1" class="mx-auto rounded-lg">
                                            </div>
                                        </div>
                                        <div v-else class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center px-4 lg:px-12">
                                            <div aria-hidden="true" class="mt-10 lg:mt-0 lg:order-1">
                                                <img :src="feature.image" alt="Servers" id="about-1" class="mx-auto rounded-lg">
                                            </div>
                                            <div class="space-y-12 lg:order-2">
                                                <div class="flex">
                                                    <div class="ml-4">
                                                        <div class="flex items-center">
                                                            <font-awesome-icon class="mr-3" :style="{ color: '#fff' }" :icon="feature.icon" size="2x" />
                                                            <h4 class="text-lg font-medium leading-6">{{ feature.title }}</h4>
                                                        </div>
                                                        <p class="mt-2">{{ feature.desc }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Modal footer -->
                                <div class="flex items-center justify-between p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <div class="flex">
                                        <a v-if="githubUrl!== undefined" :href="githubUrl" target="_blank"
                                            class="inline-flex self-center items-center px-3 py-2 md:mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 lg:mr-2">
                                            <font-awesome-icon class="lg:mr-3" :style="{ color: '#fff' }" icon="fa-brands fa-github" size="2x" /> 
                                            <span class="hidden lg:flex ">See Code</span>
                                        </a>
                                        <a v-if="liveUrl!== undefined" :href="liveUrl" target="_blank"
                                            class="inline-flex self-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <font-awesome-icon class="lg:mr-3" :style="{ color: '#fff' }" icon="fa-solid fa-globe" size="2x" /> 
                                            <span class="hidden lg:flex ">See Live</span>
                                        </a>
                                    </div>

                                    <div class="flex ml-auto">
                                        <button type="button"
                                            class="flex inline-flex self-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            @click="close">
                                            <font-awesome-icon class="mr-2" :style="{ color: '#fff' }" icon="fa fa-close" size="2x" />
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        mainTitle: {
            type: String,
            required: true
        },
        mainDescription: {
            type: String,
            required: true
        },
        mainImage: {
            type: String,
            required: true
        },
        githubUrl: {
            type: String,
            required: false,
        },
        liveUrl: {
            type: String,
            required: false,
        },
        infoContent: {
            type: Object,
            required: false,
        }
    },

    data() {
        return {
            isVisible: false
        }
    },
    methods: {
        close() {
            this.isVisible = false;
        },
    },
}
</script>

<!-- TODO: Maybe a classic fade and overlay  -->
<style>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
