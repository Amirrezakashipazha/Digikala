$(document).ready(function () {

    $('.loader').css('width', '0');


    $('.dastebandi-header ul li:nth-child(7)').hover(function () {
        $('.border-bottom-items').css('width', '100px');
        $('.border-bottom-items').css('left', '0');
    }, function () {
        $('.border-bottom-items').css('width', '0');
    });
    $('.dastebandi-header ul li:nth-child(6)').hover(function () {
        $('.border-bottom-items').css('width', '95px');
        $('.border-bottom-items').css('left', '100px');
    }, function () {
        $('.border-bottom-items').css('width', '0');
    });
    $('.dastebandi-header ul li:nth-child(5)').hover(function () {
        $('.border-bottom-items').css('width', '115px');
        $('.border-bottom-items').css('left', '195px');
    }, function () {
        $('.border-bottom-items').css('width', '0');
    });
    $('.dastebandi-header ul li:nth-child(4)').hover(function () {
        $('.border-bottom-items').css('width', '150px');
        $('.border-bottom-items').css('left', '312px');
    }, function () {
        $('.border-bottom-items').css('width', '0');
    });
    $('.dastebandi-header ul li:nth-child(3)').hover(function () {
        $('.border-bottom-items').css('width', '125px');
        $('.border-bottom-items').css('left', '465px');
    }, function () {
        $('.border-bottom-items').css('width', '0');
    });
    $('.dastebandi-header ul li:nth-child(2)').hover(function () {
        $('.border-bottom-items').css('width', '105px');
        $('.border-bottom-items').css('left', '590px');
    }, function () {
        $('.border-bottom-items').css('width', '0');
    });
    $('.dastebandi-header ul li:nth-child(1)').hover(function () {
        $('.border-bottom-items').css('width', '120px');
        $('.border-bottom-items').css('left', '694px');

        $('.form-click-search-header').css('opacity', '0');
        $('.form-click-search-header').css('z-index', '-1000');
        $('.d1-search-header form').css({
            'border-radius': '8px',
            'background-color': '#f0f0f1',
            'border': 'none',
            'height': '42px'
        });
    }, function () {
        $('.border-bottom-items').css('width', '0');
    });

    $('.input-search-header').click(function () {
        $('.form-click-search-header').css('opacity', '1');
        $('.form-click-search-header').css('z-index', '1000');
        $('.safhe-black').css('opacity', '1');
        $('.safhe-black').css('z-index', '1000');

        $('.d1-search-header form').css({
            'border-radius': '8px 8px 0 0',
            'background-color': '#fff',
            'border': '1px solid #e0e0e2',
            'border-bottom': 'none',
            'height': '42px'
        });
    });
    $('.safhe-black').click(function () {
        $('.form-click-search-header').css('opacity', '0');
        $('.form-click-search-header').css('z-index', '-1000');
        $('.safhe-black').css('opacity', '0');
        $('.safhe-black').css('z-index', '-1000');
        $('.d1-search-header form').css({
            'border-radius': '8px',
            'background-color': '#f0f0f1',
            'border': '1px solid #fff'
        });
        $('.chose-map').css('opacity', '0');
        $('.chose-map').css('z-index', '-10000');
        $('.location-map').css('opacity', '0');
        $('.location-map').css('z-index', '-10000');
    });
    $('.d-chose-location').click(function () {
        $('.chose-map').css('opacity', '1');
        $('.chose-map').css('z-index', '1000000');

        $('.safhe-black').css('opacity', '1');
        $('.safhe-black').css('z-index', '100000');
    });
    $('.icon-d-chose-location').click(function () {
        $('.chose-map').css('opacity', '0');
        $('.chose-map').css('z-index', '-10000');
        $('.safhe-black').css('opacity', '0');
        $('.safhe-black').css('z-index', '-10000');
    });
    $('.body-chose-map').click(function () {
        $('.location-map').css('opacity', '1');
        $('.location-map').css('z-index', '100000');
        $('.chose-map').css('z-index', '-100000');
    });
    $('.close-location-map').click(function () {
        $('.location-map').css('opacity', '0');
        $('.location-map').css('z-index', '-10000');
        $('.safhe-black').css('opacity', '0');
        $('.safhe-black').css('z-index', '-1000');
        $('.chose-map').css('opacity', '0');
        $('.chose-map').css('z-index', '-10000');
    });
    $('.li-daste-bandiha').hover(function () {
        $('.sec-dastebandi-kalaha').css('display', 'flex');
        $('.safhe-black').css('opacity', '1');
        $('.safhe-black').css('z-index', '1000');
        $('.border-bottom-items').css('width', '120px');
        $('.border-bottom-items').css('left', '694px');

        $('.sec-main-li-dastebandi').css('display', 'inherit');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-dastebandi-kalaha').css('display', 'none');
        $('.safhe-black').css('opacity', '0');
        $('.safhe-black').css('z-index', '-1000');
        $('.border-bottom-items').css('width', '0');
        $('.border-bottom-items').css('left', '694px');
        $('.sec-dastebandi-kalaha').hover(function () {
            $('.sec-dastebandi-kalaha').css('display', 'flex');
            $('.safhe-black').css('opacity', '1');
            $('.safhe-black').css('z-index', '1000');
            $('.border-bottom-items').css('width', '120px');
            $('.border-bottom-items').css('left', '694px');
        }, function () {
            $('.sec-dastebandi-kalaha').css('display', 'none');
            $('.safhe-black').css('opacity', '0');
            $('.safhe-black').css('z-index', '-1000');
            $('.border-bottom-items').css('width', '0');
            $('.border-bottom-items').css('left', '694px');
        });
    });

    $('.li-mobile-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'inherit');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-main-li-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-kalaDigikala-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'inherit');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-sanati-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'inherit');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-poshak-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'inherit');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-supermarket-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'inherit');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-kodak-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'inherit');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-mahali-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'inherit');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-zibaii-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'inherit');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-ashpazkhane-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'inherit');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-lavazemTahril-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'inherit');
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
    }, function () {
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });
    $('.li-varzesh-dastebandi').hover(function () {
        $('.sec-main-li-dastebandi').css('display', 'none');
        $('.sec-li-kalaDigikala-dastebandi').css('display', 'none');
        $('.sec-li-sanati-dastebandi').css('display', 'none');
        $('.sec-li-poshak-dastebandi').css('display', 'none');
        $('.sec-li-supermarket-dastebandi').css('display', 'none');
        $('.sec-li-kodak-dastebandi').css('display', 'none');
        $('.sec-li-mahali-dastebandi').css('display', 'none');
        $('.sec-li-zibaii-dastebandi').css('display', 'none');
        $('.sec-li-ashpazkhane-dastebandi').css('display', 'none');
        $('.sec-li-lavazemTahril-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').css('display', 'inherit');
    }, function () {
        $('.sec-li-varzesh-dastebandi').css('display', 'none');
        $('.sec-li-varzesh-dastebandi').hover(function () {
            $(this).css('display', 'inherit');
        });
    });

    $('.anggle-left-slider-big').click(function () {

        if ($('.d1-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-100%');
            $('.d2-overflow-slider-big').css('right', '0');
            $('.d3-overflow-slider-big').css('right', '100%');
            $('.d4-overflow-slider-big').css('right', '200%');
            $('.d5-overflow-slider-big').css('right', '300%');
            $('.d6-overflow-slider-big').css('right', '400%');
            $('.d7-overflow-slider-big').css('right', '500%');
            $('.d8-overflow-slider-big').css('right', '600%');
            $('.d9-overflow-slider-big').css('right', '700%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '10');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(2)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(1)').removeClass('btn-select');
        } else if ($('.d2-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-200%');
            $('.d2-overflow-slider-big').css('right', '-100%');
            $('.d3-overflow-slider-big').css('right', '0');
            $('.d4-overflow-slider-big').css('right', '100%');
            $('.d5-overflow-slider-big').css('right', '200%');
            $('.d6-overflow-slider-big').css('right', '300%');
            $('.d7-overflow-slider-big').css('right', '400%');
            $('.d8-overflow-slider-big').css('right', '500%');
            $('.d9-overflow-slider-big').css('right', '600%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '10');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(3)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(2)').removeClass('btn-select');
        } else if ($('.d3-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-300%');
            $('.d2-overflow-slider-big').css('right', '-200%');
            $('.d3-overflow-slider-big').css('right', '-100%');
            $('.d4-overflow-slider-big').css('right', '0');
            $('.d5-overflow-slider-big').css('right', '100%');
            $('.d6-overflow-slider-big').css('right', '200%');
            $('.d7-overflow-slider-big').css('right', '300%');
            $('.d8-overflow-slider-big').css('right', '400%');
            $('.d9-overflow-slider-big').css('right', '500%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '10');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(4)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(3)').removeClass('btn-select');
        } else if ($('.d4-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '400%');
            $('.d2-overflow-slider-big').css('right', '-300%');
            $('.d3-overflow-slider-big').css('right', '-200%');
            $('.d4-overflow-slider-big').css('right', '-100%');
            $('.d5-overflow-slider-big').css('right', '0');
            $('.d6-overflow-slider-big').css('right', '100%');
            $('.d7-overflow-slider-big').css('right', '200%');
            $('.d8-overflow-slider-big').css('right', '300%');
            $('.d9-overflow-slider-big').css('right', '400%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '10');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(5)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(4)').removeClass('btn-select');
        } else if ($('.d5-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-500%');
            $('.d2-overflow-slider-big').css('right', '-400%');
            $('.d3-overflow-slider-big').css('right', '-300%');
            $('.d4-overflow-slider-big').css('right', '-200%');
            $('.d5-overflow-slider-big').css('right', '-100%');
            $('.d6-overflow-slider-big').css('right', '0');
            $('.d7-overflow-slider-big').css('right', '100%');
            $('.d8-overflow-slider-big').css('right', '200%');
            $('.d9-overflow-slider-big').css('right', '300%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '10');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(6)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(5)').removeClass('btn-select');
        } else if ($('.d6-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-600%');
            $('.d2-overflow-slider-big').css('right', '-500%');
            $('.d3-overflow-slider-big').css('right', '-400%');
            $('.d4-overflow-slider-big').css('right', '-300%');
            $('.d5-overflow-slider-big').css('right', '-200%');
            $('.d6-overflow-slider-big').css('right', '-100%');
            $('.d7-overflow-slider-big').css('right', '0');
            $('.d8-overflow-slider-big').css('right', '100%');
            $('.d9-overflow-slider-big').css('right', '200%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '10');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(7)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(6)').removeClass('btn-select');
        } else if ($('.d7-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-700%');
            $('.d2-overflow-slider-big').css('right', '-600%');
            $('.d3-overflow-slider-big').css('right', '-500%');
            $('.d4-overflow-slider-big').css('right', '-400%');
            $('.d5-overflow-slider-big').css('right', '-300%');
            $('.d6-overflow-slider-big').css('right', '-200%');
            $('.d7-overflow-slider-big').css('right', '-100%');
            $('.d8-overflow-slider-big').css('right', '0');
            $('.d9-overflow-slider-big').css('right', '100%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '10');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(8)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(7)').removeClass('btn-select');
        } else if ($('.d8-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-800%');
            $('.d2-overflow-slider-big').css('right', '-700%');
            $('.d3-overflow-slider-big').css('right', '-600%');
            $('.d4-overflow-slider-big').css('right', '-500%');
            $('.d5-overflow-slider-big').css('right', '-400%');
            $('.d6-overflow-slider-big').css('right', '-300%');
            $('.d7-overflow-slider-big').css('right', '-200%');
            $('.d8-overflow-slider-big').css('right', '-100%');
            $('.d9-overflow-slider-big').css('right', '0');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '10');

            $('.btns-slider-big div:nth-child(9)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(8)').removeClass('btn-select');
        } else if ($('.d9-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '0');
            $('.d2-overflow-slider-big').css('right', '100%');
            $('.d3-overflow-slider-big').css('right', '200%');
            $('.d4-overflow-slider-big').css('right', '300%');
            $('.d5-overflow-slider-big').css('right', '400%');
            $('.d6-overflow-slider-big').css('right', '500%');
            $('.d7-overflow-slider-big').css('right', '600%');
            $('.d8-overflow-slider-big').css('right', '700%');
            $('.d9-overflow-slider-big').css('right', '800%');

            $('.d1-overflow-slider-big').css('z-index', '10');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(1)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(9)').removeClass('btn-select');
        }
    });

    $('.anggle-right-slider-big').click(function () {

        if ($('.d1-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-800%');
            $('.d2-overflow-slider-big').css('right', '-700');
            $('.d3-overflow-slider-big').css('right', '-600%');
            $('.d4-overflow-slider-big').css('right', '-500%');
            $('.d5-overflow-slider-big').css('right', '-400%');
            $('.d6-overflow-slider-big').css('right', '-300%');
            $('.d7-overflow-slider-big').css('right', '-200%');
            $('.d8-overflow-slider-big').css('right', '-100%');
            $('.d9-overflow-slider-big').css('right', '0');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '10');

            $('.btns-slider-big div:nth-child(9)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(1)').removeClass('btn-select');
        } else if ($('.d2-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '0');
            $('.d2-overflow-slider-big').css('right', '100%');
            $('.d3-overflow-slider-big').css('right', '200%');
            $('.d4-overflow-slider-big').css('right', '300%');
            $('.d5-overflow-slider-big').css('right', '400%');
            $('.d6-overflow-slider-big').css('right', '500%');
            $('.d7-overflow-slider-big').css('right', '600%');
            $('.d8-overflow-slider-big').css('right', '700%');
            $('.d9-overflow-slider-big').css('right', '800%');

            $('.d1-overflow-slider-big').css('z-index', '10');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(1)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(2)').removeClass('btn-select');
        } else if ($('.d3-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-100%');
            $('.d2-overflow-slider-big').css('right', '0');
            $('.d3-overflow-slider-big').css('right', '100%');
            $('.d4-overflow-slider-big').css('right', '200%');
            $('.d5-overflow-slider-big').css('right', '300%');
            $('.d6-overflow-slider-big').css('right', '400%');
            $('.d7-overflow-slider-big').css('right', '500%');
            $('.d8-overflow-slider-big').css('right', '600%');
            $('.d9-overflow-slider-big').css('right', '700%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '10');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(2)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(3)').removeClass('btn-select');
        } else if ($('.d4-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-200%');
            $('.d2-overflow-slider-big').css('right', '-100%');
            $('.d3-overflow-slider-big').css('right', '0');
            $('.d4-overflow-slider-big').css('right', '100%');
            $('.d5-overflow-slider-big').css('right', '200%');
            $('.d6-overflow-slider-big').css('right', '300%');
            $('.d7-overflow-slider-big').css('right', '400%');
            $('.d8-overflow-slider-big').css('right', '500%');
            $('.d9-overflow-slider-big').css('right', '600%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '10');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(3)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(4)').removeClass('btn-select');
        } else if ($('.d5-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-300%');
            $('.d2-overflow-slider-big').css('right', '-200%');
            $('.d3-overflow-slider-big').css('right', '-100%');
            $('.d4-overflow-slider-big').css('right', '0');
            $('.d5-overflow-slider-big').css('right', '100%');
            $('.d6-overflow-slider-big').css('right', '200%');
            $('.d7-overflow-slider-big').css('right', '300%');
            $('.d8-overflow-slider-big').css('right', '400%');
            $('.d9-overflow-slider-big').css('right', '500%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '10');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(4)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(5)').removeClass('btn-select');
        } else if ($('.d6-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-400%');
            $('.d2-overflow-slider-big').css('right', '-300%');
            $('.d3-overflow-slider-big').css('right', '-200%');
            $('.d4-overflow-slider-big').css('right', '-100%');
            $('.d5-overflow-slider-big').css('right', '0');
            $('.d6-overflow-slider-big').css('right', '100%');
            $('.d7-overflow-slider-big').css('right', '200%');
            $('.d8-overflow-slider-big').css('right', '300%');
            $('.d9-overflow-slider-big').css('right', '400%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '10');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(5)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(6)').removeClass('btn-select');
        } else if ($('.d7-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-500%');
            $('.d2-overflow-slider-big').css('right', '-400%');
            $('.d3-overflow-slider-big').css('right', '-300%');
            $('.d4-overflow-slider-big').css('right', '-200%');
            $('.d5-overflow-slider-big').css('right', '-100%');
            $('.d6-overflow-slider-big').css('right', '0');
            $('.d7-overflow-slider-big').css('right', '100%');
            $('.d8-overflow-slider-big').css('right', '200%');
            $('.d9-overflow-slider-big').css('right', '300%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '10');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(6)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(7)').removeClass('btn-select');
        } else if ($('.d8-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-600%');
            $('.d2-overflow-slider-big').css('right', '-500%');
            $('.d3-overflow-slider-big').css('right', '-400%');
            $('.d4-overflow-slider-big').css('right', '-300%');
            $('.d5-overflow-slider-big').css('right', '-200%');
            $('.d6-overflow-slider-big').css('right', '-100%');
            $('.d7-overflow-slider-big').css('right', '0');
            $('.d8-overflow-slider-big').css('right', '100%');
            $('.d9-overflow-slider-big').css('right', '200%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '10');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(7)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(8)').removeClass('btn-select');
        } else if ($('.d9-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-700%');
            $('.d2-overflow-slider-big').css('right', '-600%');
            $('.d3-overflow-slider-big').css('right', '-500%');
            $('.d4-overflow-slider-big').css('right', '-400%');
            $('.d5-overflow-slider-big').css('right', '-300%');
            $('.d6-overflow-slider-big').css('right', '-200%');
            $('.d7-overflow-slider-big').css('right', '-100%');
            $('.d8-overflow-slider-big').css('right', '0');
            $('.d9-overflow-slider-big').css('right', '100%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '10');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(8)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(9)').removeClass('btn-select');
        }
    });

    setInterval(function () {
        if ($('.d1-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-100%');
            $('.d2-overflow-slider-big').css('right', '0');
            $('.d3-overflow-slider-big').css('right', '100%');
            $('.d4-overflow-slider-big').css('right', '200%');
            $('.d5-overflow-slider-big').css('right', '300%');
            $('.d6-overflow-slider-big').css('right', '400%');
            $('.d7-overflow-slider-big').css('right', '500%');
            $('.d8-overflow-slider-big').css('right', '600%');
            $('.d9-overflow-slider-big').css('right', '700%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '10');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(2)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(1)').removeClass('btn-select');
        } else if ($('.d2-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-200%');
            $('.d2-overflow-slider-big').css('right', '-100%');
            $('.d3-overflow-slider-big').css('right', '0');
            $('.d4-overflow-slider-big').css('right', '100%');
            $('.d5-overflow-slider-big').css('right', '200%');
            $('.d6-overflow-slider-big').css('right', '300%');
            $('.d7-overflow-slider-big').css('right', '400%');
            $('.d8-overflow-slider-big').css('right', '500%');
            $('.d9-overflow-slider-big').css('right', '600%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '10');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(3)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(2)').removeClass('btn-select');
        } else if ($('.d3-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-300%');
            $('.d2-overflow-slider-big').css('right', '-200%');
            $('.d3-overflow-slider-big').css('right', '-100%');
            $('.d4-overflow-slider-big').css('right', '0');
            $('.d5-overflow-slider-big').css('right', '100%');
            $('.d6-overflow-slider-big').css('right', '200%');
            $('.d7-overflow-slider-big').css('right', '300%');
            $('.d8-overflow-slider-big').css('right', '400%');
            $('.d9-overflow-slider-big').css('right', '500%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '10');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(4)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(3)').removeClass('btn-select');
        } else if ($('.d4-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '400%');
            $('.d2-overflow-slider-big').css('right', '-300%');
            $('.d3-overflow-slider-big').css('right', '-200%');
            $('.d4-overflow-slider-big').css('right', '-100%');
            $('.d5-overflow-slider-big').css('right', '0');
            $('.d6-overflow-slider-big').css('right', '100%');
            $('.d7-overflow-slider-big').css('right', '200%');
            $('.d8-overflow-slider-big').css('right', '300%');
            $('.d9-overflow-slider-big').css('right', '400%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '10');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(5)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(4)').removeClass('btn-select');
        } else if ($('.d5-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-500%');
            $('.d2-overflow-slider-big').css('right', '-400%');
            $('.d3-overflow-slider-big').css('right', '-300%');
            $('.d4-overflow-slider-big').css('right', '-200%');
            $('.d5-overflow-slider-big').css('right', '-100%');
            $('.d6-overflow-slider-big').css('right', '0');
            $('.d7-overflow-slider-big').css('right', '100%');
            $('.d8-overflow-slider-big').css('right', '200%');
            $('.d9-overflow-slider-big').css('right', '300%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '10');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(6)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(5)').removeClass('btn-select');
        } else if ($('.d6-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-600%');
            $('.d2-overflow-slider-big').css('right', '-500%');
            $('.d3-overflow-slider-big').css('right', '-400%');
            $('.d4-overflow-slider-big').css('right', '-300%');
            $('.d5-overflow-slider-big').css('right', '-200%');
            $('.d6-overflow-slider-big').css('right', '-100%');
            $('.d7-overflow-slider-big').css('right', '0');
            $('.d8-overflow-slider-big').css('right', '100%');
            $('.d9-overflow-slider-big').css('right', '200%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '10');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(7)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(6)').removeClass('btn-select');
        } else if ($('.d7-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-700%');
            $('.d2-overflow-slider-big').css('right', '-600%');
            $('.d3-overflow-slider-big').css('right', '-500%');
            $('.d4-overflow-slider-big').css('right', '-400%');
            $('.d5-overflow-slider-big').css('right', '-300%');
            $('.d6-overflow-slider-big').css('right', '-200%');
            $('.d7-overflow-slider-big').css('right', '-100%');
            $('.d8-overflow-slider-big').css('right', '0');
            $('.d9-overflow-slider-big').css('right', '100%');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '10');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(8)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(7)').removeClass('btn-select');
        } else if ($('.d8-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '-800%');
            $('.d2-overflow-slider-big').css('right', '-700%');
            $('.d3-overflow-slider-big').css('right', '-600%');
            $('.d4-overflow-slider-big').css('right', '-500%');
            $('.d5-overflow-slider-big').css('right', '-400%');
            $('.d6-overflow-slider-big').css('right', '-300%');
            $('.d7-overflow-slider-big').css('right', '-200%');
            $('.d8-overflow-slider-big').css('right', '-100%');
            $('.d9-overflow-slider-big').css('right', '0');

            $('.d1-overflow-slider-big').css('z-index', '9');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '10');

            $('.btns-slider-big div:nth-child(9)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(8)').removeClass('btn-select');
        } else if ($('.d9-overflow-slider-big').css('right') == '0px') {
            $('.d1-overflow-slider-big').css('right', '0');
            $('.d2-overflow-slider-big').css('right', '100%');
            $('.d3-overflow-slider-big').css('right', '200%');
            $('.d4-overflow-slider-big').css('right', '300%');
            $('.d5-overflow-slider-big').css('right', '400%');
            $('.d6-overflow-slider-big').css('right', '500%');
            $('.d7-overflow-slider-big').css('right', '600%');
            $('.d8-overflow-slider-big').css('right', '700%');
            $('.d9-overflow-slider-big').css('right', '800%');

            $('.d1-overflow-slider-big').css('z-index', '10');
            $('.d2-overflow-slider-big').css('z-index', '9');
            $('.d3-overflow-slider-big').css('z-index', '9');
            $('.d4-overflow-slider-big').css('z-index', '9');
            $('.d5-overflow-slider-big').css('z-index', '9');
            $('.d6-overflow-slider-big').css('z-index', '9');
            $('.d7-overflow-slider-big').css('z-index', '9');
            $('.d8-overflow-slider-big').css('z-index', '9');
            $('.d9-overflow-slider-big').css('z-index', '9');

            $('.btns-slider-big div:nth-child(1)').addClass('btn-select');
            $('.btns-slider-big div:nth-child(9)').removeClass('btn-select');
        }
    }, 5000);
});



function check_btnclose_input_search() {
    var input_search = document.querySelector('.input-search-header');
    var icon_close = document.querySelector('.btn-input-search-header');
    if (input_search.value != '') {
        icon_close.style.display = 'inherit';
    } else {
        icon_close.style.display = 'none';
    }
}

function show_hesab_karbari() {
    var hesab_karbari = document.querySelector('.hesab-karbari');
    var bg_hesab_karbari = document.querySelector('.log-in-search-header');
    if (hesab_karbari.style.display == 'inherit') {
        hesab_karbari.style.display = 'none';
        bg_hesab_karbari.style.backgroundColor = '#fff';
    } else {
        hesab_karbari.style.display = 'inherit';
        bg_hesab_karbari.style.backgroundColor = '#fdecee';
    }
}

function to_left() {
    document.querySelector('.toggle-search-click2').style.display = 'none';
    document.querySelector('.toggle-search-click1').style.display = 'inherit';

    document.querySelector('.portarafdar-akhir').scrollBy({
        left: -500,
        behavior: 'smooth'
    })
}

function to_right() {
    document.querySelector('.toggle-search-click1').style.display = 'none';
    document.querySelector('.toggle-search-click2').style.display = 'inherit';

    document.querySelector('.portarafdar-akhir').scrollBy({
        left: 500,
        behavior: 'smooth'
    })
}

function to_left_sec7() {
    document.querySelector('.body-sec7-main').scrollBy({
        left: 200,
        behavior: 'smooth'
    });
}

function to_right_sec7() {
    document.querySelector('.body-sec7-main').scrollBy({
        left: -200,
        behavior: 'smooth'
    });
}

function to_left_sec8() {
    document.querySelector('.body-sec8-main').scrollBy({
        left: 170,
        behavior: 'smooth'
    });
}

function to_right_sec8() {
    document.querySelector('.body-sec8-main').scrollBy({
        left: -170,
        behavior: 'smooth'
    });
}

function to_left_sec16() {
    document.querySelector('.body-sec16-main').scrollBy({
        left: 330,
        behavior: 'smooth'
    });
}

function to_right_sec16() {
    document.querySelector('.body-sec16-main').scrollBy({
        left: -330,
        behavior: 'smooth'
    });
}

function to_left_sec2() {
    document.querySelector('.sec-slider-overflow').scrollBy({
        left: 176,
        behavior: 'smooth'
    });
}

function to_right_sec2() {
    document.querySelector('.sec-slider-overflow').scrollBy({
        left: -176,
        behavior: 'smooth'
    });
}

function return_to_top() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function check_valid_email() {
    debugger;
    let val_input = document.querySelector('.input-email-footer');
    let error_input = document.querySelector('.p-errore');
    if (val_input.value == '') {
        error_input.innerHTML = 'این فیلد نمی‌تواند خالی باشد';
    }else {
        error_input.innerHTML = '';
    }
    for (let i = 0; i < val_input.length; i++) {
        if (val_input[i] != '@') {
            error_input.innerHTML = 'پست الکترونیک وارد شده درست نیست';
        }
    }

}