$(function(){
    
    $(window).scroll(function () {
        var fixed = $(this).scrollTop()
        if (fixed > 300) {
          $(".sub-nav").addClass("sticky-navbar")
        } else {
          $(".sub-nav").removeClass("sticky-navbar")
        }
        if(fixed >300){
          $('.back-to-top').fadeIn(300)
        }
        else{
          $('.back-to-top').fadeOut(300)
        }
})

$('.back-to-top').click(function () {
  $('html,body').animate({
    scrollTop: 0
  }, 1000)
})






var html_body = $('html,body');
$('.navbar-nav').on('click', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      html_body.animate({
        scrollTop: target.offset().top - 17
      }, 1500);
      return false;
    }

  }
});

$('.banner-sliderr').slick({
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnFocus: false,
    fade:true,
    Speed:500,
 
  });

  $('.about-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 1000,
    arrows: false,
    centerMode: false,
    centerPadding: 0,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
    ]
  
  });


  $('.review-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnFocus: false,
    dots:true,

  });



})