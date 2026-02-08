<script lang="ts">
	import HeroCarousel from '$lib/components/HeroCarousel.svelte';
	import Gallery from '$lib/components/Gallery.svelte';

	const heroSlides = [
		{
			src: '/images/hero/firepit.jpg',
			alt: 'PDX Commons community gathering around firepit'
		},
		{
			src: '/images/hero/centercourtyard.jpg',
			alt: 'Central courtyard at PDX Commons'
		},
		{
			src: '/images/hero/danceparty2.jpg',
			alt: 'Community dance party'
		},
		{
			src: '/images/hero/enjoyingfoodcourt2.jpg',
			alt: 'Residents enjoying the food court'
		},
		{
			src: '/images/hero/DSC_6895.jpg',
			alt: 'PDX Commons building exterior'
		},
		{
			src: '/images/hero/1_groupphoto4x5at300dpi.jpg',
			alt: 'PDX Commons community group photo'
		}
	];

	const galleryImages = [
		{ src: '/images/gallery/herbs-600x400-1.jpg', alt: 'Herb garden' },
		{ src: '/images/gallery/fixingbikes-600x400-1.jpg', alt: 'Community members fixing bikes' },
		{ src: '/images/gallery/artpiece.jpg', alt: 'Community art piece' },
		{ src: '/images/gallery/lewwithbeerinfoodcourt-copy.jpg', alt: 'Resident in food court' },
		{ src: '/images/gallery/tomclaudette-kitchen.jpg', alt: 'Community kitchen' },
		{ src: '/images/gallery/hummingbird-nest.jpg', alt: 'Hummingbird nest' },
		{ src: '/images/gallery/Michael-Cynthia.jpg', alt: 'Community members' },
		{ src: '/images/gallery/anotherparty-copy.jpg', alt: 'Community party' },
		{ src: '/images/gallery/flowergarden-copy.jpg', alt: 'Flower garden' },
		{ src: '/images/gallery/sunset.jpg', alt: 'Sunset view' },
		{ src: '/images/gallery/DSC_6843-1024x683.jpg', alt: 'Building interior' },
		{ src: '/images/gallery/livingroonm.jpg', alt: 'Living room space' },
		{ src: '/images/gallery/blacklivesmatter2.jpg', alt: 'Black Lives Matter sign' },
		{ src: '/images/gallery/apartmentcats-copy.jpg', alt: 'Resident cats' },
		{ src: '/images/gallery/covidpartyonroof.jpg', alt: 'Rooftop gathering' },
		{ src: '/images/gallery/jimonguitar.jpg', alt: 'Resident playing guitar' },
		{ src: '/images/gallery/Annie-CovidPinata-copy.jpg', alt: 'Community celebration' }
	];
</script>

<svelte:head>
	<title>PDX Commons - 55+ Cohousing Community in Portland, Oregon</title>
	<meta
		name="description"
		content="PDX Commons is a 55+ community of adventurous adults who choose to explore aging together in a vibrant urban space in Portland, Oregon."
	/>
	<meta property="og:title" content="PDX Commons - 55+ Cohousing Community in Portland, Oregon" />
	<meta property="og:description" content="PDX Commons is a 55+ community of adventurous adults who choose to explore aging together in a vibrant urban space in Portland, Oregon." />
	<meta property="og:image" content="/images/hero/1_groupphoto4x5at300dpi.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/" />
</svelte:head>

<div class="content-with-margins">
	<h1 class="page-title">PDX Commons Senior Cohousing</h1>
</div>

<HeroCarousel slides={heroSlides} />

<!-- Welcome Section -->
<div class="content-with-margins">
	<div class="welcome-section section">
		<div class="container">
			<div class="welcome-content">
				<h2>Welcome to PDX Commons</h2>
				<p>
					PDX Commons is a 55+ community of adventurous adults who choose to explore aging together
					in a vibrant urban space, with respect, compassion, laughter, and friendship. Our
					four-story building in Portland, OR, affectionately referred to by its airport code, PDX,
					combines individual private condominiums, with lots of shared space for socializing,
					community meals, gatherings of many kinds, and places to meet for our co-housing community
					business. We share a common ethic of inclusion, and cooperation for the greater good.
				</p>
				<h2 class="facebook-link">
					<a href="https://www.facebook.com/pdxcommons/" target="_blank" rel="noopener noreferrer"
						>Join us on Facebook.</a
					>
				</h2>
				<h2 class="facebook-link">
					<a
						href="https://www.youtube.com/watch?v=8Krud2r5yFE"
						target="_blank"
						rel="noopener noreferrer">Meet some of us in our community video! </a
					>
				</h2>
			</div>
		</div>
	</div>
</div>

<!-- Urban Cohousing Section -->
<div class="urban-cohousing-section">
	<div class="hero-banner">
		<div class="overlay">
			<h2 class="main-heading">Urban Cohousing</h2>
			<p class="tagline">A collaborative community of supportive friends</p>
		</div>
	</div>

	<div class="who-we-are">
		<div class="container">
			<h2>Who We Are</h2>
			<p>
				We are 35 adults ranging in age from our 60s to our 80s. About half of our households
				consist of couples and the other half singles. While we are an adult community, it's
				common to see adult children and grandchildren visiting our homes.
			</p>
			<p>
				We were a community before we were a building. Together we worked with a professional
				development team and general contractor to design and construct our common home. We are now
				the owners of this building, and we run the community ourselves. Decisions are made using a
				consensus model. This allows every voice to be heard, valued and appreciated.
			</p>
		</div>
	</div>
</div>

<!-- Gallery Section -->
<div class="content-with-margins">
	<section class="gallery-section section">
		<div class="container">
			<Gallery images={galleryImages} />
		</div>
	</section>
</div>

<style>
	.page-title {
		text-align: center;
		margin: var(--spacing-lg) 0;
		color: var(--color-text-primary);
	}

	/* Welcome Section Styles */
	.welcome-section {
		padding-bottom: 0;
		background-color: var(--color-bg-light);
	}

	.welcome-content {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.welcome-content h2 {
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-md);
	}

	.welcome-content p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-sm);
		text-align: left;
	}

	.facebook-link {
		margin-top: var(--spacing-md);
	}

	.facebook-link a {
		color: #0066cc;
		font-weight: 600;
		text-align: center;
	}

	h2.facebook-link {
		text-transform: none;
	}

	/* Urban Cohousing Section Styles */
	.urban-cohousing-section {
		margin: var(--spacing-xl) 0;
	}

	.hero-banner {
		position: relative;
		width: 100%;
		height: 400px;
		background-image: url('/images/gallery/herbs-600x400-1.jpg');
		background-size: cover;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.overlay {
		text-align: center;
		color: #ffffff;
		padding: var(--spacing-md);
		background-color: rgba(0, 0, 0, 0.4);
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.main-heading {
		font-size: var(--font-size-3xl);
		text-transform: uppercase;
		letter-spacing: 2.5px;
		margin-bottom: var(--spacing-sm);
		color: #ffffff;
	}

	.tagline {
		font-size: var(--font-size-xl);
		font-style: italic;
		color: #ffffff;
	}

	.who-we-are {
		padding: var(--spacing-xl) 0;
		background-color: var(--color-bg-light);
	}

	.who-we-are .container {
		margin-left: var(--spacing-md);
		margin-right: var(--spacing-md);
	}

	.who-we-are h2 {
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-md);
		text-align: center;
	}

	.who-we-are p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-md);
		text-align: left;
	}


	/* Responsive */
	@media (min-width: 768px) {
		.who-we-are .container {
			margin-left: var(--spacing-lg);
			margin-right: var(--spacing-lg);
		}
	}

	@media (max-width: 768px) {
		.hero-banner {
			height: 300px;
		}

		.main-heading {
			font-size: var(--font-size-2xl);
		}

		.tagline {
			font-size: var(--font-size-lg);
		}
	}
</style>
