<?php
/**
 * Products template part
 *
 * @package Electro_Music_Shop
 */
?>
<!-- Our Products Start -->
<div class="container-fluid product py-5">
	<div class="container py-5">
		<div class="tab-class">
			<div class="row g-4">
				<div class="col-lg-4 text-start wow fadeInLeft" data-wow-delay="0.1s">
					<h1><?php esc_html_e( 'Our Products', 'electro-music-shop' ); ?></h1>
				</div>
				<div class="col-lg-8 text-end wow fadeInRight" data-wow-delay="0.1s">
					<ul class="nav nav-pills d-inline-flex text-center mb-5">
						<li class="nav-item mb-4">
							<a class="d-flex mx-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
								<span class="text-dark" style="width: 130px;"><?php esc_html_e( 'All Products', 'electro-music-shop' ); ?></span>
							</a>
						</li>
						<li class="nav-item mb-4">
							<a class="d-flex py-2 mx-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
								<span class="text-dark" style="width: 130px;"><?php esc_html_e( 'New Arrivals', 'electro-music-shop' ); ?></span>
							</a>
						</li>
						<li class="nav-item mb-4">
							<a class="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
								<span class="text-dark" style="width: 130px;"><?php esc_html_e( 'Featured', 'electro-music-shop' ); ?></span>
							</a>
						</li>
						<li class="nav-item mb-4">
							<a class="d-flex mx-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
								<span class="text-dark" style="width: 130px;"><?php esc_html_e( 'Top Selling', 'electro-music-shop' ); ?></span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="tab-content">
				<div id="tab-1" class="tab-pane fade show p-0 active">
					<div class="row g-4">
						<?php
						if ( class_exists( 'WooCommerce' ) ) {
							$args = array(
								'post_type' => 'product',
								'posts_per_page' => 8,
								'orderby' => 'date',
								'order' => 'DESC',
							);
							$products = new WP_Query( $args );
							if ( $products->have_posts() ) :
								while ( $products->have_posts() ) : $products->the_post();
									global $product;
									get_template_part( 'template-parts/content', 'product' );
								endwhile;
								wp_reset_postdata();
							else :
								echo '<div class="col-12"><p>' . esc_html__( 'No products found.', 'electro-music-shop' ) . '</p></div>';
							endif;
						} else {
							echo '<div class="col-12"><p>' . esc_html__( 'WooCommerce is required to display products.', 'electro-music-shop' ) . '</p></div>';
						}
						?>
					</div>
				</div>
				<div id="tab-2" class="tab-pane fade p-0">
					<div class="row g-4">
						<?php
						if ( class_exists( 'WooCommerce' ) ) {
							$args = array(
								'post_type' => 'product',
								'posts_per_page' => 8,
								'orderby' => 'date',
								'order' => 'DESC',
							);
							$products = new WP_Query( $args );
							if ( $products->have_posts() ) :
								while ( $products->have_posts() ) : $products->the_post();
									global $product;
									get_template_part( 'template-parts/content', 'product' );
								endwhile;
								wp_reset_postdata();
							endif;
						}
						?>
					</div>
				</div>
				<div id="tab-3" class="tab-pane fade p-0">
					<div class="row g-4">
						<?php
						if ( class_exists( 'WooCommerce' ) ) {
							$args = array(
								'post_type' => 'product',
								'posts_per_page' => 8,
								'meta_key' => '_featured',
								'meta_value' => 'yes',
							);
							$products = new WP_Query( $args );
							if ( $products->have_posts() ) :
								while ( $products->have_posts() ) : $products->the_post();
									global $product;
									get_template_part( 'template-parts/content', 'product' );
								endwhile;
								wp_reset_postdata();
							endif;
						}
						?>
					</div>
				</div>
				<div id="tab-4" class="tab-pane fade p-0">
					<div class="row g-4">
						<?php
						if ( class_exists( 'WooCommerce' ) ) {
							$args = array(
								'post_type' => 'product',
								'posts_per_page' => 8,
								'meta_key' => 'total_sales',
								'orderby' => 'meta_value_num',
								'order' => 'DESC',
							);
							$products = new WP_Query( $args );
							if ( $products->have_posts() ) :
								while ( $products->have_posts() ) : $products->the_post();
									global $product;
									get_template_part( 'template-parts/content', 'product' );
								endwhile;
								wp_reset_postdata();
							endif;
						}
						?>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- Our Products End -->

