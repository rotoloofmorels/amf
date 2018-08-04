/* ===================================================================
 * Transcend - Main JS
 *
 * ------------------------------------------------------------------- */
jQuery.fn.clickToggle = function(a,b) {
    function cb(){ [b,a][this._tog^=1].call(this); }
    return this.on("click", cb);
  };
var ptr = 0;
var a = function(e) {   


   
    $(this).next().css({'width':'1200px',
    'overflow':'hidden',
    'display':'block',
    'margin-right':'200px',
    'opacity':'1',
    'visibility':'visible',
    'z-index':'-90',
   
    'cursor': 'pointer'});
   $(this).css({'color':'red'});
   ptr =1;

    };


var b = function() {
    $(this).next().css({'opacity':'0','display':'none'});
    $(this).css({'color':'white'});

  
        $('#zaza3').css({"display":"none",'opacity':'0','z-index':'-90'});
 ptr = 0;

        
};




var abc = function() {
    
    $("html").fadeIn("slow");
    $("#top").fadeIn("slow");
    
            $("#preloader").fadeOut(500);
    
    };


    var count = 0;
        var sites = ["//e.issuu.com/embed.html#18258481/63268895","//e.issuu.com/embed.html#18258481/63268895","//e.issuu.com/embed.html#18258481/63268895"]
        function next() {
        
        if(count<2){
        var x = Number(++count);
        document.getElementById('lola').src = sites[x];
     
        if(count==2){
        document.getElementById('issuu_next').style.display = "none";
        }
        }
        document.getElementById('issuu_prev').style.display = "block";
        }   
        
        function prev() {
        
        if(count>0){
        var x = Number(--count);
        document.getElementById('lola').src = sites[x];

        if(count==0){
        document.getElementById('issuu_prev').style.display = "none";
        }
        }
        document.getElementById('issuu_next').style.display = "block";
        }  

var cnt = 0;
  var clSmooth = function(s,d) {

     /* 
    $.fn.clickOff = function(callback, selfDestroy) {
        var clicked = false;
        var parent = this;
        var destroy = selfDestroy || true;
        
        parent.click(function() {
            clicked = true;
        });
        
        $(document).click(function(event) { 
            if (!clicked) {
                callback(parent, event);
            }
            if (destroy) {
                //parent.clickOff = function() {};
                //parent.off("click");
                //$(document).off("click");
                //parent.off("clickOff");
            };
            clicked = false;
        });
    };
*/
    

         
 //   $(".smooth").clickToggle(s,d);


$(".smooth").each(function(){$(this).on('click', function(e){
  
        e.preventDefault();
        e.stopPropagation();
     /*   if($(this).siblings().next().hasClass("opena")){
            $(this).siblings().next().removeClass("opena");
     

        }*/
    
  //      $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
        if($(".smooth").not(this).next().hasClass("opena")){
        $(".smooth").next().removeClass("opena");
        $(".smooth").removeClass("selected");

             $("#ams").removeClass("saa");
             $("#ams").removeClass("saas");
             $(".smooth3").next().removeClass("openb");
        }
       
        $(this).next().toggleClass("opena");
        $("#ams").toggleClass("saa");

          if($(".smooth3").next().hasClass("openb")){
            $(".smooth3").next().removeClass("openb");
            $("#ams").removeClass("saa");
            $("#ams").removeClass("saas");
            $('.header-menu-toggle').removeClass('vis');
          
        }
        $(this).toggleClass("selected");

    });
});

/*
 $(".smooth").on('click', function(e){

  
    e.preventDefault();
    e.stopPropagation();
  




 //   $(this).next().attr("id", "opena");

$(this).next().toggleClass("opena");
*/
/*
    if($(this).next().attr("id") === "zaza"){
        $(this).next().attr("id", "opena"); 
        $(this).css({"color":"red"});
    } else{
        
    $(this).next().attr("id", "zaza");
    $(".smooth3").next().attr("id", "zaza3");
    $(this).css({"color":"white"});
    }
    */
};


var clSmooth1 = function(s,d) {
    
    
 $(".smooth3").on('click', function(e){
    e.preventDefault();
    e.stopPropagation();

    if($(".smooth3").not(this).next().hasClass("openb")){
        $(".smooth3").next().removeClass("openb");
        $(".smooth3").removeClass("selected3");
        $('.header-menu-toggle').removeClass('vis');
        }
        $("#ams").toggleClass("saas");
        $(this).next().toggleClass("openb");
        $(this).toggleClass("selected3");
        $('.header-menu-toggle').toggleClass('vis');

 //   $(this).next().attr("id", "opena");
/*
    if($(this).next().attr("id") === "zaza3"){
        $(this).next().attr("id", "openb"); 
        $(this).css({"color":"red"});
    } else{
        
    $(this).next().attr("id", "zaza3");
    $(this).css({"color":"white"});
        
    }*/
});
};



(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);


   /* Preloader
    * -------------------------------------------------- */
   var abc = function() {

    $("html").fadeIn("slow");
    $("#top").fadeIn("slow");
    
                $("#preloader").fadeOut(500);
    
        };
    var ptr = 0;
    var ptr2 = 0;

    var clPreloader = function() {
      var menuTrigger = $('.home-scroll__icon');    
        $("html").addClass('cl-preload');
menuTrigger.css('display','none');
 
        $WIN.on('load', function() {

            //force page scroll position to top at page refresh
            // $('html, body').animate({ scrollTop: 0 }, 'normal');

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('cl-preload');
            $("html").addClass('cl-loaded');
        
        });
    };


   /* Menu on Scrolldown
    * ------------------------------------------------------ */
    var clMenuOnScrolldown = function() {
        
        var menuTrigger = $('.home-scroll__icon');

        $WIN.on('scroll', function() {

            if ($WIN.scrollTop() < 150) {
                menuTrigger.css('display','none');
            }
            else {
                menuTrigger.css('display','block');
            }

        });
    };

var oioi = function(){
if(window.matchMedia('(max-width: 800px)').matches)
{
    $('link[rel=stylesheet][href="css/mobile_menu.css"]').remove();
}

 
   
   var menuTrigger = $(".mainmenu li");



  menuTrigger.on('click', function(e){

       
       

  if($(this).siblings().find('ul').hasClass('open_submenu')){

    $(this).siblings().find('ul').removeClass('open_submenu');
  }

$(this).find('.submenu').toggleClass('open_submenu');
$(this).find('.ikon').toggleClass('non_ikon');

  
  });



  
}




   /* OffCanvas Menu
    * ------------------------------------------------------ */
   var clOffCanvas2 = function() {

    var menuTrigger     = $('.thiss'),
        nav             = $('#popo'),
        closeButton     = nav.find('.header-nav__close'),
        siteBody        = $('body'),
        mainContents    = $('section, footer');

    // open-close menu by clicking on the menu icon
    menuTrigger.on('click', function(e){
        e.preventDefault();
        siteBody.addClass('menu-is-open1');
    });

    // close menu by clicking the close button
    closeButton.on('click', function(e){
        e.preventDefault();
        menuTrigger.trigger('click');
    });

 /*   $("#target").mouseenter(function(e) {
        $("#sub").toggle();
    e.stopPropagation();
    e.preventDefault();
  
});

  $("#sub").mouseenter(function(e) {
        $("#sub-2").toggle();
    e.stopPropagation();
    e.preventDefault();
});*/


    // close menu clicking outside the menu itself
    siteBody.on('click', function(e){
        if( !$(e.target).is('.smoothscroll, a, ul, li, #sub, .header-nav, .header-nav__content, .header-menu-toggle, .header-menu-toggle span') ) {
       //     siteBody.removeClass('menu-is-open');
       $("#ams").removeClass("saa");
       $("#ams").removeClass("saas");
       $("#ams").removeClass("opena");
     
        }
    });

};   
   
   
var funs = function(){


    $("#gal").on('click', function(e) {
        e.preventDefault();
        $(".header-menu-toggle").css({"display":"none"});
        $("#sass").trigger('click');
   
         

});

};

var clOffCanvas3 = function() {

    var menuTrigger     = $('.header-menu-toggle1');
    menuTrigger.on('click', function(e){
        e.preventDefault();
        

    });
};
    var clOffCanvas = function() {

        var menuTrigger     = $('.header-menu-toggle'),
            nav             = $('.header-nav'),
            closeButton     = nav.find('.header-nav__close'),
            siteBody        = $('body'),
            mainContents    = $('section, footer');

        // open-close menu by clicking on the menu icon
        menuTrigger.on('click', function(e){
            e.preventDefault();
       /*     $('.smooth').css({"color":"white"});
            $('.smooth3').css({"color":"white"});
                
                $('#zaza').css({"display":"none",'z-index':'-90'});
                $('#zaza3').css({"display":"none",'z-index':'-90'});

       */
           $('.header-menu-toggle').removeClass('vis');
            $(".smooth3").next().removeClass("openb");
            $(".smooth3").removeClass("selected3");
            $("#ams").removeClass("saas");

        });
        closeButton.on('click', function(e){
            if($('#nav-icon4').hasClass('open')){
             //   $('#nav-icon4').removeClass('open');
    
            }
        });
        // close menu by clicking the close button
        siteBody.on('click', function(e){
            if( !$(e.target).is('.smoothscroll, a, ul, li, #sub, #nav-icon4, .header-nav__content, .header-menu-toggle, .header-menu-toggle span,.header-menu-icon') ) {
                $("#ams").removeClass("saa");
                $("#ams").removeClass("saas");
                $(".smooth").next().removeClass("opena");
                $(".smooth3").next().removeClass("openb");
                $('.header-menu-toggle').removeClass('vis');
                $(".smooth3").removeClass("selected3");
                $(".smooth").removeClass("selected");
                 }
        });

  
       

    };


   /* photoswipe
    * ----------------------------------------------------- */
    var clPhotoswipe = function() {
        var items = [],
            $pswp = $('.pswp')[0],
            $folioItems = $('.item-folio');

        // get items
        $folioItems.each( function(i) {

            var $folio = $(this),
                $thumbLink =  $folio.find('.thumb-link'),
                $title = $folio.find('.item-folio__title'),
                $caption = $folio.find('.item-folio__caption'),
                $titleText = '<h4>' + $.trim($title.html()) + '</h4>',
                $captionText = $.trim($caption.html()),
                $href = $thumbLink.attr('href'),
                $size = $thumbLink.data('size').split('x'),
                $width  = $size[0],
                $height = $size[1];
        
            var item = {
                src  : $href,
                w    : $width,
                h    : $height
            }

            if ($caption.length > 0) {
                item.title = $.trim($titleText + $captionText);
            }

            items.push(item);
        });

        // bind click event
        $folioItems.each(function(i) {

            $(this).on('click', function(e) {
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


   /* Stat Counter
    * ------------------------------------------------------ */
    var clStatCount = function() {
        
        var statSection = $(".s-stats"),
            stats = $(".stats__count");

        statSection.waypoint({

            handler: function(direction) {

                if (direction === "down") {

                    stats.each(function () {
                        var $this = $(this);

                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
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


   /* Masonry
    * ---------------------------------------------------- */ 
    var clMasonryFolio = function () {
        
        var containerBricks = $('.masonry');

        containerBricks.imagesLoaded(function () {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
            
            });
        });

        // layout Masonry after each image loads
        containerBricks.imagesLoaded().progress( function() {
            containerBricks.masonry({
                itemSelector: '.masonry__brick',
            
            });
            containerBricks.masonry('layout');
        });
    };


    /* slick slider
     * ------------------------------------------------------ */
    var clSlickSlider = function() {
        
        $('.slick-slider js-slick').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };

    var clSlickSlider2 = function() {
        
        $('.testimonials__slide').slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnFocus: false,
            autoplaySpeed: 1500,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };




   /* Smooth Scrolling
    * ------------------------------------------------------ */
    var clSmoothScroll = function() {
        
        $('.smoothscroll').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
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



    var clSmoothScroll1 = function() {
        
        $('.smooth1').on('click', function (e) {
            var target = this.hash,
            $target    = $(target);
            
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
   /* Placeholder Plugin Settings
    * ------------------------------------------------------ */
    var clPlaceholder = function() {
        $('input, textarea, select').placeholder();  
    };


   /* Alert Boxes
    * ------------------------------------------------------ */
    var clAlertBoxes = function() {

        $('.alert-box').on('click', '.alert-box__close', function() {
            $(this).parent().fadeOut(500);
        }); 

    };


   /* Animate On Scroll
    * ------------------------------------------------------ */
    var clAOS = function() {
        
        AOS.init( {
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true,
            disable: 'mobile'
        });

    };

    $(function(){
        $('*[data-aos|="nojs"]').each(function(){
          var $this = $(this); 
          $this.attr('data-aos',$this.attr('data-aos').replace('nojs-',''));
        });
        AOS.init( {
            offset: 100,
            duration: 600,
            easing: 'ease-in-sine',
            delay: 100,
            once: true,
            disable: 'mobile'
        });

    });

   /* AjaxChimp
    * ------------------------------------------------------ */
    var clAjaxChimp = function() {
        
        $('#mc-form').ajaxChimp({
            language: 'es',
            url: cfg.mailChimpURL
        });

        // Mailchimp translation
        //
        //  Defaults:
        //	 'submit': 'Submitting...',
        //  0: 'We have sent you a confirmation email',
        //  1: 'Please enter a value',
        //  2: 'An email address must contain a single @',
        //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
        //  4: 'The username portion of the email address is invalid (the portion before the @: )',
        //  5: 'This email address looks fake or invalid. Please enter a real email address'

        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: '<i class="fas fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fas fa-exclamation-circle"></i> You must enter a valid e-mail address.',
            2: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
            3: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
            4: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.',
            5: '<i class="fas fa-exclamation-circle"></i> E-mail address is not valid.'
        } 

    };


   /* Back to Top
    * ------------------------------------------------------ */
    var clBackToTop = function() {
        
        var pxShow  = 500,         // height on which the button will show
        fadeInTime  = 400,         // how slow/fast you want the button to show
        fadeOutTime = 400,         // how slow/fast you want the button to hide
        scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
        goTopButton = $(".cl-go-top")
        
        // Show or hide the sticky footer button
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= pxShow) {
                goTopButton.fadeIn(fadeInTime);
            } else {
                goTopButton.fadeOut(fadeOutTime);
            }
        });
    };
    var followScroll = function() {
        
        var menuTrigger = $('.sample').eq(0);

        $WIN.on('scroll', function() {


            if ($WIN.scrollTop() == 0) {
        
                $('#ams').css('opacity','0');
            }
            if ($WIN.scrollTop() > 0) {
        
                $('#ams').css('opacity','1');
            }


            if ($WIN.scrollTop() < 490) {
        
      
         
                $('.sample').eq(0).css('color','red');
        
                $('.sample').eq(1).css('color','white');
             
            }
            
            else if ($WIN.scrollTop() < 2090) {
            
                $('.sample').eq(0).css('color','white');
        
                $('.sample').eq(1).css('color','red');
                $('.sample').eq(2).css('color','white');
            }

            else if ($WIN.scrollTop() < 3900) {

                $('.sample').eq(1).css('color','white');
          
                $('.sample').eq(2).css('color','red');
                $('.sample').eq(3).css('color','white');
            }

            else if ($WIN.scrollTop() < 8800) {

                $('.sample').eq(2).css('color','white');
          
                $('.sample').eq(3).css('color','red');
                $('.sample').eq(4).css('color','white');
            }

            else if ($WIN.scrollTop() < 9000) {

                $('.sample').eq(3).css('color','white');
          
                $('.sample').eq(4).css('color','red');
                $('.sample').eq(5).css('color','white');
            }


            

            
       

        });
    };

    (function($) {
        $.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));
   /* Initialize
    * ------------------------------------------------------ */
    (function clInit() {
       
        followScroll();
        clPreloader();
        clMenuOnScrolldown();
        clOffCanvas();
        clPhotoswipe();
        clStatCount();
        clMasonryFolio();
//   clSlickSlider();
 //      clSlickSlider2();
          clSmoothScroll1();
        clSmoothScroll();
        clPlaceholder();
        clAlertBoxes();
        clAOS();
        clAjaxChimp();
        clBackToTop();
        clSmooth(a,b);
        clSmooth1();
oioi();
funs();

    })();
        
})(jQuery);
