<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenu from '$lib/components/SidebarMenu.svelte';

	const sidebarItems = [
		{ label: 'About PDX Commons', href: '/about' },
		{ label: 'Our Values', href: '/our-values' },
		{ label: 'Neighborhood', href: '/neighborhood' },
		{ label: 'Contact', href: '/contact' }
	];

	let currentPath = $derived($page.url.pathname);
</script>

<svelte:head>
	<title>Neighborhood - PDX Commons</title>
	<meta
		name="description"
		content="Discover the vibrant Portland neighborhood where PDX Commons is located, close to parks, shops, restaurants, and public transit."
	/>
	<meta property="og:title" content="Neighborhood - PDX Commons" />
	<meta property="og:description" content="Discover the vibrant Portland neighborhood where PDX Commons is located, close to parks, shops, restaurants, and public transit." />
	<meta property="og:image" content="/images/about/Mural3.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/neighborhood" />
</svelte:head>

<!-- Full-width header image -->
<div class="header-image-wrapper">
	<img src="/images/about/Mural3.jpg" alt="Neighborhood mural" class="header-image" />
</div>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>Neighborhood</h1>
				<p class="tagline">LIVING IT UP IN OUR LATER YEARS</p>
			</div>

			<article class="page-content">
				<p>
					At PDX Commons, we're close to the action but not right in the middle of it. While near
					the Hawthorne and Belmont business and entertainment districts, our neighborhood is
					relatively quiet. Yet it's evolving, too, as more cafes and other businesses, as well as
					new multifamily housing, are developed each year.
				</p>

				<p>
					One of the most walkable, transit-accessible locations in Portland, PDX Commons is close
					to Laurelhurst and Mt. Tabor parks, grocery stores like Fred Meyer and New Seasons,
					restaurants, theaters, shops, cafes and much more.
				</p>

				<p>
					Right on our block we have the Horse Brass Pub, Slappy Cakes pancake house, Movie
					Madness, a food cart pod across the street, a trendy coffee shop, yoga and Pilates
					studios, a veterinarian, and more. The Belmont Library and the Eastside Powell's Books are
					not far away.
				</p>
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

	.sidebar-col {
		/* Sidebar styling handled by SidebarMenu component */
	}

	.main-col {
		min-width: 0; /* Prevents grid overflow */
	}

	.page-header {
		margin-bottom: var(--spacing-lg);
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

	.page-content p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-md);
		text-align: left;
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

		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-md);
		}
	}
</style>
