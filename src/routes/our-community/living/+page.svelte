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
	<title>Living in Cohousing - PDX Commons</title>
	<meta
		name="description"
		content="Learn about the principles of respect and responsibility that guide community life at PDX Commons."
	/>
	<meta property="og:title" content="Living in Cohousing - PDX Commons" />
	<meta property="og:description" content="Learn about the principles of respect and responsibility that guide community life at PDX Commons." />
	<meta property="og:image" content="/images/community/danceparty-1024x537.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/our-community/living" />
</svelte:head>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} heading="Our Community" />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>Living in Cohousing</h1>
			</div>

			<article class="page-content">
				<img
					src="/images/community/danceparty-1024x537.jpg"
					alt="Summer Dance Party"
					class="content-image"
				/>

				<p>
					We expect all members, including all those in their households, to follow the principles
					of respect and responsibility adapted from <em>Creating a Life Together</em> by Diane Leaf
					Christian (2003, New Society Publishers, B.C. Canada).
				</p>

				<h2>Seven Areas of Respect</h2>
				<ul>
					<li>Physical respect (personal boundaries, no violence)</li>
					<li>Emotional respect (respect feelings)</li>
					<li>Verbal respect (honesty, listening)</li>
					<li>Territorial respect (privacy, solitude, quiet)</li>
					<li>Material respect (care for property)</li>
					<li>Respect for diversity (age, gender, race, orientation, spirituality, abilities)</li>
					<li>Respect for community (structure and decision-making)</li>
				</ul>

				<h2>Seven Areas of Responsibility</h2>
				<p>Members should:</p>
				<ul>
					<li>Attend meetings</li>
					<li>Communicate</li>
					<li>Contribute time/energy</li>
					<li>Serve on committees</li>
					<li>Fulfill financial obligations</li>
					<li>Inform about extended guests/changes</li>
					<li>Report violations</li>
				</ul>

				<h2>Who Thrives in This Setting</h2>
				<p>Those who thrive in cohousing are:</p>
				<ul>
					<li>Basically fulfilled</li>
					<li>Open-minded</li>
					<li>Connected to others</li>
					<li>Willing to follow group processes</li>
					<li>Willing to speak up and listen</li>
					<li>Happy, positive and optimistic</li>
				</ul>
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

	h2 {
		color: var(--color-text-primary);
		font-size: var(--font-size-lg);
		margin-top: var(--spacing-lg);
		margin-bottom: var(--spacing-sm);
	}

	.page-content p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-md);
	}

	.page-content ul {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-md);
		margin-left: var(--spacing-lg);
	}

	.page-content li {
		margin-bottom: var(--spacing-xs);
	}

	.content-image {
		width: 100%;
		height: auto;
		margin-bottom: var(--spacing-lg);
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
