$(document).ready(function() {


    const deals = new Swiper('.deals-swiper-js', {
        speed: 500,
        // autoplay: {
        //     delay: 5000,
        // },
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,

        navigation: {
            nextEl: '.icon_arrow_right',
            prevEl: '.icon_arrow_left',
        },

        pagination: {
            el: '.deals__dotted',
            clickable: true,
        },

        breakpoints: {
            768: {
                spaceBetween: 40,
                slidesPerView: 1,
                loop: false,

                grid: {
                    rows: 2,
                    fill: "col",
                },

            },
        }
    });

});
