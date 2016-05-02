        jQuery(document).ready(function($) {

    // tour scripts
    var relatedPortfolio = $("#related-portfolio");

    relatedPortfolio.owlCarousel({
        margin: 10,
        nav: true,
        navText: ['<i class="icon-angle-left"></i>','<i class="icon-angle-right"></i>'],
        autoplay: false,
        autoplayHoverPause: true,
        dots: false,
        loop: false,
        touchDrag: false,
        responsive:{
            0:{ items:1 },
            600:{ items:2 },
            1000:{ items:3 },
            1200:{ items:4 },
            1400:{ items:5 }
        }
    });

                    // setup team slider
                var ocTeam = $("#oc-team-list");
                ocTeam.owlCarousel({
                    items: 1,
                    nav: true,
                    navText : ['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
                    dots:true,
                    loop: true
                });


                // setup google maps api overlay
                $('#google-map').gMap({
                    address: '1420 Bay Street, Port Orchard, WA 98366',
                    zoom: 16,
                    markers: [
                        {
                            address: "1420 Bay Street, Port Orchard, WA 98366",
                            icon: {
                                image: "assets/images/icons/map-icon-red.png",
                                iconsize: [32, 39],
                                iconanchor: [32,39]
                            }
                        }
                    ],
                    doubleclickzoom: false,
                    controls: {
                        draggable: false,
                        panControl: false,
                        zoomControl: false,
                        scrollwheel: false,
                        scaleControl: false,
                        rotateControl: false,
                        mapTypeControl: false,
                        streetViewControl: false,
                        overviewMapControl: false
                    }
                });

                // match heights on special offers
                $('#specials .pricing-box').matchHeight({
                    byRow: false
                });

            });