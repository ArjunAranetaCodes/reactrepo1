<?php
/**
 * Template functions
 *
 * @package Electro_Music_Shop
 */

if ( ! function_exists( 'electro_music_shop_get_shop_title' ) ) {
	/**
	 * Get shop title
	 */
	function electro_music_shop_get_shop_title() {
		return get_theme_mod( 'shop_title', 'Music Shop' );
	}
}

if ( ! function_exists( 'electro_music_shop_get_shop_tagline' ) ) {
	/**
	 * Get shop tagline
	 */
	function electro_music_shop_get_shop_tagline() {
		return get_theme_mod( 'shop_tagline', 'Your One-Stop Music Store' );
	}
}

