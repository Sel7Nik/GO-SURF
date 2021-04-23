$(function () {

  $('.header__slider').slick({
    infinite: true,
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
    dots: true,
    focusOnSelect: true,
    asNavFor: '.header__slider'
  });


  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.surf-map',
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="link arrow-left">`,
    nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="link arrow-right">`,

  });


  $('.surf-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,

  });



  $('.holder-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="link arrow-left">`,
    nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="link arrow-right">`,
    focusOnSelect: true,
  });


  $('.shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="link arrow-left">`,
    nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="link arrow-right">`,
    // focusOnSelect: true,
  });




  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img class="air-img" src="../img/plus.svg" alt="star-logo"></div><div class="quantity-button quantity-down"><img class="air-img" src="../img/minus.svg" alt="star-logo"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });


$('.quantity-button').on('click', function(){

let sum = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
$('.summ').html('$' + sum);

});

let sum = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
$('.summ').html('$' + sum);
  

$('.surfboard-box__circle').on('click', function(){
$(this).toggleClass('active');
// $('.surfboard-box__content').css('display','none');
});


});