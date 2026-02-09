<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenu from '$lib/components/SidebarMenu.svelte';

	const sidebarItems = [
		{ label: 'Our Members', href: '/our-community/members' },
		{ label: 'Living in Cohousing', href: '/our-community/living' },
		{ label: 'Our Building', href: '/our-community/building' },
		{ label: 'Take our Tour', href: '/our-community/tour' }
	];

	let currentPath = $derived($page.url.pathname);
</script>

<svelte:head>
	<title>Take our Tour - PDX Commons</title>
	<meta
		name="description"
		content="See videos showing PDX Commons building and people."
	/>
	<meta property="og:title" content="Take our Tour - PDX Commons" />
	<meta property="og:description" content="See videos showing PDX Commons building and people. Schedule an in-person tour to experience our community." />
	<meta property="og:image" content="/images/hero/centercourtyard.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/our-community/tour" />
</svelte:head>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} heading="Our Community" />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>Take our Tour—Meet our Community</h1>
			</div>

			<article class="page-content">
				<div class="video-container">
					<iframe
						src="https://www.youtube.com/embed/ufX9pVEL9cI"
						title="PDX Commons"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>

				<div class="video-container">
					<iframe
						src="https://www.youtube.com/embed/8Krud2r5yFE"
						title="All About PDX Commons (2020 video)"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
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

	.video-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
		margin-bottom: var(--spacing-lg);
	}

	.video-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
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
