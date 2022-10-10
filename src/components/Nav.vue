<template>
	<section id="home">
		<header class="py-6 px-10 sm:px-28 dark:bg-gray-800 dark:text-gray-100 bg-transparent">
			<div class="container flex justify-between h-16 mx-auto">
				<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" class="flex items-center p-2 grow-animation">
					<img src="#" alt="Logo" id="nav-portfolio-logo" class="w-12">
				</a>
				<ul class="items-stretch hidden space-x-3 md:flex">
					<li class="flex items-center">
						<a rel="noopener noreferrer" href="#about" class="flex items-center px-4 h-10 text-white underline-animation">About</a>
					</li>
					<li class="flex items-center">
						<a rel="noopener noreferrer" href="#portfolio" class="flex items-center px-4 h-10 text-white underline-animation">Portfolio</a>
					</li>
					<li class="flex items-center">
						<a rel="noopener noreferrer" href="#contact" class="flex items-center px-4 h-10 dark:text-violet-400 dark:border-violet-400 text-white underline-animation">Contact</a>
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
				<ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					<li>
						<a href="#about" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">About</a>
					</li>
					<li>
						<a href="#portfolio" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
					</li>
					<li>
						<a href="#contact" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import portfolioLogo from './../assets/portfolio-logo.png';

export default {
	data() {
		return {
			active: false,
		}
	},

	mounted() {
		document.getElementById('nav-portfolio-logo').src = portfolioLogo;
	}
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