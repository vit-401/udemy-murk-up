$(function(){
    // Mobile menu toggle
    $('.menu__burger').on('click', function(){
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    // Close menu when clicking outside
    $(document).on('click', function(e){
        if (!$(e.target).closest('.menu, .menu__burger').length) {
            $('.menu__burger').removeClass('active');
            $('.menu').removeClass('active');
        }
    });

    // Close menu when clicking a menu link
    $('.menu__link').on('click', function(){
        $('.menu__burger').removeClass('active');
        $('.menu').removeClass('active');
    });
});