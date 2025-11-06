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

    // Initialize Slick Slider
    $('.slider__inner').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        cssEase: 'ease',
        prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    dots: true
                }
            }
        ]
    });

    // Search tabs functionality
    const $tabs = $('.tabs__item');
    const $searchInput = $('#searchInput');
    
    const placeholders = {
        number: 'Введите номер',
        brand: 'Введите марку',
        name: 'Введите название товара'
    };

    $tabs.on('click', function() {
        const $this = $(this);
        const tabType = $this.data('tab');
        
        $tabs.removeClass('active');
        $this.addClass('active');
        $searchInput.attr('placeholder', placeholders[tabType] || 'Введите марку');
    });

    // Initialize Products Slider
    if ($('.products__grid-products').length) {
        console.log('Products grid found, initializing slider...');
        try {
            $('.products__grid-products').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false,
             
                speed: 500,
                prevArrow: '<button type="button" class="slick-prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18L9 12L15 6" stroke="#2F3035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 18L15 12L9 6" stroke="#2F3035" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            console.log('Products slider initialized successfully');
            console.log('Arrows found:', $('.products__grid-products .slick-arrow').length);
        } catch (error) {
            console.error('Error initializing products slider:', error);
        }
    } else {
        console.warn('Products grid not found!');
    }
});