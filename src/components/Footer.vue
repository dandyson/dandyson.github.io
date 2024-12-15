<script>
import cv from './../assets/cv.pdf';

export default {

  mounted() {
    document.getElementById('download-cv-footer').href = cv;
  },

}
</script>

<template>
	<footer class="px-4 py-8 px-20 bg-transparent">
		<div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 text-white">
			<ul class="flex flex-wrap space-x-4 sm:space-x-8">
				<li>
					<a class="grow-animation" target="_blank" rel="noopener noreferrer" href="mailto:dannydyson297@gmail.com">
						<font-awesome-icon :style="{ color: '#FFF' }" icon="fa-solid fa-envelope" size="2x" />
					</a>
				</li>
				<li>
					<a class="grow-animation" target="_blank" rel="noopener noreferrer" href="https://github.com/dandyson">
						<font-awesome-icon :style="{ color: '#FFF' }" icon="fa-brands fa-github" size="2x" />
					</a>
				</li>
				<li>
					<a class="grow-animation" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dandyson297/">
						<font-awesome-icon :style="{ color: '#FFF' }" icon="fa-brands fa-linkedin" size="2x" />
					</a>
				</li>
				<li>
					<a id="download-cv-footer" class="grow-animation" target="_blank" rel="noopener noreferrer" href="#">
						<font-awesome-icon :style="{ color: '#fff' }" icon="fa-solid fa-file-arrow-down" size="2x" />
					</a>
				</li>
			</ul>
		</div>
	</footer>
</template>