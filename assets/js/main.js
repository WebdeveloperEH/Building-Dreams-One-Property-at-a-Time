(function($) {
    "use strict";

    const $documentOn = $(document);
    const $windowOn = $(window);

    $documentOn.ready(function() {

        /* ================================
       Mobile Menu Js Start
    ================================ */

        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        /* ================================
       Sidebar Toggle Js Start
    ================================ */

        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        /* ================================
       Body Overlay Js Start
    ================================ */

        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");
            $(".body-overlay").removeClass("opened");
        });

        /* ================================
       Sticky Header Js Start
    ================================ */

        $windowOn.on("scroll", function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });

        /* ================================
       Video & Image Popup Js Start
    ================================ */

        $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $(".video-popup").magnificPopup({
            type: "iframe",
            callbacks: {},
        });

        /* ================================
       Counterup Js Start
    ================================ */

        $(".count").counterUp({
            delay: 15,
            time: 4000,
        });

        /* ================================
       Wow Animation Js Start
    ================================ */

        new WOW().init();

        /* ================================
       Nice Select Js Start
    ================================ */

        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

        /* ================================
       Parallaxie Js Start
    ================================ */

        if ($('.parallaxie').length && $(window).width() > 991) {
            if ($(window).width() > 768) {
                $('.parallaxie').parallaxie({
                    speed: 0.55,
                    offset: 0,
                });
            }
        }

        /* ================================
        Image-Slider Js Start
        ================================ */
        if ($(".imgSlider").length > 0) {
            var swiper = new Swiper(".imgSlider", {
                spaceBetween: 24,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
        }

        if ($(".imgSlider2").length > 0) {
            var swiper2 = new Swiper(".imgSlider2", {
                spaceBetween: 10,
                thumbs: {
                    swiper: swiper,
                },
            });
        }



        /* ================================
       Propertie Slider Js Start
    ================================ */

        if ($('.propertie-slider1').length > 0) {
            const propertieSlider1 = new Swiper(".propertie-slider1", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($('.propertie-slider2').length > 0) {
            const propertieSlider2 = new Swiper(".propertie-slider2", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    reverseDirection: true, // 👉 scrolls to the right
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 2.8,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1.2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        if ($('.propertie-slider3').length > 0) {
            const propertieSlider3 = new Swiper(".propertie-slider3", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                centeredSlides: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1199: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        /* ================================
       Project Slider Js Start
    ================================ */

        if ($('.project-slider').length > 0) {
            const projectSlider = new Swiper(".project-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                breakpoints: {
                    1399: {
                        slidesPerView: 5,
                    },
                    1199: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 3,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    575: {
                        slidesPerView: 2,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        /* ================================
       GT Team Slider Js Start
    ================================ */
        if ($('.st-team-slider').length > 0) {
            const stTeamSlider = new Swiper(".st-team-slider", {
                effect: "coverflow",
                spaceBetween: 60,
                autoplay: true,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    scale: 1
                },

                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },

                breakpoints: {
                    1399: {
                        slidesPerView: 3,
                        spaceBetween: 60,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            });
        }

        /* ================================
          Team ACTIVE Js Start
        ================================ */
        const getSlide2 = $('gt-team-wrapper, .team-box-img-2').length - 1;
        const slideCal2 = 100 / getSlide2 + '%';

        $('.gt-team-wrapper').css({
            "width": slideCal2
        });

        $(document).on('mouseenter', '.team-box-img-2', function() {
            $('.team-box-img-2').removeClass('active');
            $(this).addClass('active');
        });

        /* ================================
       Testimonial Slider Js Start
    ================================ */

        if ($('.testimonial-slider').length > 0) {
            const testimonialSlider = new Swiper(".testimonial-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: ".array-prev",
                    prevEl: ".array-next",
                },
                pagination: {
                    el: ".dot",
                    clickable: true,
                },
            });
        }

        if ($('.testi-box-slider').length > 0) {
            const testiBoxSlider = new Swiper(".testi-box-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
            });
        }

        if ($('.testi-image-slider').length > 0) {
            const testiImageSlider = new Swiper(".testi-image-slider", {
                spaceBetween: 30,
                speed: 1300,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 4,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    575: {
                        slidesPerView: 3,
                    },
                    400: {
                        slidesPerView: 1,
                    },
                },
            });
        }


        /* ================================
            Testimonial Slider Js Start
         ================================ */
        const getSlide = $('listing-wrapper, .listing-items-thumb').length - 1;
        const slideCal = 100 / getSlide + '%';

        $('.listing-items-thumb').css({
            "width": slideCal
        });

        $(document).on('mouseenter', '.listing-items-thumb', function() {
            $('.listing-items-thumb').removeClass('active');
            $(this).addClass('active');
        });


        /* ================================
       Mouse Cursor Animation Js Start
    ================================ */

        if ($(".mouseCursor").length > 0) {
            function itCursor() {
                var myCursor = jQuery(".mouseCursor");
                if (myCursor.length) {
                    if ($("body")) {
                        const e = document.querySelector(".cursor-inner"),
                            t = document.querySelector(".cursor-outer");
                        let n,
                            i = 0,
                            o = !1;
                        (window.onmousemove = function(s) {
                            o ||
                                (t.style.transform =
                                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                                (e.style.transform =
                                    "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                                (n = s.clientY),
                                (i = s.clientX);
                        }),
                        $("body").on(
                                "mouseenter",
                                "button, a, .cursor-pointer",
                                function() {
                                    e.classList.add("cursor-hover"),
                                        t.classList.add("cursor-hover");
                                }
                            ),
                            $("body").on(
                                "mouseleave",
                                "button, a, .cursor-pointer",
                                function() {
                                    ($(this).is("a", "button") &&
                                        $(this).closest(".cursor-pointer").length) ||
                                    (e.classList.remove("cursor-hover"),
                                        t.classList.remove("cursor-hover"));
                                }
                            ),
                            (e.style.visibility = "visible"),
                            (t.style.visibility = "visible");
                    }
                }
            }
            itCursor();
        }

        /* ================================
       Search Popup Toggle Js Start
    ================================ */

        if ($(".search-toggler").length) {
            $(".search-toggler").on("click", function(e) {
                e.preventDefault();
                $(".search-popup").toggleClass("active");
                $("body").toggleClass("locked");
            });
        }


        /* ================================
            Back To Top Button Js Start
         ================================ */

        $windowOn.on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#st-back-top").addClass("show");
            } else {
                $("#st-back-top").removeClass("show");
            }
        });

        $documentOn.on('click', '#st-back-top', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });


    }); // End Document Ready Function

    //Price Range Slideer
    document.addEventListener("DOMContentLoaded", function() {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");

        function updateAmount() {
            const minValue = parseInt(minSlider.value, 10);
            const maxValue = parseInt(maxSlider.value, 10);

            // Ensure the minimum value is always lower than the maximum value
            if (minValue > maxValue) {
                minSlider.value = maxValue;
            }

            // Update the displayed price range
            amount.value = "$" + minSlider.value + " - $" + maxSlider.value;

            // Calculate the percentage positions of the sliders
            const minPercent =
                ((minSlider.value - minSlider.min) /
                    (minSlider.max - minSlider.min)) *
                100;
            const maxPercent =
                ((maxSlider.value - maxSlider.min) /
                    (maxSlider.max - maxSlider.min)) *
                100;

            // Update the background gradient to show the active track color
            minSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #E3572D ${minPercent}%, #E3572D ${maxPercent}%, #000 ${maxPercent}%)`;
            maxSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #E3572D ${minPercent}%, #E3572D ${maxPercent}%, #000 ${maxPercent}%)`;
        }

        // Initialize the sliders and track with default values
        amount && updateAmount();

        // if (minSlider && maxSlider) {

        // Add event listeners for both sliders
        minSlider && minSlider.addEventListener("input", updateAmount);
        maxSlider && maxSlider.addEventListener("input", updateAmount);
        // }
    });

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }

    loader();


})(jQuery);  // End jQuery