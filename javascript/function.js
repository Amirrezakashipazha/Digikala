$(document).ready(function () {


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
            'border-bottom': 'none'
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
        $('.chose-map').css('opacity','0');
        $('.chose-map').css('z-index','-10000');
        $('.location-map').css('opacity','0');
        $('.location-map').css('z-index','-10000');
    });

    $('.d-chose-location').click(function () {
        $('.chose-map').css('opacity','1');
        $('.chose-map').css('z-index','1000000');

        $('.safhe-black').css('opacity','1');
        $('.safhe-black').css('z-index','100000');
    });

    $('.icon-d-chose-location').click(function(){
        $('.chose-map').css('opacity','0');
        $('.chose-map').css('z-index','-10000');
        $('.safhe-black').css('opacity','0');
        $('.safhe-black').css('z-index','-10000');
    });

    $('.body-chose-map').click(function(){
        $('.location-map').css('opacity','1');
        $('.location-map').css('z-index','100000');
        $('.chose-map').css('z-index','-100000');
    });
    $('.close-location-map').click(function(){
        $('.location-map').css('opacity','0');
        $('.location-map').css('z-index','-10000');
        $('.safhe-black').css('opacity', '0');
        $('.safhe-black').css('z-index', '-1000');
        $('.chose-map').css('opacity','0');
        $('.chose-map').css('z-index','-10000');
    });

    $('.li-daste-bandiha').hover(function(){
        $('.sec-dastebandi-kalaha').css('display','flex');
        $('.safhe-black').css('opacity', '1');
        $('.safhe-black').css('z-index', '1000');
        $('.border-bottom-items').css('width', '120px');
        $('.border-bottom-items').css('left', '694px');
    },function(){
        $('.sec-dastebandi-kalaha').css('display','none');
        $('.safhe-black').css('opacity', '0');
        $('.safhe-black').css('z-index', '-1000');
        $('.border-bottom-items').css('width', '0');
        $('.border-bottom-items').css('left', '694px');
        $('.sec-dastebandi-kalaha').hover(function(){
            $('.sec-dastebandi-kalaha').css('display','flex');
            $('.safhe-black').css('opacity', '1');
            $('.safhe-black').css('z-index', '1000');
            $('.border-bottom-items').css('width', '120px');
        $('.border-bottom-items').css('left', '694px');
        },function(){
        $('.sec-dastebandi-kalaha').css('display','none');
        $('.safhe-black').css('opacity', '0');
        $('.safhe-black').css('z-index', '-1000');
        $('.border-bottom-items').css('width', '0');
        $('.border-bottom-items').css('left', '694px');
        });
    });

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

