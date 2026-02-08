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
	<title>Important Documents - PDX Commons</title>
	<meta
		name="description"
		content="Important documents for PDX Commons including Declaration of Condominium Ownership, Bylaws, and House Agreements."
	/>
	<meta property="og:title" content="Important Documents - PDX Commons" />
	<meta property="og:description" content="Important documents for PDX Commons including Declaration of Condominium Ownership, Bylaws, and House Agreements." />
	<meta property="og:image" content="/images/resale/walkwaytopper.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/resale/documents" />
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
				<h1>Important Documents</h1>
			</div>

			<article class="page-content">
				<div class="document-section">
					<h2>Declaration of Condominium Ownership</h2>
					<p>Declaration of Condominium Ownership for PDX Commons Condominium, dated 7/25/17, registered with the Multnomah County Clerk</p>
				</div>

				<div class="document-section">
					<h2>Articles of Incorporation</h2>
					<p>Articles of Incorporation of PDX Commons Condominium Owners' Association, 3/17/17, 3 pages, filed with Oregon Secretary of State</p>
				</div>

				<div class="document-section">
					<h2>Other Important Documents</h2>
					<ul class="document-list">
						<li>Annual Operating Budget and Contingency Procedure</li>
						<li>Authorization to Borrow from Reserve Accounts</li>
						<li>Bylaws – PDX Cohousing</li>
						<li>Capital Reserve Assets Investment House Agreement</li>
						<li>Capitalization House Agreement</li>
						<li>Care House Agreement</li>
						<li>Collections Resolution</li>
						<li>Common Meal Procedure</li>
						<li>Conflict House Agreement</li>
						<li>Craft Exercise Room Procedure</li>
						<li>Decision Making Process and Governance Documents House Agreement</li>
						<li>Donation-Contribution House Agreement</li>
						<li>FINAL Reserve Study</li>
						<li>Firearms House Agreement</li>
						<li>Gift/Loan Procedure</li>
						<li>Guest Room House Agreement</li>
						<li>Guest Room Procedures</li>
						<li>Org Chart</li>
						<li>Organizational Structure House Agreement</li>
						<li>Participation House Agreement (revised 2023)</li>
						<li>Participation Procedure (new in 2023)</li>
						<li>Pathway to CoW</li>
						<li>People, Rights & Responsibilities House Agreement</li>
						<li>Pet House Agreement</li>
						<li>Private Unit Modifications</li>
						<li>Resale Procedure</li>
						<li>Resale of Private Units House Agreement</li>
						<li>Reserve Assets House Agreement</li>
						<li>Shared Meals House Agreement</li>
						<li>Smoking Vaping House Agreement</li>
						<li>Special Project Account Funding Procedure</li>
						<li>Treasury Procedure</li>
						<li>Vendor Contracting Requirements House Agreement</li>
						<li>Wait List Benefits House Agreement</li>
						<li>Waste Management House Agreement</li>
					</ul>
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
		margin-bottom: var(--spacing-lg);
	}

	.document-section {
		margin-bottom: var(--spacing-lg);
	}

	.document-section h2 {
		color: var(--color-text-primary);
		font-size: var(--font-size-lg);
		margin-bottom: var(--spacing-xs);
		text-transform: none;
		letter-spacing: normal;
	}

	.document-section p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin: 0;
	}

	.document-list {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-left: var(--spacing-lg);
	}

	.document-list li {
		margin-bottom: var(--spacing-xs);
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
