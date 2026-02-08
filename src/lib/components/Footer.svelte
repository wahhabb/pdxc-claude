<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="footer-container">
		<div class="footer-content">
			<p class="footer-copyright">© 2014–{currentYear} PDX Commons</p>
			<p class="footer-address">PDX COMMONS | 4262 SE Belmont Street | Portland, OR 97215</p>
			<p class="footer-social">
				<a href="https://www.facebook.com/pdxcommons" target="_blank" rel="noopener noreferrer" aria-label="Visit PDX Commons on Facebook (opens in new tab)">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
						<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z">
					</path></svg>
					<span>Facebook</span>
				</a>
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background-color: var(--color-bg-darker);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: var(--spacing-lg) 0;
		margin-top: 0;
	}

	.footer-container {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--spacing-sm);
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		gap: var(--spacing-md);
		align-items: center;
	}

	.footer-content p {
		color: rgba(255, 255, 255, 0.7);
		font-size: 14px;
		text-indent: 0;
		margin: 0;
		& svg {
			width:30px;
			height:30px;
			fill: #eee;
		}
		& span {
			position: relative;
			top:-7px;
			padding-left: 6px;
		}
	}

	.footer-copyright {
		text-align: left;
	}

	.footer-address {
		text-align: center;
	}

	.footer-social {
		text-align: right;
	}

	.footer-social a {
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		transition: color 0.2s ease;
		font-size: 160%;

	}

	.footer-social a:hover {
		color: #ffffff;
	}

	@media (max-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: var(--spacing-sm);
			text-align: center;
		}

		.footer-copyright,
		.footer-address,
		.footer-social {
			text-align: center;
		}
	}
</style>
