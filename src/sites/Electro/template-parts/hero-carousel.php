<?php
/**
 * Hero carousel template part
 *
 * @package Electro_Music_Shop
 */
?>
<!-- Carousel Start -->
<div class="container-fluid carousel bg-light px-0">
	<div class="row g-0 justify-content-end">
		<div class="col-12 col-lg-7 col-xl-9">
			<div class="header-carousel owl-carousel bg-light py-5">
				<div class="row g-0 header-carousel-item align-items-center">
					<div class="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
						<img src="<?php echo esc_url( get_template_directory_uri() . '/img/carousel-1.png' ); ?>" class="img-fluid w-100" alt="<?php esc_attr_e( 'Music Shop Banner', 'electro-music-shop' ); ?>">
					</div>
					<div class="col-xl-6 carousel-content p-4">
						<h4 class="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s" style="letter-spacing: 3px;"><?php esc_html_e( 'Save Up To $400', 'electro-music-shop' ); ?></h4>
						<h1 class="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s"><?php esc_html_e( 'On Selected Instruments & Equipment', 'electro-music-shop' ); ?></h1>
						<p class="text-dark wow fadeInRight" data-wow-delay="0.5s"><?php esc_html_e( 'Terms and Conditions Apply', 'electro-music-shop' ); ?></p>
						<?php if ( class_exists( 'WooCommerce' ) ) : ?>
							<a class="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s" href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_shop_page_id' ) ) ); ?>"><?php esc_html_e( 'Shop Now', 'electro-music-shop' ); ?></a>
						<?php else : ?>
							<a class="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Learn More', 'electro-music-shop' ); ?></a>
						<?php endif; ?>
					</div>
				</div>
				<div class="row g-0 header-carousel-item align-items-center">
					<div class="col-xl-6 carousel-img wow fadeInLeft" data-wow-delay="0.1s">
						<img src="<?php echo esc_url( get_template_directory_uri() . '/img/carousel-2.png' ); ?>" class="img-fluid w-100" alt="<?php esc_attr_e( 'Music Shop Banner', 'electro-music-shop' ); ?>">
					</div>
					<div class="col-xl-6 carousel-content p-4">
						<h4 class="text-uppercase fw-bold mb-4 wow fadeInRight" data-wow-delay="0.1s" style="letter-spacing: 3px;"><?php esc_html_e( 'Save Up To $200', 'electro-music-shop' ); ?></h4>
						<h1 class="display-3 text-capitalize mb-4 wow fadeInRight" data-wow-delay="0.3s"><?php esc_html_e( 'On Selected Music Accessories', 'electro-music-shop' ); ?></h1>
						<p class="text-dark wow fadeInRight" data-wow-delay="0.5s"><?php esc_html_e( 'Terms and Conditions Apply', 'electro-music-shop' ); ?></p>
						<?php if ( class_exists( 'WooCommerce' ) ) : ?>
							<a class="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s" href="<?php echo esc_url( get_permalink( get_option( 'woocommerce_shop_page_id' ) ) ); ?>"><?php esc_html_e( 'Shop Now', 'electro-music-shop' ); ?></a>
						<?php else : ?>
							<a class="btn btn-primary rounded-pill py-3 px-5 wow fadeInRight" data-wow-delay="0.7s" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php esc_html_e( 'Learn More', 'electro-music-shop' ); ?></a>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-lg-5 col-xl-3 wow fadeInRight" data-wow-delay="0.1s">
			<div class="carousel-header-banner h-100">
				<?php
				if ( class_exists( 'WooCommerce' ) ) {
					$featured_products = wc_get_featured_product_ids();
				} else {
					$featured_products = array();
				}
				if ( ! empty( $featured_products ) ) {
					$product = wc_get_product( $featured_products[0] );
					if ( $product ) {
						$image_url = wp_get_attachment_image_url( $product->get_image_id(), 'large' );
						if ( ! $image_url ) {
							$image_url = get_template_directory_uri() . '/img/header-img.jpg';
						}
						?>
						<img src="<?php echo esc_url( $image_url ); ?>" class="img-fluid w-100 h-100" style="object-fit: cover;" alt="<?php echo esc_attr( $product->get_name() ); ?>">
						<div class="carousel-banner-offer">
							<?php if ( $product->is_on_sale() ) : ?>
								<p class="bg-primary text-white rounded fs-5 py-2 px-4 mb-0 me-3">
									<?php echo esc_html( $product->get_sale_price() ? wc_price( $product->get_regular_price() - $product->get_sale_price() ) : '' ); ?>
								</p>
							<?php endif; ?>
							<p class="text-primary fs-5 fw-bold mb-0"><?php esc_html_e( 'Special Offer', 'electro-music-shop' ); ?></p>
						</div>
						<div class="carousel-banner">
							<div class="carousel-banner-content text-center p-4">
								<a href="<?php echo esc_url( $product->get_permalink() ); ?>" class="d-block mb-2"><?php echo esc_html( wc_get_product_category_list( $product->get_id() ) ); ?></a>
								<a href="<?php echo esc_url( $product->get_permalink() ); ?>" class="d-block text-white fs-3"><?php echo esc_html( $product->get_name() ); ?></a>
								<?php if ( $product->is_on_sale() ) : ?>
									<del class="me-2 text-white fs-5"><?php echo $product->get_regular_price() ? wc_price( $product->get_regular_price() ) : ''; ?></del>
								<?php endif; ?>
								<span class="text-primary fs-5"><?php echo $product->get_price_html(); ?></span>
							</div>
							<a href="<?php echo esc_url( $product->add_to_cart_url() ); ?>" class="btn btn-primary rounded-pill py-2 px-4">
								<i class="fas fa-shopping-cart me-2"></i> <?php esc_html_e( 'Add To Cart', 'electro-music-shop' ); ?>
							</a>
						</div>
						<?php
					}
				} else {
					?>
					<img src="<?php echo esc_url( get_template_directory_uri() . '/img/header-img.jpg' ); ?>" class="img-fluid w-100 h-100" style="object-fit: cover;" alt="<?php esc_attr_e( 'Music Shop', 'electro-music-shop' ); ?>">
					<?php
				}
				?>
			</div>
		</div>
	</div>
</div>
<!-- Carousel End -->

