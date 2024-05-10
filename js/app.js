$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu').toggleClass('show');
    });
});
$(document).ready(function(){
    $('.slider-header').slick({
        dots: false,
        slidesToShow: 1, 
        slidesToScroll: 1
    });
});


/* Man slider */ 

$(document).ready(function(){
    $('.slider-product').slick({
        slidesToShow: 5, 
        slidesToScroll: 1, 
        prevArrow: $('.prev-product'), 
        nextArrow: $('.next-product'), 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
           
        ]
    });
});