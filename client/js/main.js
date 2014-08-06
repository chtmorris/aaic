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

    //MAP
    var lats = dp("#map").attr('data-lat');
    var lngs = dp("#map").attr('data-lng');
    var data_address = dp("#map").attr('data-address');
    var color = dp("#map").attr('data-color');
    var saturation = 100;
    dp("#map").gmap3({
        map: {
            options: {
                center: [lats, lngs],
                zoom: 15,
                mapTypeId: "style1",
                navigationControl: 0,
                scrollwheel: false,
                zoomControl: 0,
                disableDefaultUI: true,
                streetViewControl: 0,
                draggable: 0,
            }
        },
        styledmaptype: {
            id: "style1",
            options: {
                name: "Style 1"
            },
            styles: [{
                featureType: "landscape",
                stylers: [{
                    hue: "#000"
                }, {
                    saturation: -100
                }, {
                    lightness: 40
                }, {
                    gamma: 1
                }]
            }, {
                featureType: "road.highway",
                stylers: [{
                    hue: color
                }, {
                    saturation: saturation
                }, {
                    lightness: 20
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.arterial",
                stylers: [{
                    hue: color
                }, {
                    saturation: saturation
                }, {
                    lightness: 20
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.local",
                stylers: [{
                    hue: color
                }, {
                    saturation: saturation
                }, {
                    lightness: 50
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "water",
                stylers: [{
                    hue: "#000"
                }, {
                    saturation: -100
                }, {
                    lightness: 15
                }, {
                    gamma: 1
                }]
            }, {
                featureType: "poi",
                stylers: [{
                    hue: "#000"
                }, {
                    saturation: -100
                }, {
                    lightness: 25
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }]
        },
        marker: {
            values: [{
                latLng: [lats, lngs],
                data: data_address,
                options: {
                    icon: "images/map-marker.png"
                }
            }],
            options: {
                draggable: false
            },
            events: {
                click: function(marker, event, context) {
                    var map = dp(this).gmap3("get"),
                              infowindow = dp(this).gmap3({
                            get: {
                                name: "infowindow"
                            }
                        });
                    if (infowindow) {
                        infowindow.open(map, marker);
                        infowindow.setContent(context.data);
                    } else {
                        dp(this).gmap3({
                            infowindow: {
                                anchor: marker,
                                options: {
                                    content: context.data
                                }
                            }
                        });
                    }
                }

            }
        }
    });
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
