<?php
/**
 * The header template
 *
 * @package Electro_Music_Shop
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<script>
// Hide spinner immediately - no jQuery dependency
(function() {
    var spinner = document.getElementById('spinner');
    if (spinner) {
        // Hide immediately
        spinner.classList.remove('show');
        // Also add loaded class to body
        document.body.classList.add('loaded');
    }
    
    // Fallback: hide after DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (spinner) spinner.classList.remove('show');
            document.body.classList.add('loaded');
        });
    }
    
    // Final fallback: hide on window load
    window.addEventListener('load', function() {
        if (spinner) spinner.classList.remove('show');
        document.body.classList.add('loaded');
    });
})();
</script>

<!-- Spinner Start -->
<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
	<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
		<span class="sr-only"><?php esc_html_e( 'Loading...', 'electro-music-shop' ); ?></span>
	</div>
</div>
<!-- Spinner End -->

<!-- Topbar Start -->
<div class="container-fluid px-5 d-none border-bottom d-lg-block">
	<div class="row gx-0 align-items-center">
		<div class="col-lg-4 text-center text-lg-start mb-lg-0">
			<div class="d-inline-flex align-items-center" style="height: 45px;">
				<?php if ( class_exists( 'WooCommerce' ) ) : ?>
					<a href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_shop_page_id' ) ) ); ?>" class="text-muted me-2"><?php esc_html_e( 'Shop', 'electro-music-shop' ); ?></a><small> / </small>
					<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="text-muted mx-2"><?php esc_html_e( 'My Account', 'electro-music-shop' ); ?></a><small> / </small>
					<a href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_cart_page_id' ) ) ); ?>" class="text-muted ms-2"><?php esc_html_e( 'Cart', 'electro-music-shop' ); ?></a>
				<?php else : ?>
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="text-muted me-2"><?php esc_html_e( 'Home', 'electro-music-shop' ); ?></a>
				<?php endif; ?>
			</div>
		</div>
		<div class="col-lg-4 text-center d-flex align-items-center justify-content-center">
			<small class="text-dark"><?php esc_html_e( 'Call Us:', 'electro-music-shop' ); ?></small>
			<a href="tel:+01234567890" class="text-muted">(+012) 1234 567890</a>
		</div>
		<div class="col-lg-4 text-center text-lg-end">
			<div class="d-inline-flex align-items-center" style="height: 45px;">
				<?php if ( is_user_logged_in() ) : ?>
					<div class="dropdown">
						<a href="#" class="dropdown-toggle text-muted ms-2" data-bs-toggle="dropdown">
							<small><i class="fa fa-user me-2"></i> <?php esc_html_e( 'My Account', 'electro-music-shop' ); ?></small>
						</a>
						<div class="dropdown-menu rounded">
							<?php if ( class_exists( 'WooCommerce' ) ) : ?>
								<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="dropdown-item"><?php esc_html_e( 'Dashboard', 'electro-music-shop' ); ?></a>
								<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="dropdown-item"><?php esc_html_e( 'Orders', 'electro-music-shop' ); ?></a>
							<?php endif; ?>
							<a href="<?php echo esc_url( wp_logout_url( home_url() ) ); ?>" class="dropdown-item"><?php esc_html_e( 'Log Out', 'electro-music-shop' ); ?></a>
						</div>
					</div>
				<?php else : ?>
					<?php if ( class_exists( 'WooCommerce' ) ) : ?>
						<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="text-muted ms-2">
							<small><i class="fa fa-sign-in-alt me-2"></i> <?php esc_html_e( 'Login', 'electro-music-shop' ); ?></small>
						</a>
					<?php else : ?>
						<a href="<?php echo esc_url( wp_login_url() ); ?>" class="text-muted ms-2">
							<small><i class="fa fa-sign-in-alt me-2"></i> <?php esc_html_e( 'Login', 'electro-music-shop' ); ?></small>
						</a>
					<?php endif; ?>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>
<div class="container-fluid px-5 py-4 d-none d-lg-block">
	<div class="row gx-0 align-items-center text-center">
		<div class="col-md-4 col-lg-3 text-center text-lg-start">
			<div class="d-inline-flex align-items-center">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="navbar-brand p-0">
					<h1 class="display-5 text-primary m-0"><i class="fas fa-music text-secondary me-2"></i><?php echo esc_html( electro_music_shop_get_shop_title() ); ?></h1>
				</a>
			</div>
		</div>
		<div class="col-md-4 col-lg-6 text-center">
			<div class="position-relative ps-4">
				<form role="search" method="get" class="d-flex border rounded-pill" action="<?php echo esc_url( home_url( '/' ) ); ?>">
					<input class="form-control border-0 rounded-pill w-100 py-3" type="search" name="s" placeholder="<?php esc_attr_e( 'Search for music, instruments...', 'electro-music-shop' ); ?>" value="<?php echo get_search_query(); ?>">
					<?php if ( class_exists( 'WooCommerce' ) ) : ?>
						<input type="hidden" name="post_type" value="product">
					<?php endif; ?>
					<button type="submit" class="btn btn-primary rounded-pill py-3 px-5" style="border: 0;"><i class="fas fa-search"></i></button>
				</form>
			</div>
		</div>
		<div class="col-md-4 col-lg-3 text-center text-lg-end">
			<div class="d-inline-flex align-items-center">
				<?php if ( class_exists( 'WooCommerce' ) ) : ?>
					<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="text-muted d-flex align-items-center justify-content-center me-3">
						<span class="rounded-circle btn-md-square border"><i class="fas fa-user"></i></span>
					</a>
					<a href="<?php echo esc_url( wc_get_page_permalink( 'myaccount' ) ); ?>" class="text-muted d-flex align-items-center justify-content-center me-3">
						<span class="rounded-circle btn-md-square border"><i class="fas fa-heart"></i></span>
					</a>
					<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="text-muted d-flex align-items-center justify-content-center">
						<span class="rounded-circle btn-md-square border"><i class="fas fa-shopping-cart"></i></span>
						<span class="text-dark ms-2"><?php echo WC()->cart ? WC()->cart->get_cart_total() : '$0.00'; ?></span>
					</a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</div>
<!-- Topbar End -->

<!-- Navbar & Hero Start -->
<div class="container-fluid nav-bar p-0">
	<div class="row gx-0 bg-primary px-5 align-items-center">
		<div class="col-lg-3 d-none d-lg-block">
			<nav class="navbar navbar-light position-relative" style="width: 250px;">
				<button class="navbar-toggler border-0 fs-4 w-100 px-0 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#allCat">
					<h4 class="m-0"><i class="fa fa-bars me-2"></i><?php esc_html_e( 'All Categories', 'electro-music-shop' ); ?></h4>
				</button>
				<div class="collapse navbar-collapse rounded-bottom" id="allCat">
					<div class="navbar-nav ms-auto py-0">
						<ul class="list-unstyled categories-bars">
							<?php
							if ( class_exists( 'WooCommerce' ) ) {
								$product_categories = get_terms( array(
									'taxonomy' => 'product_cat',
									'hide_empty' => false,
									'number' => 8,
								) );
								if ( ! empty( $product_categories ) && ! is_wp_error( $product_categories ) ) :
									foreach ( $product_categories as $category ) :
										$count = $category->count;
										?>
										<li>
											<div class="categories-bars-item">
												<a href="<?php echo esc_url( get_term_link( $category ) ); ?>"><?php echo esc_html( $category->name ); ?></a>
												<span>(<?php echo esc_html( $count ); ?>)</span>
											</div>
										</li>
										<?php
									endforeach;
								endif;
							}
							?>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="col-lg-9">
			<nav class="navbar navbar-expand-lg navbar-light py-0">
				<button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<?php
					wp_nav_menu( array(
						'theme_location' => 'primary',
						'container' => false,
						'menu_class' => 'navbar-nav ms-auto p-0 p-lg-0',
						'fallback_cb' => function() {
							echo '<ul class="navbar-nav ms-auto p-0 p-lg-0">';
							echo '<li class="nav-item"><a class="nav-link" href="' . esc_url( home_url( '/' ) ) . '">' . esc_html__( 'Home', 'electro-music-shop' ) . '</a></li>';
							echo '<li class="nav-item"><a class="nav-link" href="' . esc_url( get_permalink( get_option( 'woocommerce_shop_page_id' ) ) ) . '">' . esc_html__( 'Shop', 'electro-music-shop' ) . '</a></li>';
							echo '</ul>';
						},
					) );
					?>
				</div>
			</nav>
		</div>
	</div>
</div>
<!-- Navbar & Hero End -->

