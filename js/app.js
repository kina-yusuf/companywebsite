$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu').toggleClass('show');
    });
});
$(document).ready(function(){
    $('.slider-header').slick({
        dots: true,
        slidesToShow: 1, 
        slidesToScroll: 1
    });
});


/* Man slider */ 

$(document).ready(function(){
    $('.slider-man').slick({
        slidesToShow: 5, 
        slidesToScroll: 1, 
        prevArrow: $('.prev-man'), 
        nextArrow: $('.next-man'), 
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