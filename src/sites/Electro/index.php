<?php
/**
 * The main template file
 *
 * @package Electro_Music_Shop
 */

get_header();
?>

<!-- Hero Carousel Start -->
<?php get_template_part( 'template-parts/hero', 'carousel' ); ?>
<!-- Hero Carousel End -->

<!-- Services Start -->
<?php get_template_part( 'template-parts/services' ); ?>
<!-- Services End -->

<!-- Products Start -->
<?php get_template_part( 'template-parts/products' ); ?>
<!-- Products End -->

<?php
get_footer();
