<template>
	<section>
		<header class="py-6 px-10 sm:px-28 bg-transparent">
			<div class="container flex justify-between h-16 mx-auto">
				<router-link to="/" rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2 grow-animation">
					<img src="../assets/portfolio-logo.png" alt="Logo" id="nav-portfolio-logo" class="w-12">
				</router-link>
				<ul class="items-stretch hidden space-x-3 md:flex">
					<li class="flex items-center">
						<router-link to="/about" class="flex items-center px-4 h-10 text-white underline-animation">About</router-link>
					</li>
					<li class="flex items-center">
						<router-link to="/portfolio" class="flex items-center px-4 h-10 text-white underline-animation">Portfolio</router-link>
					</li>
					<li class="flex items-center">
						<router-link to="/blog" class="flex items-center px-4 h-10 text-white underline-animation">Blog</router-link>
					</li>
					<li class="flex items-center">
						<router-link to="/contact" class="flex items-center px-4 h-10 text-white underline-animation">Contact</router-link>
					</li>
				</ul>
				<button class="flex justify-end p-4 md:hidden" @click="active = !active">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</header>

		<div class="mobile-menu flex justify-center">	
			<div :class="{'show-menu': active}" class="absolute w-4/5 block md:hidden md:w-auto top-[-16rem]" id="navbar-default">
				<ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
					<li>
						<router-link to="/about" :class="{ 'text-white bg-blue-700': $route.path === '/about' }" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0" aria-current="page">About</router-link>
					</li>
					<li>
						<router-link to="/portfolio" :class="{ 'text-white bg-blue-700': $route.path === '/portfolio' }" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0">Portfolio</router-link>
					</li>
					<li>
						<router-link to="/blog" :class="{ 'text-white bg-blue-700': $route.path === '/blog' }" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0">Blog</router-link>
					</li>
					<li>
						<router-link to="/contact" :class="{ 'text-white bg-blue-700': $route.path === '/contact' }" class="block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0">Contact</router-link>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import portfolioLogo from '../assets/portfolio-logo.png';

export default {
	data() {
		return {
			active: false,
		}
	},
}
</script>

<style scoped>
	#navbar-default {
		transition: all .5s ease-in-out;
	}

	.show-menu {
		top: 5.5rem;
	}
</style>