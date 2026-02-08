<script lang="ts">
	import { onMount } from 'svelte';

	interface Slide {
		src: string;
		alt: string;
	}

	let { slides }: { slides: Slide[] } = $props();

	let currentSlide = $state(0);
	let isAutoPlaying = $state(true);
	let autoPlayInterval: ReturnType<typeof setInterval>;

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	function goToSlide(index: number) {
		currentSlide = index;
		resetAutoPlay();
	}

	function startAutoPlay() {
		if (!isAutoPlaying) return;
		autoPlayInterval = setInterval(() => {
			nextSlide();
		}, 5000); // Change slide every 5 seconds
	}

	function stopAutoPlay() {
		if (autoPlayInterval) {
			clearInterval(autoPlayInterval);
		}
	}

	function resetAutoPlay() {
		stopAutoPlay();
		if (isAutoPlaying) {
			startAutoPlay();
		}
	}

	function handlePrevClick() {
		prevSlide();
		resetAutoPlay();
	}

	function handleNextClick() {
		nextSlide();
		resetAutoPlay();
	}

	onMount(() => {
		startAutoPlay();

		return () => {
			stopAutoPlay();
		};
	});
</script>

<div class="hero-carousel" role="region" aria-label="Image carousel" aria-roledescription="carousel">
	<div class="carousel-container">
		<!-- Slides -->
		<div class="slides" aria-live="polite">
			{#each slides as slide, index}
				<div
					class="slide"
					class:active={currentSlide === index}
					role="group"
					aria-roledescription="slide"
					aria-label="Slide {index + 1} of {slides.length}"
					aria-hidden={currentSlide !== index}
				>
					<img
							src={slide.src}
							alt={slide.alt}
							loading={index === 0 ? 'eager' : 'lazy'}
						/>
				</div>
			{/each}
		</div>

		<!-- Navigation Arrows -->
		<button class="carousel-btn prev" onclick={handlePrevClick} aria-label="Go to previous slide">
			<span aria-hidden="true">‹</span>
		</button>
		<button class="carousel-btn next" onclick={handleNextClick} aria-label="Go to next slide">
			<span aria-hidden="true">›</span>
		</button>

		<!-- Pagination Indicators -->
		<div class="pagination" role="tablist" aria-label="Carousel slides">
			{#each slides as _, index}
				<button
					class="pagination-dot"
					class:active={currentSlide === index}
					onclick={() => goToSlide(index)}
					aria-label="Go to slide {index + 1}"
					aria-selected={currentSlide === index}
					role="tab"
				></button>
			{/each}
		</div>
	</div>
</div>

<style>
	.hero-carousel {
		position: relative;
		width: 100%;
		height: 500px;
		overflow: hidden;
		background-color: var(--color-bg-darker);
	}

	.carousel-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.slides {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.slide.active {
		opacity: 1;
	}

	.slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Navigation Arrows */
	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: rgba(0, 0, 0, 0.5);
		color: var(--color-text-primary);
		border: none;
		font-size: 3rem;
		width: 50px;
		height: 50px;
		cursor: pointer;
		z-index: 10;
		transition: background-color 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1;
	}

	.carousel-btn:hover {
		background-color: rgba(0, 0, 0, 0.7);
	}

	.carousel-btn.prev {
		left: 1rem;
	}

	.carousel-btn.next {
		right: 1rem;
	}

	/* Pagination */
	.pagination {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;
		z-index: 10;
	}

	.pagination-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.5);
		border: none;
		cursor: pointer;
		transition: background-color 0.3s ease, transform 0.3s ease;
	}

	.pagination-dot:hover {
		background-color: rgba(255, 255, 255, 0.8);
		transform: scale(1.2);
	}

	.pagination-dot.active {
		background-color: var(--color-text-primary);
		transform: scale(1.3);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-carousel {
			height: 350px;
		}

		.carousel-btn {
			font-size: 2rem;
			width: 40px;
			height: 40px;
		}
	}

	@media (max-width: 480px) {
		.hero-carousel {
			height: 250px;
		}
	}
</style>
