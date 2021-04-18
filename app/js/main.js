$(function(){

$('.header__slider').slick({
  infinite:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  // cssEase: 'linear',
  prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="link arrow-left">`,
  nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="link arrow-right">`,
  asNavFor: '.slick-slider-dots'
})

$('.slick-slider-dots').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  // dots: true,
  // focusOnSelect: true,
  asNavFor: '.header__slider'
});


$('.surf-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // dots: true,
  // focusOnSelect: true,
  prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="link arrow-left">`,
  nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="link arrow-right">`,
});



});