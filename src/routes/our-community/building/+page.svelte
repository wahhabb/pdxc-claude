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
	<title>Our Building - PDX Commons</title>
	<meta
		name="description"
		content="The PDX Commons building is a four-story contemporary condominium with 27 private living spaces and more than 5,000 square feet of common spaces."
	/>
	<meta property="og:title" content="Our Building - PDX Commons" />
	<meta property="og:description" content="The PDX Commons building is a four-story contemporary condominium with 27 private living spaces and more than 5,000 square feet of common spaces." />
	<meta property="og:image" content="/images/community/img_62a8dcb589d2b-1024x682.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/our-community/building" />
</svelte:head>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} heading="Our Community" />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>The PDX Commons Building</h1>
				<p class="tagline">CUSTOM DESIGNED BY US</p>
			</div>

			<article class="page-content">
				<img
					src="/images/community/img_62a8dcb589d2b-1024x682.jpg"
					alt="PDX Commons Building"
					class="content-image"
				/>

				<p>
					On a lot at 4262 SE Belmont St., we built a four-story contemporary condominium with 27
					private living spaces and more than 5,000 square feet of common spaces. Our core cohousing
					group collaborated with Works Progress Architecture to design the building and the
					individual units on the second, third and fourth floors. They include one-, two- and
					three-bedroom options of varying sizes and floor plans.
				</p>

				<p>
					The U-shaped building features external walkways on the third and fourth floors that allow
					us to look into a central courtyard on the second floor. The courtyard adjoins the Great
					Room, our large meeting and dining space with a commercial-style kitchen. We also have a
					rooftop deck complete with patio furniture and a vegetable garden.
				</p>

				<p>
					Street entry is on the first floor, where we have an elevator lobby, office, mailboxes,
					library and lounge area, a media and music room, a multipurpose room for exercise
					equipment and crafts, a tool room/workshop, and bike and laundry rooms.
				</p>

				<p>
					Two guest rooms on the first floor can accommodate visiting family and friends and
					perhaps, in the future, caregivers. The first floor also includes secure off-street
					parking for 24 cars and a backyard patio, flower garden and sauna.
				</p>

				<p>
					Our goal was to live fairly close to downtown, as most of us are city dwellers who enjoy
					city culture and the energy of urban living. Being close to public transit was also
					important. The TriMet #15 bus stops just down the street and goes straight downtown. A
					designated north-south bikeway crosses Belmont Street just a block away.
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
