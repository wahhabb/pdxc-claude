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
	<title>Resale - PDX Commons</title>
	<meta
		name="description"
		content="Information about purchasing a home at PDX Commons when units become available."
	/>
	<meta property="og:title" content="Resale - PDX Commons" />
	<meta property="og:description" content="Information about purchasing a home at PDX Commons when units become available." />
	<meta property="og:image" content="/images/resale/walkwaytopper.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/resale/listings" />
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
				<h1>Resale</h1>
				<p class="tagline">WHEN WE HAVE AN OPENING</p>
			</div>

			<article class="page-content">
				<p>
					Our <a href="/faqs">FAQ page</a> is the place to start if you're interested in a home at PDX Commons. It answers many questions you may have.
				</p>

				<p>
					When we have a home for sale at PDX Commons, it is offered first to the HOA (community), current owners, and Wait Pool members before it can go on the open market.
				</p>

				<p>
					To have the best chance of bidding on an available unit, it helps to become a member of our Wait Pool. You can request to be added to the list by using the form on our <a href="/contact">Contact page</a>.
				</p>

				<p>
					Otherwise, you can simply check the website periodically and/or subscribe to our newsletter via the contact form.
				</p>

				<p>
					Once a home is available on the open market, interested parties may contact the broker (if the seller has hired one) or the seller directly, if no broker is involved.
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

	.page-content p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-md);
	}

	.page-content a {
		color: var(--color-link);
	}

	.page-content a:hover {
		text-decoration: underline;
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
