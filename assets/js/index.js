/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function () {

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

        // headroom.js options
        $("#header").headroom({
            "tolerance": 5,
            "offset": 345,
            "classes": {
                "initial": "animated",
                "pinned": "slideDown",
                "unpinned": "slideUp"
            }
        });

        // to destroy
        $("#header").headroom("destroy");

        // Scroll To Top
        // Show or hide scroll to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 395) {
                $('.go-to-top').fadeIn(500);
            } else {
                $('.go-to-top').fadeOut(500);
            }
        });

        // Animate the scroll to top
        $('.go-to-top').click(function (event) {
            event.preventDefault();

            $('html, body').animate({scrollTop: 0}, 800);
        })

        // Animate Top Banner Text
        $('.banner-head').addClass('animated fadeInDown');

    });

}(jQuery));