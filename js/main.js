$(function(){
    const $burger = $('.menu__burger');
    const $menu = $('.menu');
    const $overlay = $('.menu__overlay');
    const $body = $('body');

    function openMenu() {
        $burger.addClass('active');
        $menu.addClass('active');
        $overlay.addClass('active');
        $body.css('overflow', 'hidden');
    }

    function closeMenu() {
        $burger.removeClass('active');
        $menu.removeClass('active');
        $overlay.removeClass('active');
        $body.css('overflow', '');
    }

    // Mobile menu toggle
    $burger.on('click', function(e){
        e.stopPropagation();
        if ($burger.hasClass('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when clicking overlay
    $overlay.on('click', function(){
        closeMenu();
    });

    // Close menu when clicking a menu link
    $('.menu__link').on('click', function(){
        closeMenu();
    });

    // Close menu on escape key
    $(document).on('keydown', function(e){
        if (e.key === 'Escape' && $burger.hasClass('active')) {
            closeMenu();
        }
    });
});