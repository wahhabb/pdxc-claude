<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&display=swap" rel="stylesheet">

	<!-- Default meta tags (can be overridden by individual pages) -->
	<meta name="robots" content="index, follow" />
	<meta name="author" content="PDX Commons" />
	<meta property="og:site_name" content="PDX Commons" />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>
<Navigation />
<main id="main-content">
	{@render children()}
</main>
<Footer />
