<script lang="ts">
	interface MenuItem {
		label: string;
		href: string;
	}

	let { items, currentPath, heading = 'About' }: { items: MenuItem[]; currentPath: string; heading?: string } = $props();
</script>

<aside class="sidebar-menu">
	<h3 class="sidebar-heading">{heading}</h3>
	<nav aria-label="{heading} section navigation">
		<ul>
			{#each items as item}
				<li>
					<a
						href={item.href}
						class:active={currentPath === item.href}
						aria-current={currentPath === item.href ? 'page' : undefined}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	.sidebar-menu {
		padding-right: 20px;
		margin-bottom: 8px;
	}

	.sidebar-heading {
		font-family: var(--font-body);
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 2px;
		line-height: 24px;
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-md);
	}

	nav ul {
		list-style: none;
	}

	nav li {
		margin-bottom: 0;
	}

	nav a {
		display: block;
		padding: 6px 0;
		font-family: var(--font-body);
		font-size: 15px;
		text-transform: uppercase;
		letter-spacing: 2px;
		line-height: 19px;
		color: rgba(31, 37, 38, 0.4);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	nav a:hover {
		color: rgba(31, 37, 38, 0.98);
	}

	nav a.active {
		color: rgba(31, 37, 38, 0.98);
	}

	@media (max-width: 768px) {
		.sidebar-menu {
			margin-bottom: var(--spacing-md);
		}
	}
</style>
