<script lang="ts">
	interface GalleryImage {
		src: string;
		alt: string;
	}

	let { images }: { images: GalleryImage[] } = $props();
</script>

<div class="gallery" role="region" aria-label="Photo gallery">
	{#each images as image}
		<div class="gallery-item">
			<img src={image.src} alt={image.alt} loading="lazy" />
		</div>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: var(--spacing-sm);
		padding: var(--spacing-md) 0;
	}

	.gallery-item {
		position: relative;
		overflow: hidden;
		aspect-ratio: 3 / 2;
		background-color: var(--color-bg-darker);
		border-radius: 4px;
	}

	.gallery-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.gallery-item:hover img {
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		.gallery {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			gap: var(--spacing-xs);
		}
	}

	@media (max-width: 480px) {
		.gallery {
			grid-template-columns: 1fr;
		}
	}
</style>
