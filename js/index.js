$(document).ready(function() {
  // Home Banner Slick Slider JS 
  $(".banner-slick-slider").slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1400,
    fade: true,
    cssEase: 'linear'
  });
  // Testimonials Slick Slider JS
  $(".testimonials-slider").slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1400,
    fade: true,
    cssEase: 'linear'
  });
  // Smooth Animation On Click of Navbar Menu
  $(".slider-scroll-down > a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      offset = 0;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 1400);
    }
  });
});