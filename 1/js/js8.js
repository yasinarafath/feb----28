$(function () {
    "use strict";
    
    $('.full_nav .nav > li > span').on('click', function(){
        $('.full_nav .nav').toggleClass("sakeba");
        $('.navbar-header').toggleClass('menuVisible');
    });
    
    // slick-service js activation
    $('.service_slick').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    // slick - portfolio js activation
    
    $('.portfolio_slick').slick({
        infinite: true,
        autoplay: false,
        arrows: false,
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    // slick-blog js activation
    $('.blog_slick').slick({
        infinite: true,
        autoplay: false,
        arrows: true,
        nextArrow:$('.blogicon_left'),
        prevArrow:$('.blogicon_right'),
        dots: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
        arrows: true,
        nextArrow:$('.clienticon_left'),
        prevArrow:$('.clienticon_right'),
        centerMode: true,
        focusOnSelect: true
    });
    
    // slick-brand js activation
    $('.brand_slick').slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        nextArrow:$('.brandicon_left'),
        prevArrow:$('.brandicon_right'),
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    // slick-team js activation
    $('.team_slick').slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows:true,
        nextArrow:$(".abt_team_left"),
        prevArrow:$(".abt_team_right"),
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                   
                }
    },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    // counter js
	$('.counter_number').counterUp({
		time: 3000
	});
    // coming soon js 
    
    $('.comingsoon_row').countdown('2019/01/02', function(event) {
		var $this = $(this);
		$this.find('#day').html(event.strftime('<span>%D</span>'));
		$this.find('#hour').html(event.strftime('<span>%H</span>'));
		$this.find('#month').html(event.strftime('<span>%M</span>'));
		$this.find('#second').html(event.strftime('<span>%S</span>'));
	});
    
    var mySlider = $('#home-slider').pogoSlider({
            pauseOnHover: false,
            autoplay: true,
            generateButtons: false,
            autoplayTimeout: 7000,
            generateNav: false
        }).data('plugin_pogoSlider');
        $('.icon_left').on('click', function () {
            mySlider.prevSlide();
        });
        $('.icon_right').on('click', function () {
            mySlider.nextSlide();
        });
    
    // variable for all selector
    var html_body = $('html, body');
    var $window = $(window);
    var $sOfset = 500;
    var totop = $('.totop');
   
    // for back to top button
    $('.totop').on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });
    	
    //scrolling function
    $window.on('scroll', function () {

        var $scrolling = $(this).scrollTop();

        if ($scrolling > $sOfset) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }  
    });
    $(window).on('load', function () {
        
        // preloader 
        var preloaderID = $('#main-preloader');
        preloaderID.addClass('ani_1');
        setTimeout(function () {

            $('.main-navbar-top').addClass('main-navbar-top-active');
            preloaderID.fadeOut(800);

        }, 1000);
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
    
});