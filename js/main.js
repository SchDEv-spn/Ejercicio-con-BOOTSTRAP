$(document).ready(function () {
    $('.product-slider').slick({
        slidesToShow: 4,         // cantidad de productos visibles
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,     // tablets
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,     // móviles medianos
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 400,     // móviles pequeños
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })
});
