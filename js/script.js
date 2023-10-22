$(document).ready(function () {
    $('.btnMenu').on('click', function (){
        $('.menuWrapper').toggleClass('d-block mt-3');
        $('.bgMenu').toggleClass('d-block');
        // $('#section01').toggleClass('sectionBgImg01 sectionBgColor01');
    })

    $('.article04Wrapper04Item02 button').click(function () { 
        var btn = $(this).data('index-btn');
        $('.activeBtn').removeClass('activeBtn');
        $(this).addClass('activeBtn');
        $('.articleActive').removeClass('articleActive');
        $('.article04Wrapper04Item02 article').eq(btn).addClass('articleActive');
    });

    $('.slickWrapper').slick({
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
});