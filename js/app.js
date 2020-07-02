/*
 * Copyright (c) 2019 Xdesky
 * Author: Xdesky
 * This file is made for CURRENT TEMPLATE
*/

$(window).on('load', function() {
    "user strict";

    /* Preloader */
    $(".effect").fadeOut();
    $(".load-wrapp").delay(500).fadeOut();

    /* Isotope Portfolio Setup */
    if( $('.portfolio-items').length ) {
        $filters = $('.portfolio-filter ul li');
        $(".portfolio-items").isotope();
        $filters.on('click', function(){
            $filters.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).data('filter');
            $(".portfolio-items").isotope({
                filter: selector,
                hiddenStyle: {
                    transform: 'scale(.2) skew(30deg)',
                    opacity: 0
                },
                visibleStyle: {
                    transform: 'scale(1) skew(0deg)',
                    opacity: 1,
                },
                transitionDuration: '.5s'
            });
        });
    }
});

$(window).on('scroll', function() {
    "use strict";
    if ($(window).scrollTop() > 200) {
        $("a[href='#top']").css('display','block');
    } else {
        $("a[href='#top']").css('display','none');
    }
});

(function($) {
    "use strict";

    /* Function Check Element Exit */
    function exitElement(element) {
        if( element.length){
            return true;
        }else {
            return false;
        }
    }

    /* Function Menu */
    function menu() {
        $('.hamburger').on('click',function () {
            $(this).toggleClass('open');
            $('.left-content').toggleClass('active');
        })
    }

    /* Function Create Carousel Home Images */
    function carouselHomeImages() {
        $('#homeimg').owlCarousel({
            items: 1,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            animateOut: 'slideOutDown',
            animateIn: 'fadeInUp',
            dots: false,
            margin: 0
        })
    }

    /* Function Count To */
    function countTo() {
        var counter = $('.counter');
        if(exitElement(counter)){
            counter.countTo();
        }else {
            return;
        }
    }

    /* Function Ajax Portfolio */
    function ajaxPortfolio($ajaxLink, $ajaxContainer) {
        $ajaxLink.on('click', function(e) {
            var link = $(this).attr('href');
            if(link === "#") {
                e.preventDefault();
                return;
            }
            $ajaxContainer.find('.content-wrap .popup-content').empty();
            $ajaxContainer.addClass('on');
            $.ajax({
                cache: false,
                headers: {"cache-control": "no-cache"},
                url: link,
                crossDomain: true,
                beforeSend: function() {
                    $ajaxContainer.find('.ajax-loader').show();
                },
                success: function(result) {
                    $ajaxContainer.find('.content-wrap .popup-content').html(result);
                },
                complete: function() {
                    $ajaxContainer.find('.ajax-loader').hide();
                },
                error: function(e) {
                    $ajaxContainer.find('.ajax-loader').hide();
                    $ajaxContainer.find('.content-wrap .popup-content').html('<p class="text-center">Something went wrong! Retry or refresh the page.</p>')
                }
            });
            e.preventDefault();
        });
        $ajaxContainer.find('.popup-close').on('click', function() {
            $ajaxContainer.removeClass('on');
        });
    }

    /* Function Portfolio */
    function portfolioTotal() {
        /* Portfolio Image Link */
        var portfolioImageLink = $('.portfolio-items .image-link');
        var portfolioVideoLink = $('.portfolio-items .video-link');
        var portfolioAjaxLink = $('.portfolio-items .ajax-link');
        var portfolioAjaxPopup = $('.ajax-portfolio-popup');

        if(exitElement(portfolioImageLink)){
            portfolioImageLink.magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }else {
            return;
        }
        /* Portfolio Video Link */
        if(exitElement(portfolioVideoLink)) {
            portfolioVideoLink.magnificPopup({
                type: 'iframe',
                gallery: {
                    enabled: true
                }
            });
        }else {
            return;
        }
        /* Portfolio Ajax Link */
        if(exitElement(portfolioAjaxLink) && exitElement(portfolioAjaxPopup)){
            ajaxPortfolio(portfolioAjaxLink, portfolioAjaxPopup);
        }else{
            return;
        }
    }

    /* Function Create Carousel Client */
    function carouselClient() {
        $('#client').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }

    /* Function Create Carousel Testimonial */
    function carouselTestimonial() {
        $('#testimonial').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            margin: 30
        })
    }

    /* Function Create Youtube Video Bg */
    function bgYoutube() {
        if ($(".home-video").length) {
            $('.home-video').YTPlayer({
                fitToBackground: true,
                videoId: 'rSmq2uDPMh4',
                mute: true
            });
        }
    }

    /* Function Create Ripples Effect */
    function ripplesEffect() {
        if ($(".home-ripples").length) {
            $('.home-ripples').ripples({
                imageUrl: "images/bg-home-4.jpg",
                resolution: 500,
                dropRadius: 20,
                perturbance: 0.04
            });
        }
    }

    /* My Skill Animation*/
    var proSkills = {
        ht: 60,
        ja: 75,
        sq: 65,
        node: 80,
        ia: 90
    };
    var perSkills = {
        tw: 90,
        cm: 85,
        cr: 60,
        or: 80,
        enl: 75
    };

    function mySkillsAnimaiton(skills) {
        $.each(skills, function(key, value) {
            var skillbar = $("." + key);
            skillbar.animate({
                    width: value + "%"
                }, 3000,
                function() {
                    $(".speech-bubble").fadeIn();
                })
        })
    }

    /* Scroll To Top*/
    function scrollToTop() {
        var scroll = $("a[href='#top']");
        if (exitElement(scroll)){
            scroll.on('click', function () {
                $("html, body").animate({scrollTop: 0});
                return false;
            });
        }else{
            return
        }
    }

    /**
     * Scripts Ready
     */
    $(document).ready(function() {
        menu();
        ripplesEffect();
        carouselHomeImages();
        carouselClient();
        carouselTestimonial();
        bgYoutube();
        mySkillsAnimaiton(proSkills);
        mySkillsAnimaiton(perSkills);
        portfolioTotal();
        countTo();
        scrollToTop();
    });
})(jQuery); // End of use strict