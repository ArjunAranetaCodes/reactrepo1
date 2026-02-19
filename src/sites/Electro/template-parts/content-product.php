<?php
/**
 * Product item template
 *
 * @package Electro_Music_Shop
 */
global $product;

// Safety check
if ( ! class_exists( 'WooCommerce' ) || ! $product ) {
	return;
}
?>
<div class="col-md-6 col-lg-4 col-xl-3">
	<div class="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
		<div class="product-item-inner border rounded">
			<div class="product-item-inner-item">
				<?php echo $product->get_image( 'woocommerce_thumbnail', array( 'class' => 'img-fluid w-100 rounded-top' ) ); ?>
				<?php if ( $product->is_on_sale() ) : ?>
					<div class="product-sale"><?php esc_html_e( 'Sale', 'electro-music-shop' ); ?></div>
				<?php endif; ?>
				<?php if ( $product->is_featured() ) : ?>
					<div class="product-new"><?php esc_html_e( 'New', 'electro-music-shop' ); ?></div>
				<?php endif; ?>
				<div class="product-details">
					<a href="<?php echo esc_url( $product->get_permalink() ); ?>"><i class="fa fa-eye fa-1x"></i></a>
				</div>
			</div>
			<div class="text-center rounded-bottom p-4">
				<?php
				$categories = wp_get_post_terms( $product->get_id(), 'product_cat' );
				if ( ! empty( $categories ) ) :
					?>
					<a href="<?php echo esc_url( get_term_link( $categories[0] ) ); ?>" class="d-block mb-2"><?php echo esc_html( $categories[0]->name ); ?></a>
				<?php endif; ?>
				<a href="<?php echo esc_url( $product->get_permalink() ); ?>" class="d-block h4"><?php echo esc_html( $product->get_name() ); ?></a>
				<?php echo $product->get_price_html(); ?>
			</div>
		</div>
		<div class="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-0">
			<?php
			echo apply_filters( 'woocommerce_loop_add_to_cart_link',
				sprintf( '<a href="%s" data-quantity="%s" class="%s btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4" %s><i class="fas fa-shopping-cart me-2"></i> %s</a>',
					esc_url( $product->add_to_cart_url() ),
					esc_attr( isset( $args['quantity'] ) ? $args['quantity'] : 1 ),
					esc_attr( isset( $args['class'] ) ? $args['class'] : 'button' ),
					isset( $args['attributes'] ) ? wc_implode_html_attributes( $args['attributes'] ) : '',
					esc_html( $product->add_to_cart_text() )
				),
				$product, $args );
			?>
			<div class="d-flex justify-content-between align-items-center">
				<div class="d-flex">
					<?php
					$rating = $product->get_average_rating();
					for ( $i = 1; $i <= 5; $i++ ) {
						if ( $i <= $rating ) {
							echo '<i class="fas fa-star text-primary"></i>';
						} else {
							echo '<i class="fas fa-star"></i>';
						}
					}
					?>
				</div>
				<div class="d-flex">
					<a href="<?php echo esc_url( $product->get_permalink() ); ?>" class="text-primary d-flex align-items-center justify-content-center me-3">
						<span class="rounded-circle btn-sm-square border"><i class="fas fa-random"></i></span>
					</a>
					<a href="<?php echo esc_url( $product->get_permalink() ); ?>" class="text-primary d-flex align-items-center justify-content-center me-0">
						<span class="rounded-circle btn-sm-square border"><i class="fas fa-heart"></i></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

