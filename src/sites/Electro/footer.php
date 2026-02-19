<?php
/**
 * The footer template
 *
 * @package Electro_Music_Shop
 */
?>

<!-- Footer Start -->
<footer class="container-fluid bg-dark text-white py-5">
	<div class="container">
		<div class="row g-4">
			<?php if ( is_active_sidebar( 'footer-1' ) || is_active_sidebar( 'footer-2' ) || is_active_sidebar( 'footer-3' ) ) : ?>
				<div class="col-lg-4">
					<?php dynamic_sidebar( 'footer-1' ); ?>
				</div>
				<div class="col-lg-4">
					<?php dynamic_sidebar( 'footer-2' ); ?>
				</div>
				<div class="col-lg-4">
					<?php dynamic_sidebar( 'footer-3' ); ?>
				</div>
			<?php else : ?>
				<div class="col-lg-4">
					<h5 class="mb-4"><?php echo esc_html( electro_music_shop_get_shop_title() ); ?></h5>
					<p><?php echo esc_html( electro_music_shop_get_shop_tagline() ); ?></p>
				</div>
				<div class="col-lg-4">
					<h5 class="mb-4"><?php esc_html_e( 'Quick Links', 'electro-music-shop' ); ?></h5>
					<?php
					wp_nav_menu( array(
						'theme_location' => 'footer',
						'container' => false,
						'menu_class' => 'list-unstyled',
						'fallback_cb' => false,
					) );
					?>
				</div>
				<div class="col-lg-4">
					<h5 class="mb-4"><?php esc_html_e( 'Contact', 'electro-music-shop' ); ?></h5>
					<p><?php esc_html_e( 'Call Us:', 'electro-music-shop' ); ?> <a href="tel:+01234567890" class="text-white">(+012) 1234 567890</a></p>
				</div>
			<?php endif; ?>
		</div>
		<div class="row mt-4">
			<div class="col-12 text-center">
				<p class="mb-0">&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'electro-music-shop' ); ?></p>
			</div>
		</div>
	</div>
</footer>
<!-- Footer End -->

<!-- Back to Top -->
<a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

<?php wp_footer(); ?>

</body>
</html>

