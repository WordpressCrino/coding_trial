// slider

$('.slider').slick({
  autoplay: true,
  infinite: true,
  speed: 150,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  centerMode: true,
  variableWidth: true,
  dots: false,
});

$(".openbtn1").click(function () {
  $(this).toggleClass('active');
    $(".header-nav").toggleClass('panelactive');
});

$(".header-nav__list--item a").click(function () {
  $(".openbtn1").removeClass('active');
  $(".header-nav").removeClass('panelactive');
});
