$(document).ready(function(){
    $('.people__items').slick({
        slidesToShow: 3,
        arrows: false,
         autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    vertical: true,
                }
            }
        ]
    });
  });