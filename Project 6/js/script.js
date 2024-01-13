$(function ($) {
  //Preloader  js

  var preloader = document.getElementById('loading')

  function preloader101() { }

  var delayInMilliseconds = 1000;

  setTimeout(function () {
    preloader.style.display = 'none'
  }, delayInMilliseconds);



  //menu js 
  $('.menu_right_icon').on('click', function () {
    $('.logo').toggleClass('logo_left');
    $('#myNav ul').toggleClass('menu_hide');

  });

  //banner_slide js


  $('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<i class="fa-solid fa-chevron-left arrow-left"> </i>',
    nextArrow: '<i class="fa-solid fa-chevron-right arrow-right"></i>',
    responsive: [{
      breakpoint: 1200,
      settings: {

      }
    },
    {
      breakpoint: 992,
      settings: {

      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },

    ]
  });

  //service_slide js

  $('.service_slide').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });
  //about-yellow-active
  var Main = $('.nav-item-about');
  var one = $('.1')
  var two = $('.2')
  var three = $('.3')
  var four = $('.4')

  $('.1').on('click', function () {
    Main.addClass('active-yellow');
    two.removeClass('active-yellow')
    three.removeClass('active-yellow')
    four.removeClass('active-yellow')
  });


  $('.2').on('click', function () {
    Main.addClass('active-yellow');
    one.removeClass('active-yellow')
    three.removeClass('active-yellow')
    four.removeClass('active-yellow')
  });

  $('.3').on('click', function () {
    Main.addClass('active-yellow');
    two.removeClass('active-yellow')
    one.removeClass('active-yellow')
    four.removeClass('active-yellow')
  });

  $('.4').on('click', function () {
    Main.addClass('active-yellow');
    two.removeClass('active-yellow')
    one.removeClass('active-yellow')
    three.removeClass('active-yellow')
  });

  //service_slide js

  $('.portfolio_slide').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

  //counter js 
  $('.counter_number').counterUp({
    time: 3000
  });


  //blog slider 
  $('.blog_slider').slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });
  // slick-testimonial js activation
  $('.fdbck_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.client'
  });
  // client slick js activation
  $('.client').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.fdbck_main',
    dots: false,
    centerPadding: 0,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });

  // slick-brand js activation
  $('.brand_slick').slick({
    infinite: true,
    autoplay: true,
    arrows: false,

    dots: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },

    ]
  });

  // slick-team js activation
  $('.team_slick').slick({
    infinite: true,
    autoplay: false,
    dots: false,
    arrows: true,
    nextArrow: $(".abt_team_left"),
    prevArrow: $(".abt_team_right"),
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  });

  //google map
  var googleMapSelector = $('#map'),
    myCenter = new google.maps.LatLng(23.741380, 90.382538);

  function initialize() {
    var mapProp = {
      zoom: 4,
      center: {
        lat: -33,
        lng: 151
      },
      disableDefaultUI: true

    };
    var map = new google.maps.Map(document.getElementById("map"), mapProp);
    var marker = new google.maps.Marker({
      position: myCenter,
      animation: google.maps.Animation.BOUNCE,
      //            disableDefaultUI: true


    });
    marker.setMap(map);
  }
  if (googleMapSelector.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }

  //menu js
  var navTop = $('.navbar').offset().top;

  $(window).on('scroll', function () {
    var scrol = $(window).scrollTop();

    //menu js 
    if (scrol > navTop) {
      $('.navbar').addClass('navfix');
    } else {
      $('.navbar').removeClass('navfix');
    }

    //back top button

    if (scrol > 200) {
      $('.backTop').fadeIn(1000);
    } else {
      $('.backTop').fadeOut(1000);
    }

    //back top button
    $('.backTop').on('click', function () {
      $('body,html').animate({
        scrollTop: 0
      }, 0);
    });


  });



});