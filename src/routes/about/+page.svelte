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
	<title>About PDX Commons - Senior Cohousing in Portland, Oregon</title>
	<meta
		name="description"
		content="Learn about PDX Commons, a 55+ cohousing community boldly choosing to build the future we want in Portland, Oregon."
	/>
	<meta property="og:title" content="About PDX Commons - Senior Cohousing in Portland, Oregon" />
	<meta property="og:description" content="Learn about PDX Commons, a 55+ cohousing community boldly choosing to build the future we want in Portland, Oregon." />
	<meta property="og:image" content="/images/about/PDXC-sign-e1713805920331.jpeg" />
	<meta property="og:url" content="https://www.pdxcommons.com/about" />
</svelte:head>

<!-- Full-width header image -->
<div class="header-image-wrapper">
	<img
		src="/images/about/PDXC-sign-e1713805920331.jpeg"
		alt="PDX Commons sign"
		class="header-image"
	/>
</div>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>About PDX Commons</h1>
				<p class="tagline">WE ARE BUILDING THE FUTURE WE WANT</p>
			</div>

			<article class="page-content">
				<p>
					Many people wait too long before making changes that are necessary for the transition to
					the next phase of their lives. We are aware that we are fortunate enough to have choices,
					and are boldly choosing to take action now to have our living environment support our
					social, and environmental goals, and, at the risk of being too busy, retaining our sense
					of cooperative and collaborative usefulness and joyful exploration of life as long as
					possible.
				</p>

				<p>
					The need to plan for future physical challenges is obvious. But so is the need to for a
					sustainable community of friends and neighbors. The data is clear that highly social
					settings counter social isolation, which becomes common as we get older and has negative
					effects on our physical and mental health.
				</p>

				<img
					src="/images/about/maryconcert-1024x697.jpg"
					alt="Community members at concert"
					class="content-image"
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

	.content-image {
		width: 100%;
		height: auto;
		margin: var(--spacing-lg) 0;
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
