<script lang="ts">
	let mobileMenuOpen = $state(false);
	let activeDropdown = $state<string | null>(null);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function showDropdown(menu: string) {
		activeDropdown = menu;
	}

	function hideDropdown() {
		activeDropdown = null;
	}

	function closeMenus() {
		mobileMenuOpen = false;
		activeDropdown = null;
	}

	function toggleDropdown(menu: string) {
		activeDropdown = activeDropdown === menu ? null : menu;
	}

	const menuItems = [
		{
			label: 'About',
			children: [
				{ label: 'About PDX Commons', href: '/about' },
				{ label: 'Our Values', href: '/our-values' },
				{ label: 'Neighborhood', href: '/neighborhood' },
				{ label: 'Contact', href: '/contact' }
			]
		},
		{
			label: 'Our Community',
			children: [
				{ label: 'Members', href: '/our-community/members' },
				{ label: 'Living in Cohousing', href: '/our-community/living' },
				{ label: 'Building', href: '/our-community/building' },
				{ label: 'Tour', href: '/our-community/tour' }
			]
		},
		{
			label: 'FAQs',
			href: '/faqs'
		},
		{
			label: 'Resale',
			children: [
				{ label: 'Amenities', href: '/resale/amenities' },
				{ label: 'Resale', href: '/resale/listings' },
				{ label: 'Documents', href: '/resale/documents' }
			]
		},
		{
			label: 'Contact',
			href: '/contact'
		}
	];
</script>

<nav class="navigation" aria-label="Main navigation">
	<div class="nav-container">
		<div class="nav-brand">
			<a href="/" onclick={closeMenus}>PDX Commons</a>
		</div>

		<!-- Mobile hamburger button -->
		<button
			class="hamburger"
			aria-label="Toggle menu"
			aria-expanded={mobileMenuOpen}
			onclick={toggleMobileMenu}
		>
			<span></span>
			<span></span>
			<span></span>
		</button>

		<!-- Desktop Navigation -->
		<ul class="nav-menu desktop-menu">
			{#each menuItems as item}
				<li
					class="nav-item"
					onmouseenter={() => item.children && showDropdown(item.label)}
					onmouseleave={hideDropdown}
				>
					{#if item.children}
						<button
							class="nav-link dropdown-toggle"
							aria-haspopup="true"
							aria-expanded={activeDropdown === item.label}
						>
							{item.label}
							<span class="dropdown-arrow" aria-hidden="true">▼</span>
						</button>
						{#if activeDropdown === item.label}
							<ul class="dropdown-menu" role="menu">
								{#each item.children as child}
									<li role="none">
										<a href={child.href} class="dropdown-link" role="menuitem">
											{child.label}
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					{:else}
						<a href={item.href} class="nav-link">{item.label}</a>
					{/if}
				</li>
			{/each}
		</ul>

		<!-- Mobile Navigation -->
		<div class="mobile-menu" class:open={mobileMenuOpen}>
			<ul class="nav-menu-mobile">
				{#each menuItems as item}
					<li class="nav-item-mobile">
						{#if item.children}
							<button
								class="nav-link-mobile dropdown-toggle-mobile"
								onclick={() => toggleDropdown(item.label)}
								aria-haspopup="true"
								aria-expanded={activeDropdown === item.label}
							>
								{item.label}
								<span class="dropdown-arrow" aria-hidden="true">{activeDropdown === item.label ? '▲' : '▼'}</span>
							</button>
							{#if activeDropdown === item.label}
								<ul class="dropdown-menu-mobile" role="menu">
									{#each item.children as child}
										<li role="none">
											<a href={child.href} class="dropdown-link-mobile" role="menuitem" onclick={closeMenus}>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						{:else}
							<a href={item.href} class="nav-link-mobile" onclick={closeMenus}>{item.label}</a>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style>
	.navigation {
		background-color: var(--color-bg-darker);
		border-bottom: 1px solid var(--color-border);
		position: sticky;
		top: 0;
		z-index: 1000;
		height: var(--header-height);
	}

	.nav-container {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--spacing-sm);
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
	}

	.nav-brand a {
		font-family: var(--font-sans);
		font-size: var(--font-size-xl);
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 2px;
		color: #ffffff;
		text-decoration: none;
	}

	.nav-brand a:hover {
		color: var(--color-accent-light);
		text-decoration: none;
	}

	/* Hamburger Menu */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.hamburger span {
		width: 25px;
		height: 3px;
		background-color: #ffffff;
		transition: all 0.3s ease;
	}

	/* Desktop Menu */
	.desktop-menu {
		display: flex;
		list-style: none;
		gap: var(--spacing-md);
		align-items: center;
	}

	.nav-item {
		position: relative;
	}

	.nav-link,
	.dropdown-toggle {
		font-family: var(--font-sans);
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 1.5px;
		color: #ffffff;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem 0;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		transition: color 0.2s ease;
		text-decoration: none;
	}

	.nav-link:hover,
	.dropdown-toggle:hover {
		color: var(--color-accent-light);
		text-decoration: none;
	}

	.dropdown-arrow {
		font-size: 10px;
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 0;
		background-color: #ffffff;
		border: 1px solid var(--color-border);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		list-style: none;
		min-width: 200px;
		padding: var(--spacing-xs) 0;
		margin-top: 0;
	}

	.dropdown-link {
		display: block;
		padding: var(--spacing-xs) var(--spacing-sm);
		color: var(--color-text-primary);
		font-size: 14px;
		transition: background-color 0.2s ease, color 0.2s ease;
		text-decoration: none;
	}

	.dropdown-link:hover {
		background-color: var(--color-bg-dark);
		color: var(--color-text-primary);
		text-decoration: none;
	}

	/* Mobile Menu */
	.mobile-menu {
		display: none;
	}

	@media (max-width: 768px) {
		.desktop-menu {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.mobile-menu {
			display: block;
			position: fixed;
			top: var(--header-height);
			left: 0;
			right: 0;
			background-color: var(--color-bg-darker);
			border-bottom: 1px solid var(--color-border);
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.3s ease;
		}

		.mobile-menu.open {
			max-height: calc(100vh - var(--header-height));
			overflow-y: auto;
		}

		.nav-menu-mobile {
			list-style: none;
			padding: var(--spacing-sm) 0;
		}

		.nav-item-mobile {
			border-bottom: 1px solid var(--color-border);
		}

		.nav-link-mobile,
		.dropdown-toggle-mobile {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: var(--spacing-sm);
			color: #ffffff;
			font-family: var(--font-sans);
			font-size: 14px;
			text-transform: uppercase;
			letter-spacing: 1.5px;
			background: none;
			border: none;
			cursor: pointer;
			width: 100%;
			text-align: left;
			text-decoration: none;
		}

		.dropdown-menu-mobile {
			list-style: none;
			background-color: rgba(0, 0, 0, 0.2);
			padding: var(--spacing-xs) 0;
		}

		.dropdown-link-mobile {
			display: block;
			padding: var(--spacing-sm) var(--spacing-md);
			color: rgba(255, 255, 255, 0.9);
			font-size: 14px;
			text-decoration: none;
		}
	}
</style>
