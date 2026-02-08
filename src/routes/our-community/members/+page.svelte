<script lang="ts">
	import { page } from '$app/stores';
	import SidebarMenu from '$lib/components/SidebarMenu.svelte';
	import { members } from './members-data';

	const sidebarItems = [
		{ label: 'Our Members', href: '/our-community/members' },
		{ label: 'Living in Cohousing', href: '/our-community/living' },
		{ label: 'Our Building', href: '/our-community/building' },
		{ label: 'Take our Tour', href: '/our-community/tour' }
	];

	let currentPath = $derived($page.url.pathname);
</script>

<svelte:head>
	<title>Our Members - PDX Commons</title>
	<meta
		name="description"
		content="Meet the members of PDX Commons, a diverse group of individuals who have chosen to live in community."
	/>
	<meta property="og:title" content="Our Members - PDX Commons" />
	<meta property="og:description" content="Meet the members of PDX Commons, a diverse group of individuals who have chosen to live in community." />
	<meta property="og:image" content="/images/hero/1_groupphoto4x5at300dpi.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/our-community/members" />
</svelte:head>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} heading="Our Community" />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>Our Members</h1>
			</div>

			<div class="members-columns">
				<div class="members-column">
					{#each members.slice(0, 12) as member}
						<div class="member-profile">
							<h2>{member.name}</h2>
							<div class="member-content">
								{#if member.images}
									<div class="member-photos-horizontal">
										{#each member.images as image}
											<img src={image} alt={member.name} class="member-photo" />
										{/each}
									</div>
									<p>{@html member.bio}</p>
								{:else}
									<img src={member.image} alt={member.name} class="member-photo float-{member.photoPosition}" />
									<p>{@html member.bio}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
				<div class="members-column">
					{#each members.slice(12) as member}
						<div class="member-profile">
							<h2>{member.name}</h2>
							<div class="member-content">
								{#if member.images}
									<div class="member-photos-horizontal">
										{#each member.images as image}
											<img src={image} alt={member.name} class="member-photo" />
										{/each}
									</div>
									<p>{@html member.bio}</p>
								{:else}
									<img src={member.image} alt={member.name} class="member-photo float-{member.photoPosition}" />
									<p>{@html member.bio}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
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

	.sidebar-col {
		/* Sidebar styling handled by SidebarMenu component */
	}

	.main-col {
		min-width: 0; /* Prevents grid overflow */
	}

	.page-header {
		margin-bottom: var(--spacing-xl);
	}

	h1 {
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-md);
	}

	.members-columns {
		display: flex;
		gap: var(--spacing-lg);
		align-items: flex-start;
	}

	.members-column {
		flex: 1;
	}

	.member-profile {
		margin-bottom: var(--spacing-xl);
	}

	.member-profile h2 {
		font-size: var(--font-size-xl);
		color: var(--color-text-primary);
		margin-bottom: 0;
		font-weight: 400;
	}

	.member-content {
		overflow: hidden; /* Clear float */
	}

	.member-photo {
		width: 149px;
		height: 225px;
		object-fit: cover;
		display: block;
	}

	.float-left {
		float: left;
		margin-right: var(--spacing-md);
		margin-bottom: var(--spacing-sm);
	}

	.float-right {
		float: right;
		margin-left: var(--spacing-md);
		margin-bottom: var(--spacing-sm);
	}

	.member-photos-horizontal {
		display: flex;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-sm);
	}

	.member-content p {
		color: var(--color-text-primary);
		font-size: 16px;
		line-height: 1.4em;
		margin: 0;
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

		.members-columns {
			flex-direction: column;
		}

		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-md);
		}
	}
</style>
