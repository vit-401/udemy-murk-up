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

    // Initialize Related Products Slider
    if ($('.related-products__grid').length) {
        console.log('Related products grid found, initializing slider...');
        try {
            $('.related-products__grid').slick({
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
            console.log('Related products slider initialized successfully');
        } catch (error) {
            console.error('Error initializing related products slider:', error);
        }
    } else {
        console.warn('Related products grid not found!');
    }

    // Catalog Page Functionality
    if ($('.catalog').length) {
        // Price Range Slider
        const $priceMin = $('.filters__price-handle--min');
        const $priceMax = $('.filters__price-handle--max');
        const $priceFill = $('.filters__price-fill');
        const $priceInputMin = $('.filters__price-input[data-price="min"]');
        const $priceInputMax = $('.filters__price-input[data-price="max"]');
        const minPrice = 0;
        const maxPrice = 1000000;

        function formatPrice(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        }

        function updatePriceSlider() {
            let minVal = parseInt($priceMin.val()) || minPrice;
            let maxVal = parseInt($priceMax.val()) || maxPrice;
            
            // Ensure values are within bounds
            minVal = Math.max(minPrice, Math.min(maxPrice, minVal));
            maxVal = Math.max(minPrice, Math.min(maxPrice, maxVal));
            
            // Ensure min doesn't exceed max - swap if needed
            if (minVal > maxVal) {
                const temp = minVal;
                minVal = maxVal;
                maxVal = temp;
                $priceMin.val(minVal);
                $priceMax.val(maxVal);
            }

            // Calculate percentages
            const minPercent = (minVal / maxPrice) * 100;
            const maxPercent = (maxVal / maxPrice) * 100;
            const fillWidth = maxPercent - minPercent;

            // Always update fill to be between the handles
            $priceFill.css({
                left: minPercent + '%',
                width: fillWidth + '%'
            });

            // Update input fields
            if ($priceInputMin.length) {
                $priceInputMin.val(formatPrice(minVal));
            }
            if ($priceInputMax.length) {
                $priceInputMax.val(formatPrice(maxVal));
            }
        }

        function updateFromInput() {
            let value = $priceInputMin.val().replace(/\s/g, '');
            value = parseInt(value) || minPrice;
            value = Math.max(minPrice, Math.min(maxPrice, value));
            $priceMin.val(value);
            updatePriceSlider();
        }

        function updateToInput() {
            let value = $priceInputMax.val().replace(/\s/g, '');
            value = parseInt(value) || maxPrice;
            value = Math.max(minPrice, Math.min(maxPrice, value));
            $priceMax.val(value);
            updatePriceSlider();
        }

        // Bind events for real-time updates while dragging
        $priceMin.on('input', updatePriceSlider);
        $priceMin.on('change', updatePriceSlider);
        $priceMax.on('input', updatePriceSlider);
        $priceMax.on('change', updatePriceSlider);
        
        // Also handle touch events for mobile
        $priceMin.on('touchmove', updatePriceSlider);
        $priceMax.on('touchmove', updatePriceSlider);
        
        // Update on mouseup to ensure final position
        $priceMin.on('mouseup', updatePriceSlider);
        $priceMax.on('mouseup', updatePriceSlider);
        
        // Update inputs when user types
        $priceInputMin.on('blur', updateFromInput);
        $priceInputMax.on('blur', updateToInput);

        // Initialize slider on page load
        if ($priceMin.length && $priceMax.length && $priceFill.length) {
            updatePriceSlider();
        }

        // Collapsible Filter Groups
        $('.filters__group-toggle').on('click', function() {
            const $group = $(this).closest('.filters__group');
            $group.toggleClass('collapsed');
        });

        // Promotions Badge Toggle
        $('.filters__badge').on('click', function() {
            $(this).toggleClass('filters__badge--active');
        });

        // Dropdown functionality
        $('.filters__dropdown-btn').on('click', function(e) {
            e.stopPropagation();
            const $dropdown = $(this).closest('.filters__dropdown');
            const $menu = $dropdown.find('.filters__dropdown-menu');
            
            // Close other dropdowns
            $('.filters__dropdown-menu').not($menu).hide();
            
            $menu.toggle();
        });

        $('.filters__dropdown-item').on('click', function() {
            const value = $(this).text();
            const $dropdown = $(this).closest('.filters__dropdown');
            $dropdown.find('.filters__dropdown-btn').text(value);
            $dropdown.find('.filters__dropdown-menu').hide();
        });

        // Close dropdowns when clicking outside
        $(document).on('click', function(e) {
            if (!$(e.target).closest('.filters__dropdown').length) {
                $('.filters__dropdown-menu').hide();
            }
        });
    }
});