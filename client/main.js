var dp = jQuery;
dp.noConflict();
dp(document).ready(function() {

    //SMOOTH SCROLL
    dp('.sscroll').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        dp('html,body').animate({
            scrollTop: dp(this.hash).offset().top
        }, 1200);
    });
    //RESPONSIVE VIDEO
    if(dp.fn.fitVids){
        dp('.fitvids').fitVids();
    }
    //BIG SLIDE
    dp('#home-slide').superslides({
        animation: 'fade', // You can choose either fade or slide
        play: 6000,
        pagination: false
    });
    //SERVICES SLIDER
    dp("#slider-services").sudoSlider({
        speed: 650,
        auto: true,
        pause: 3000,
        prevNext: false,
        responsive: true,
        useCSS: true,
        continuous: true,
        effect: "slide",
        updateBefore: true
    });
    //PORTFOLIO
    dp('.portfolioContainer').mixitup({
        filterSelector: '.portfolioFilter a',
        targetSelector: '.portfolio-item',
        effects: ['fade', 'scale']
    });
    //QUOTE SLIDE
    dp("#quote-slider").sudoSlider({
        customLink: 'a.quoteLink',
        speed: 425,
        prevNext: true,
        responsive: true,
        prevHtml: '<a href="#" class="quote-left-indicator"><i class="fa fa-angle-left"></i></a>',
        nextHtml: '<a href="#" class="quote-right-indicator"><i class="fa fa-angle-right"></i></a>',
        useCSS: true,
        continuous: true,
        effect: "fadeOutIn",
        updateBefore: true
    });

    //  Responsive layout, resizing the items
    if (dp('.client-slider').length > 0) {
        dp('.client-slider').carouFredSel({
            responsive: true,
            width: '100%',
            scroll: 1,
            items: {
                width: 116,
                //  height: '30%',  //  optionally resize item-height
                visible: {
                    min: 1,
                    max: 5
                }
            }
        });
    }

    //BACK TO TOP
    dp("#backtotop").backToTop();
    //CALL TO ACTION
    /*
    var bg_img = dp(".call-ta").attr('data-background');
    dp(".call-ta").backstretch(bg_img);
    */
    //JQUERY Mobile Devices Responsive
    dp('body').mobileResponsive();


    //Bootstrap Tooltip
    dp('a[data-toggle="tooltip"]').tooltip();
    //NIVOLightbox
    if(dp.fn.nivoLightbox){
        dp('.popup').nivoLightbox({
            effect: 'fall'
        });
    }
});
dp(window).load(function() {
    dp('#loader').fadeOut(1000, "linear");
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
  console.log("testing popup");
});
