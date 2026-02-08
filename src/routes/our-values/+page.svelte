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
	<title>Our Values - PDX Commons</title>
	<meta
		name="description"
		content="Learn about the values that guide our community at PDX Commons, developed through a year-long collaborative process."
	/>
	<meta property="og:title" content="Our Values - PDX Commons" />
	<meta property="og:description" content="Learn about the values that guide our community at PDX Commons, developed through a year-long collaborative process." />
	<meta property="og:image" content="/images/about/VisionValues-Final_9-18-22-734x1024.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/our-values" />
</svelte:head>

<!-- Full-width header image -->
<div class="header-image-wrapper">
	<img src="/images/about/flagbanner.jpg" alt="PDX Commons flag banner" class="header-image" />
</div>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>Our Values</h1>
			</div>

			<article class="page-content">
				<p>
					A few years ago a group of us spent a whole year delving into trying to describe in
					writing the values that seemed to matter most to most of us. The process of deep dive
					discussion was rich and meaningful and brought us closer. We went through draft after
					draft, sharing each stage with the whole community. And so it became obvious that COMMUNITY
					itself was clearly our overriding value. Each part of the list below enlivens and helps us
					continue to build true community. Enjoy!
				</p>

				<img
					src="/images/about/VisionValues-Final_9-18-22-734x1024.jpg"
					alt="PDX Commons Vision and Values document"
					class="values-image"
				/>
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
		margin-bottom: var(--spacing-md);
	}

	.page-content p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-md);
		text-align: left;
	}

	.values-image {
		width: 100%;
		max-width: 600px;
		height: auto;
		margin: var(--spacing-lg) auto;
		display: block;
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
