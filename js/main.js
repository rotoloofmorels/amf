//variables for newsletter counting
var count = 0;
var sites = ["//e.issuu.com/embed.html#18258481/63268895", "//e.issuu.com/embed.html#18258481/63268895", "//e.issuu.com/embed.html#18258481/63268895"];


//fade in body on load

var preloadFadeIn = function () {

        $("html").fadeIn("slow");
        $("#top").fadeIn("slow");
        $("#preloader").fadeOut(500);

};


//plain JS function for next button in newsletters
function nextNewsletter() {

    if (count < 2) {
        var x = Number(++count);
        document.getElementById('lola').src = sites[x];

        if (count == 2) {
            document.getElementById('issuu_next').style.display = "none";
        }
    }
    document.getElementById('issuu_prev').style.display = "block";
}


//plain JS function for next button in newsletters
function prevNewsletter() {

    if (count > 0) {
        var x = Number(--count);
        document.getElementById('lola').src = sites[x];

        if (count == 0) {
            document.getElementById('issuu_prev').style.display = "none";
        }
    }
    document.getElementById('issuu_next').style.display = "block";
}


//Collapses first submenu in side navigation
var firstSubmenu = function () {
    $(".side_menu_item").each(function () {
        $(this).on('click', function (e) {

            e.preventDefault();
            e.stopPropagation();
            if ($(".side_menu_item").not(this).next().hasClass("open_menu")) {
                $(".side_menu_item").next().removeClass("open_menu");
                $(".side_menu_item").removeClass("selected");

                $("#top_nav").removeClass("expand_menu");
                $("#top_nav").removeClass("expand_menu_more");
                $(".side_sub_menu_item").next().removeClass("open_sub_menu");
            }

            $(this).next().toggleClass("open_menu");
            $("#top_nav").toggleClass("expand_menu");

            if ($(".side_sub_menu_item").next().hasClass("open_sub_menu")) {
                $(".side_sub_menu_item").next().removeClass("open_sub_menu");
                $("#top_nav").removeClass("expand_menu");
                $("#top_nav").removeClass("expand_menu_more");
                $('.header-menu-toggle').removeClass('visible');

            }
            $(this).toggleClass("selected");

        });
    });
};


//Collapses second submenu in side navigation
var secondSubmenu = function () {


    $(".side_sub_menu_item").on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ($(".side_sub_menu_item").not(this).next().hasClass("open_sub_menu")) {
            $(".side_sub_menu_item").next().removeClass("open_sub_menu");
            $(".side_sub_menu_item").removeClass("selected3");
            $('.header-menu-toggle').removeClass('visible');
        }
        $("#top_nav").toggleClass("expand_menu_more");
        $(this).next().toggleClass("open_sub_menu");
        $(this).toggleClass("selected3");
        $('.header-menu-toggle').toggleClass('visible');

    });
};


//functions called on load

(function ($) {

    "use strict";

    var cfg = {
            scrollDuration: 800, // smoothscroll duration
            mailChimpURL: 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc' // mailchimp url
        },

        $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


//fade in body on load

var preloadFadeIn = function () {

        $("html").fadeIn("slow");
        $("#top").fadeIn("slow");
        $("#preloader").fadeOut(500);

};



//preloader

    var Preloader = function () {
        var menuTrigger = $('.home-scroll__icon');
        $("html").addClass('cl-preload');
        menuTrigger.css('display', 'none');

        $WIN.on('load', function () {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function () {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');

        });
    };


    //menu icon toggle change on scroll down
    var menuOnScrolldown = function () {

        var menuTrigger = $('.home-scroll__icon');

        $WIN.on('scroll', function () {

            if ($WIN.scrollTop() < 150) {
                menuTrigger.css('display', 'none');
            } else {
                menuTrigger.css('display', 'block');
            }

        });
    };



    //link clicking in mobile view  
    var mobileNavigation = function () {
        if (window.matchMedia('(max-width: 800px)').matches) {
            $('link[rel=stylesheet][href="css/mobile_menu.css"]').remove();
        }
        var menuTrigger = $(".mainmenu li");
        menuTrigger.on('click', function (e) {

            if ($(this).siblings().find('ul').hasClass('open_submenu')) {
                $(this).siblings().find('ul').removeClass('open_submenu');
            }

            $(this).find('.submenu').toggleClass('open_submenu');
            $(this).find('.ikon').toggleClass('non_ikon');
        });
    };


    //open gallery view for each year

    var openGallery = function () {
        $("#gal").on('click', function (e) {
            e.preventDefault();
            $(".header-menu-toggle").css({
                "display": "none"
            });
            $("#sass").trigger('click');

        });
    };


    //open//close side navigation 
    var offCanvas = function () {

        var menuTrigger = $('.header-menu-toggle'),
            nav = $('.header-nav'),
            closeButton = nav.find('.header-nav__close'),
            siteBody = $('body'),
            mainContents = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function (e) {
            e.preventDefault();

            $('.header-menu-toggle').removeClass('visible');
            $(".side_sub_menu_item").next().removeClass("open_sub_menu");
            $(".side_sub_menu_item").removeClass("selected3");
            $("#top_nav").removeClass("expand_menu_more");

        });
        // close menu by clicking the close button
        siteBody.on('click', function (e) {
            if (!$(e.target).is('.smoothscroll, a, ul, li, #sub, #nav-icon4, .header-nav__content, .header-menu-toggle, .header-menu-toggle span,.header-menu-icon')) {
                $("#top_nav").removeClass("expand_menu");
                $("#top_nav").removeClass("expand_menu_more");
                $(".side_menu_item").next().removeClass("open_menu");
                $(".side_sub_menu_item").next().removeClass("open_sub_menu");
                $('.header-menu-toggle').removeClass('visible');
                $(".side_sub_menu_item").removeClass("selected3");
                $(".side_menu_item").removeClass("selected");
            }
        });
    };



    //photoswipe initialization
    var photoswipe = function () {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

        // get items
        $folioItems.each(function (i) {

            var $folio = $(this),
                $thumbLink = $folio.find('.thumb-link'),
                $title = $folio.find('.item-folio__title'),
                $caption = $folio.find('.item-folio__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width = $size[0],
                $height = $size[1];

            var item = {
                src: $href,
                w: $width,
                h: $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        // bind click event
        $folioItems.each(function (i) {

            $(this).on('click', function (e) {
                e.preventDefault();
                var options = {
                    index: i,
                    showHideOpacity: true

                }

                // initialize PhotoSwipe
                var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
                lightBox.init();
                lightBox.ui.showControls();
            });

        });
    };


    //stats counter 

    var statCount = function () {

        var statSection = $(".s-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function (direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({
                            Counter: 0
                        }).animate({
                            Counter: $this.text()
                        }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function (curValue) {
                                $this.text(Math.ceil(curValue));
                            }
                        });
                    });

                }

                // trigger once only
                this.destroy();

            },

            offset: "90%"

        });
    };


    //masonry plugin initialization for gallery

    var masonryFolio = function () {

        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',

            });
        });
        // layout Masonry after each image loads
        containerBricks.imagesLoaded().progress(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',

            });
            containerBricks.masonry('layout');
        });
    };

    //smooth scrolling for menu links
    var smoothScroll = function () {

        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
                $target = $(target);

            e.preventDefault();
            e.stopPropagation();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, cfg.scrollDuration, 'swing').promise().done(function () {

                // check if menu is open
                if ($('body').hasClass('menu-is-open')) {
                    $('.header-menu-toggle').trigger('click');
                }

                window.location.hash = target;
            });
        });
    };


    //placeholder plugin
    var placeholder = function () {
        $('input, textarea, select').placeholder();
    };


    //alert boxes
    var alertBoxes = function () {

        $('.alert-box').on('click', '.alert-box__close', function () {
            $(this).parent().fadeOut(500);
        });

    };

    //animate on scroll
    var clAOS = function () {

        AOS.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true,
            disable: 'mobile'
        });

    };

    $(function () {
        $('*[data-aos|="nojs"]').each(function () {
            var $this = $(this);
            $this.attr('data-aos', $this.attr('data-aos').replace('nojs-', ''));
        });
        AOS.init({
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true,
            disable: 'mobile'
        });

    });

    //back to top icon
    var backToTop = function () {

        var pxShow = 500, // height on which the button will show
            fadeInTime = 400, // how slow/fast you want the button to show
            fadeOutTime = 400, // how slow/fast you want the button to hide
            scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
            goTopButton = $(".cl-go-top")

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };

    // highlight menu item on scroll

    var followScroll = function () {
        var menuTrigger = $('.sample').eq(0);
        $WIN.on('scroll', function () {
            if ($WIN.scrollTop() == 0) {
                $('#top_nav').css('opacity', '0');
            }
            if ($WIN.scrollTop() > 0) {
                $('#top_nav').css('opacity', '1');
            }
            if ($WIN.scrollTop() < 490) {
                $('.sample').eq(0).css('color', 'red');
                $('.sample').eq(1).css('color', 'white');
            } else if ($WIN.scrollTop() < 2090) {
                $('.sample').eq(0).css('color', 'white');
                $('.sample').eq(1).css('color', 'red');
                $('.sample').eq(2).css('color', 'white');
            } else if ($WIN.scrollTop() < 3900) {
                $('.sample').eq(1).css('color', 'white');
                $('.sample').eq(2).css('color', 'red');
                $('.sample').eq(3).css('color', 'white');
            } else if ($WIN.scrollTop() < 8800) {
                $('.sample').eq(2).css('color', 'white');
                $('.sample').eq(3).css('color', 'red');
                $('.sample').eq(4).css('color', 'white');
            } else if ($WIN.scrollTop() < 9000) {
                $('.sample').eq(3).css('color', 'white');
                $('.sample').eq(4).css('color', 'red');
                $('.sample').eq(5).css('color', 'white');
            }
        });
    };

    //initializations
    (function clInit() {

        followScroll();
        Preloader();
        menuOnScrolldown();
        offCanvas();
        photoswipe();
        statCount();
        masonryFolio();
        smoothScroll();
        placeholder();
        alertBoxes();
        clAOS();
        backToTop();
        firstSubmenu();
        secondSubmenu();
        mobileNavigation();
        openGallery();

    })();

})(jQuery);
