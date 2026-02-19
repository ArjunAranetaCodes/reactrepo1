<?php
/**
 * Electro Music Shop Theme Functions
 *
 * @package Electro_Music_Shop
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Theme setup
 */
function electro_music_shop_setup() {
	// Add theme support for various features
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );
	
	// Add support for WooCommerce (if active)
	if ( class_exists( 'WooCommerce' ) ) {
		add_theme_support( 'woocommerce' );
		add_theme_support( 'wc-product-gallery-zoom' );
		add_theme_support( 'wc-product-gallery-lightbox' );
		add_theme_support( 'wc-product-gallery-slider' );
	}
	
	// Register navigation menus
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'electro-music-shop' ),
		'footer'  => __( 'Footer Menu', 'electro-music-shop' ),
	) );
	
	// Set content width
	$GLOBALS['content_width'] = 1200;
}
add_action( 'after_setup_theme', 'electro_music_shop_setup' );

/**
 * Enqueue styles
 */
function electro_music_shop_styles() {
	// Google Fonts
	wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap', array(), null );
	
	// Bootstrap CSS
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '5.3.0' );
	
	// Font Awesome
	wp_enqueue_style( 'font-awesome', 'https://use.fontawesome.com/releases/v5.15.4/css/all.css', array(), '5.15.4' );
	
	// Bootstrap Icons
	wp_enqueue_style( 'bootstrap-icons', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css', array(), '1.4.1' );
	
	// Animate CSS
	wp_enqueue_style( 'animate', get_template_directory_uri() . '/lib/animate/animate.min.css', array(), '3.7.2' );
	
	// Owl Carousel
	wp_enqueue_style( 'owl-carousel', get_template_directory_uri() . '/lib/owlcarousel/assets/owl.carousel.min.css', array(), '2.3.4' );
	wp_enqueue_style( 'owl-theme', get_template_directory_uri() . '/lib/owlcarousel/assets/owl.theme.default.min.css', array(), '2.3.4' );
	
	// Main theme stylesheet
	wp_enqueue_style( 'electro-music-shop-style', get_stylesheet_uri(), array( 'bootstrap' ), wp_get_theme()->get( 'Version' ) );
}
add_action( 'wp_enqueue_scripts', 'electro_music_shop_styles' );

/**
 * Enqueue scripts
 */
function electro_music_shop_scripts() {
	// jQuery is already included in WordPress
	wp_enqueue_script( 'jquery' );
	
	// Bootstrap JS
	wp_enqueue_script( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', array( 'jquery' ), '5.3.0', true );
	
	// Easing
	wp_enqueue_script( 'easing', get_template_directory_uri() . '/lib/easing/easing.min.js', array( 'jquery' ), '1.4.1', true );
	
	// Waypoints
	wp_enqueue_script( 'waypoints', get_template_directory_uri() . '/lib/waypoints/waypoints.min.js', array( 'jquery' ), '4.0.1', true );
	
	// Counter Up
	wp_enqueue_script( 'counterup', get_template_directory_uri() . '/lib/counterup/counterup.min.js', array( 'jquery', 'waypoints' ), '1.0.0', true );
	
	// WOW.js
	wp_enqueue_script( 'wow', get_template_directory_uri() . '/lib/wow/wow.min.js', array(), '1.1.3', true );
	
	// Owl Carousel
	wp_enqueue_script( 'owl-carousel', get_template_directory_uri() . '/lib/owlcarousel/owl.carousel.min.js', array( 'jquery' ), '2.3.4', true );
	
	// Main theme script
	wp_enqueue_script( 'electro-music-shop-main', get_template_directory_uri() . '/js/main.js', array( 'jquery', 'bootstrap', 'owl-carousel', 'wow', 'easing' ), wp_get_theme()->get( 'Version' ), true );
}
add_action( 'wp_enqueue_scripts', 'electro_music_shop_scripts' );

/**
 * Register widget areas
 */
function electro_music_shop_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'electro-music-shop' ),
		'id'            => 'sidebar-1',
		'description'   => __( 'Add widgets here.', 'electro-music-shop' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title' => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
	
	register_sidebar( array(
		'name'          => __( 'Footer 1', 'electro-music-shop' ),
		'id'            => 'footer-1',
		'description'   => __( 'Add widgets here.', 'electro-music-shop' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
	
	register_sidebar( array(
		'name'          => __( 'Footer 2', 'electro-music-shop' ),
		'id'            => 'footer-2',
		'description'   => __( 'Add widgets here.', 'electro-music-shop' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
	
	register_sidebar( array(
		'name'          => __( 'Footer 3', 'electro-music-shop' ),
		'id'            => 'footer-3',
		'description'   => __( 'Add widgets here.', 'electro-music-shop' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'electro_music_shop_widgets_init' );

/**
 * Include template functions
 */
require get_template_directory() . '/inc/template-functions.php';
