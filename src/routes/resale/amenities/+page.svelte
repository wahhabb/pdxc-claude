<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenu from '$lib/components/SidebarMenu.svelte';

	const sidebarItems = [
		{ label: 'Amenities', href: '/resale/amenities' },
		{ label: 'Resale', href: '/resale/listings' },
		{ label: 'Documents', href: '/resale/documents' }
	];

	let currentPath = $derived($page.url.pathname);
</script>

<svelte:head>
	<title>Amenities - PDX Commons</title>
	<meta
		name="description"
		content="PDX Commons is more than just a condominium building. We are a family of supportive friends in a home with great amenities for all to use."
	/>
	<meta property="og:title" content="Amenities - PDX Commons" />
	<meta property="og:description" content="PDX Commons is more than just a condominium building. We are a family of supportive friends in a home with great amenities for all to use." />
	<meta property="og:image" content="/images/resale/Courtyard.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/resale/amenities" />
</svelte:head>

<div class="header-image-wrapper">
	<img src="/images/resale/walkwaytopper.jpg" alt="PDX Commons walkway" class="header-image" />
</div>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} heading="Resale" />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>Amenities</h1>
				<p class="tagline">MORE THAN JUST A HOUSING COMPLEX</p>
			</div>

			<article class="page-content">
				<p class="intro">
					PDX Commons is more than just a condominium building. We are a family of supportive friends in a home with great amenities for all to use. Featuring an interior courtyard, rooftop deck, backyard patio and large common spaces for meetings, meals and social events, our building is an ideal environment for nurturing community and friendship.
				</p>

				<div class="amenities-grid">
					<div class="amenity">
						<img src="/images/resale/IMG_7278-1024x679.jpg" alt="Rooftop deck with garden and seating" class="amenity-image" />
						<h2>Rooftop Deck</h2>
						<p class="amenity-tagline">OUTDOOR LIVING with a bird's eye view</p>
						<p>Here we enjoy meals, parties, picking fresh organic vegetables from the garden, quiet moments and gorgeous sunsets.</p>
					</div>

					<div class="amenity">
						<img src="/images/resale/Courtyard.jpg" alt="Interior courtyard with plants" class="amenity-image" />
						<h2>The Courtyard</h2>
						<p class="amenity-tagline">FAIR WEATHER OASIS</p>
						<p>On the second floor, surrounded by our U-shaped building, the plant-studded courtyard is a place for outdoor meals, parties, happy hour by the fire pit and quiet conversations.</p>
					</div>

					<div class="amenity">
						<img src="/images/resale/img_62a8dca7abcb7.jpg" alt="The Great Room dining and meeting space" class="amenity-image" />
						<h2>The Great Room</h2>
						<p class="amenity-tagline">A SPACE FOR MEALS & GATHERINGS</p>
						<p>Our dining/meeting room can seat up to 50 people. Its sliding glass doors open to the courtyard, and a commercial-style kitchen makes preparing meals easy.</p>
					</div>

					<div class="amenity">
						<img src="/images/resale/The-Workout-space-pdxcommons.jpg" alt="Crafts and workout space" class="amenity-image" />
						<h2>Crafts & Workouts</h2>
						<p class="amenity-tagline">GET CREATIVE AND FIT</p>
						<p>This well-lighted space offers workout equipment and crafts tools and supplies, including a sewing machine.</p>
					</div>

					<div class="amenity">
						<img src="/images/resale/Living-room-pdxcommons.jpg" alt="Living room with fireplace" class="amenity-image" />
						<h2>The Living Room</h2>
						<p class="amenity-tagline">COMPLETE WITH LIBRARY</p>
						<p>This tastefully furnished space makes for great intimate meetings, social gatherings and quiet times. It includes a fireplace and wet bar.</p>
					</div>

					<div class="amenity">
						<img src="/images/resale/Media-Room-PDXCommons.jpg" alt="Media room with large TV" class="amenity-image" />
						<h2>The Media Room</h2>
						<p class="amenity-tagline">MOVIES, MUSIC & MORE</p>
						<p>The media room boasts a giant TV screen and upholstered leather seating for small groups. It's also ideal for playing music and meditation.</p>
					</div>
				</div>
			</article>
		</main>
	</div>
</div>

<!-- Full-width CTA section -->
<div class="cta-wrapper">
	<div class="cta-separator"></div>
	<div class="cta-section">
		<div class="cta-container">
			<h2>A new way to live for seniors.</h2>
			<p>
				<a href="/our-community/members" class="cta-link">See our members ⭢</a>
			</p>
		</div>
	</div>
</div>

<style>
	.header-image-wrapper {
		width: 100%;
		margin-top: 1px;
	}

	.header-image {
		width: 100%;
		height: auto;
		display: block;
	}

	.page-container {
		display: grid;
		grid-template-columns: 250px 1fr;
		gap: var(--spacing-lg);
		margin-top: var(--spacing-lg);
	}

	.main-col {
		min-width: 0;
	}

	h1 {
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-sm);
	}

	.tagline {
		font-size: var(--font-size-lg);
		font-weight: 600;
		letter-spacing: 2px;
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-md);
	}

	.intro {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-xl);
	}

	.amenities-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-lg);
	}

	.amenity {
		display: flex;
		flex-direction: column;
	}

	.amenity-image {
		width: 100%;
		height: auto;
		margin-bottom: var(--spacing-sm);
	}

	.amenity h2 {
		color: var(--color-text-primary);
		font-size: var(--font-size-lg);
		margin-bottom: var(--spacing-xs);
		text-transform: none;
		letter-spacing: normal;
	}

	.amenity-tagline {
		font-size: 14px;
		font-weight: 600;
		letter-spacing: 1.5px;
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-xs);
	}

	.amenity p:last-child {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin: 0;
	}

	.cta-wrapper {
		width: 100%;
		margin-top: 0;
	}

	.cta-separator {
		width: 100%;
		height: 1px;
		background-color: var(--color-border);
	}

	.cta-section {
		background-color: #324544;
		padding: var(--spacing-xl) 0;
		color: white;
	}

	.cta-container {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--spacing-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.cta-section h2 {
		color: white;
		margin: 0;
		text-transform: none;
		letter-spacing: normal;
	}

	.cta-section p {
		margin: 0;
	}

	.cta-link {
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: white;
		text-decoration: none;
		white-space: nowrap;
	}

	.cta-link:hover {
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.page-container {
			grid-template-columns: 1fr;
			gap: 0;
		}

		.sidebar-col {
			margin-bottom: var(--spacing-md);
		}

		.amenities-grid {
			grid-template-columns: 1fr;
		}

		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-md);
		}
	}
</style>
