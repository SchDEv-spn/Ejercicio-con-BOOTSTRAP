$(document).ready(function () {
    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1080, // tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 767, // mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    })
    $('.slider-reviews').slick({
        slidesToShow: 3,         // desktop
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,     // tablets
                settings: {
                    slidesToShow: 2,  // <-- aquí el cambio
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,      // móviles medianos
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});
AOS.init({
    duration: 1000, // duración en ms de cada animación
    once: true,     // true = solo se anima una vez
});
