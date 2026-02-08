<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import SidebarMenu from '$lib/components/SidebarMenu.svelte';

	const sidebarItems = [
		{ label: 'About PDX Commons', href: '/about' },
		{ label: 'Our Values', href: '/our-values' },
		{ label: 'Neighborhood', href: '/neighborhood' },
		{ label: 'Contact', href: '/contact' }
	];

	let currentPath = $derived($page.url.pathname);

	let { form } = $props();
	let submitting = $state(false);
</script>

<svelte:head>
	<title>Contact - PDX Commons</title>
	<meta
		name="description"
		content="Contact PDX Commons for questions about cohousing, joining our waitlist, or learning more about our community."
	/>
	<meta property="og:title" content="Contact - PDX Commons" />
	<meta property="og:description" content="Contact PDX Commons for questions about cohousing, joining our waitlist, or learning more about our community." />
	<meta property="og:image" content="/images/about/contactusheader.jpg" />
	<meta property="og:url" content="https://www.pdxcommons.com/contact" />
</svelte:head>

<!-- Full-width header image -->
<div class="header-image-wrapper">
	<img src="/images/about/contactusheader.jpg" alt="Contact Us" class="header-image" />
</div>

<div class="content-with-margins">
	<div class="page-container">
		<div class="sidebar-col">
			<SidebarMenu items={sidebarItems} {currentPath} />
		</div>

		<main class="main-col">
			<div class="page-header">
				<h1>PDX Commons</h1>
			</div>

			<article class="page-content">
				<div class="content-text">
					<p>
						If you have specific questions or comments about PDX Commons or cohousing in general,
						please use the contact form. Also let us know if you'd like to be on the mailing list
						to receive our newsletter, notice of special events, and ask specifically for
						information about joining the Wait Pool to receive early notice of an available home.
						Thanks for visiting our site! We're looking forward to hearing from you.
					</p>
				</div>

				{#if form?.success}
					<div class="success-message">
						<p>{form.message || 'Thank you for your message! We will get back to you soon.'}</p>
					</div>
				{:else}
					<form
						class="contact-form"
						method="POST"
						use:enhance={() => {
							submitting = true;
							return async ({ update }) => {
								await update();
								submitting = false;
							};
						}}
					>
						<!-- Honeypot field for spam protection -->
						<div class="honeypot" aria-hidden="true">
							<input type="text" name="website" tabindex="-1" autocomplete="off" />
						</div>

						<div class="form-row">
							<div class="form-group">
								<label for="firstName">
									First name <span class="required">*</span>
								</label>
								<input
									type="text"
									id="firstName"
									name="firstName"
									required
									value={form?.values?.firstName || ''}
									class:error={form?.errors?.firstName}
								/>
								{#if form?.errors?.firstName}
									<span class="error-message">{form.errors.firstName}</span>
								{/if}
							</div>

							<div class="form-group">
								<label for="lastName">
									Last name <span class="required">*</span>
								</label>
								<input
									type="text"
									id="lastName"
									name="lastName"
									required
									value={form?.values?.lastName || ''}
									class:error={form?.errors?.lastName}
								/>
								{#if form?.errors?.lastName}
									<span class="error-message">{form.errors.lastName}</span>
								{/if}
							</div>
						</div>

						<div class="form-group">
							<label for="email">
								Your email <span class="required">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={form?.values?.email || ''}
								class:error={form?.errors?.email}
							/>
							{#if form?.errors?.email}
								<span class="error-message">{form.errors.email}</span>
							{/if}
						</div>

						<div class="form-group">
							<label for="telephone">Telephone</label>
							<input
								type="tel"
								id="telephone"
								name="telephone"
								value={form?.values?.telephone || ''}
							/>
						</div>

						<div class="form-group">
							<label for="location">Where do you currently live?</label>
							<input
								type="text"
								id="location"
								name="location"
								value={form?.values?.location || ''}
							/>
						</div>

						<div class="form-group">
							<label for="referral">How did you hear about us?</label>
							<input
								type="text"
								id="referral"
								name="referral"
								value={form?.values?.referral || ''}
							/>
						</div>

						<div class="form-group checkbox-group">
							<label>
								<input
									type="checkbox"
									name="mailingList"
									value="yes"
									checked={form?.values?.mailingList || false}
								/>
								Add me to your mailing list
							</label>
						</div>

						<div class="form-group">
							<label for="message">Message</label>
							<textarea id="message" name="message" rows="6">{form?.values?.message || ''}</textarea>
						</div>

						<div class="form-actions">
							<button type="submit" class="submit-btn" disabled={submitting}>
								{submitting ? 'Sending...' : 'Send Message'}
							</button>
						</div>
					</form>
				{/if}
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

	.page-content {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: var(--spacing-xl);
	}

	.content-text p {
		color: var(--color-text-primary);
		line-height: 1.8;
		margin-bottom: var(--spacing-md);
		text-align: left;
	}

	.contact-form {
		/* Form takes up right column */
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-md);
	}

	.form-group {
		margin-bottom: var(--spacing-md);
	}

	.form-group label {
		display: block;
		margin-bottom: var(--spacing-xs);
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.required {
		color: #cc0000;
	}

	.form-group input[type='text'],
	.form-group input[type='email'],
	.form-group input[type='tel'],
	.form-group textarea {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--color-border);
		border-radius: 4px;
		font-family: var(--font-body);
		font-size: var(--font-size-base);
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--color-accent);
	}

	.checkbox-group label {
		display: flex;
		align-items: center;
		font-weight: normal;
	}

	.checkbox-group input[type='checkbox'] {
		width: auto;
		margin-right: var(--spacing-xs);
	}

	.form-actions {
		margin-top: var(--spacing-lg);
	}

	.submit-btn {
		background-color: var(--color-accent);
		color: white;
		padding: 0.75rem 2rem;
		border: none;
		border-radius: 4px;
		font-size: var(--font-size-base);
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s ease;
	}

	.submit-btn:hover:not(:disabled) {
		background-color: var(--color-accent-light);
	}

	.submit-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.honeypot {
		position: absolute;
		left: -9999px;
		opacity: 0;
		height: 0;
		overflow: hidden;
	}

	.success-message {
		background-color: #d4edda;
		border: 1px solid #c3e6cb;
		color: #155724;
		padding: var(--spacing-lg);
		border-radius: 4px;
	}

	.success-message p {
		margin: 0;
		font-size: var(--font-size-lg);
	}

	.error-message {
		color: #cc0000;
		font-size: 14px;
		margin-top: var(--spacing-xs);
		display: block;
	}

	input.error,
	textarea.error {
		border-color: #cc0000;
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

		.page-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
		}

		.form-row {
			grid-template-columns: 1fr;
		}

		.cta-container {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-md);
		}
	}
</style>
