$(document).ready(function () {
    (function ($) {
        $(".nav-slimscroll").slimScroll({
            height: '100vh',
            railOpacity: 0.5,
            size: '4px',
            position: 'left',
            distance: '2px',
            color: '#000'
        })
    })($);

    // nav sub-list

    $('.nav-main__sub-link').on('click', function(e) {
        e.preventDefault();
        $('.nav-main__sub-list').slideToggle();
        $('.nav-main__item-sub').toggleClass('active');
    });

    // Magnific POPAP Sertificats
    $('.sertificats__gallery').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // Magnific POPAP FORM Specials
    $('.btn-popup-order').magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        showCloseBtn: true,
        // Delay in milliseconds before popup is removed
        removalDelay: 150,
  
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'
        });


    // Menu NAV adaptive
    $(".nav__trigger").click(function() {
        if ($(".nav__trigger").hasClass('active')) {
                $(".nav__trigger").removeClass('active');
                $(".nav__trigger").removeClass('no-animation');
                $(".nav-main").slideToggle("0.5", "linear");
        }
        else {
            $(".nav__trigger").addClass('active');
            $(".nav__trigger").removeClass('no-animation');
            $(".nav-main").slideToggle("0.5", "linear");
            
        }
    });
    $(window).resize(function() {
        if($(window).width() >= 992) {
            $(".nav-main").css('display', 'block'); 
        }
        else {
            $(".nav-main").css('display', 'none'); 
        }
        return false;
    });


//  SQUARE MOBILE CLICK

    (function() {
            $('.squares__link').on('click', function(e) {
                e.preventDefault();

                var $this = $(this),
                    item = $this.closest('.squares__item'),
                    list = $this.closest('.squares__list'),
                    items = list.find('.squares__item');

                if($(window).width() <= 480) {
                    if(!item.hasClass('active')) {
                        items.removeClass('active');
                        item.addClass('active');
                    }
                    else {
                        item.removeClass('active');
                    }
                }
            });
    })();

    // SLICK CAROUSEL OBSOR COMPANY PAGE
    (function() {

        $('.company-obshor__slider').slick({
            prevArrow: '.slider-arrow__prev',
            nextArrow: '.slider-arrow__next',
            dots: true,
            appendDots: '.slider__pagination',
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<span class="slider__item-name"><span class="slider__name-wrap">'+ thumb + '</span></span>';
            },
            responsive: [{
                  breakpoint: 960,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
            }]
        });
        
    })(); 

    // SLICK CAROUSEL INDEX PAGE
    (function() {

        $('.index-slider').slick({
            // prevArrow: '.slider-arrow__prev',
            // nextArrow: '.slider-arrow__next',
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false
        });
        
    })(); 

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAoZnVuY3Rpb24gKCQpIHtcclxuICAgICAgICAkKFwiLm5hdi1zbGltc2Nyb2xsXCIpLnNsaW1TY3JvbGwoe1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIHJhaWxPcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgIHNpemU6ICc0cHgnLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxyXG4gICAgICAgICAgICBkaXN0YW5jZTogJzJweCcsXHJcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMCdcclxuICAgICAgICB9KVxyXG4gICAgfSkoJCk7XHJcblxyXG4gICAgLy8gbmF2IHN1Yi1saXN0XHJcblxyXG4gICAgJCgnLm5hdi1tYWluX19zdWItbGluaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCgnLm5hdi1tYWluX19zdWItbGlzdCcpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCgnLm5hdi1tYWluX19pdGVtLXN1YicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIE1hZ25pZmljIFBPUEFQIFNlcnRpZmljYXRzXHJcbiAgICAkKCcuc2VydGlmaWNhdHNfX2dhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcclxuICAgICAgICBkZWxlZ2F0ZTogJ2EnLCAvLyBjaGlsZCBpdGVtcyBzZWxlY3RvciwgYnkgY2xpY2tpbmcgb24gaXQgcG9wdXAgd2lsbCBvcGVuXHJcbiAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuICAgICAgICBnYWxsZXJ5OiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNYWduaWZpYyBQT1BBUCBGT1JNIFNwZWNpYWxzXHJcbiAgICAkKCcuYnRuLXBvcHVwLW9yZGVyJykubWFnbmlmaWNQb3B1cCh7XHJcbiAgICAgICAgdHlwZTogJ2lubGluZScsXHJcbiAgICAgICAgY2xvc2VCdG5JbnNpZGU6IHRydWUsXHJcbiAgICAgICAgc2hvd0Nsb3NlQnRuOiB0cnVlLFxyXG4gICAgICAgIC8vIERlbGF5IGluIG1pbGxpc2Vjb25kcyBiZWZvcmUgcG9wdXAgaXMgcmVtb3ZlZFxyXG4gICAgICAgIHJlbW92YWxEZWxheTogMTUwLFxyXG4gIFxyXG4gICAgICAgIC8vIENsYXNzIHRoYXQgaXMgYWRkZWQgdG8gcG9wdXAgd3JhcHBlciBhbmQgYmFja2dyb3VuZFxyXG4gICAgICAgIC8vIG1ha2UgaXQgdW5pcXVlIHRvIGFwcGx5IHlvdXIgQ1NTIGFuaW1hdGlvbnMganVzdCB0byB0aGlzIGV4YWN0IHBvcHVwXHJcbiAgICAgICAgbWFpbkNsYXNzOiAnbWZwLWZhZGUnXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIC8vIE1lbnUgTkFWIGFkYXB0aXZlXHJcbiAgICAkKFwiLm5hdl9fdHJpZ2dlclwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJChcIi5uYXZfX3RyaWdnZXJcIikuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm5hdl9fdHJpZ2dlclwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm5hdl9fdHJpZ2dlclwiKS5yZW1vdmVDbGFzcygnbm8tYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLm5hdi1tYWluXCIpLnNsaWRlVG9nZ2xlKFwiMC41XCIsIFwibGluZWFyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJChcIi5uYXZfX3RyaWdnZXJcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkKFwiLm5hdl9fdHJpZ2dlclwiKS5yZW1vdmVDbGFzcygnbm8tYW5pbWF0aW9uJyk7XHJcbiAgICAgICAgICAgICQoXCIubmF2LW1haW5cIikuc2xpZGVUb2dnbGUoXCIwLjVcIiwgXCJsaW5lYXJcIik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+PSA5OTIpIHtcclxuICAgICAgICAgICAgJChcIi5uYXYtbWFpblwiKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiLm5hdi1tYWluXCIpLmNzcygnZGlzcGxheScsICdub25lJyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcblxyXG4vLyAgU1FVQVJFIE1PQklMRSBDTElDS1xyXG5cclxuICAgIChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLnNxdWFyZXNfX2xpbmsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtID0gJHRoaXMuY2xvc2VzdCgnLnNxdWFyZXNfX2l0ZW0nKSxcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gJHRoaXMuY2xvc2VzdCgnLnNxdWFyZXNfX2xpc3QnKSxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IGxpc3QuZmluZCgnLnNxdWFyZXNfX2l0ZW0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA8PSA0ODApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZighaXRlbS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIC8vIFNMSUNLIENBUk9VU0VMIE9CU09SIENPTVBBTlkgUEFHRVxyXG4gICAgKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAkKCcuY29tcGFueS1vYnNob3JfX3NsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgcHJldkFycm93OiAnLnNsaWRlci1hcnJvd19fcHJldicsXHJcbiAgICAgICAgICAgIG5leHRBcnJvdzogJy5zbGlkZXItYXJyb3dfX25leHQnLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBhcHBlbmREb3RzOiAnLnNsaWRlcl9fcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGN1c3RvbVBhZ2luZyA6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRodW1iID0gJChzbGlkZXIuJHNsaWRlc1tpXSkuZGF0YSgndGh1bWInKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJzbGlkZXJfX2l0ZW0tbmFtZVwiPjxzcGFuIGNsYXNzPVwic2xpZGVyX19uYW1lLXdyYXBcIj4nKyB0aHVtYiArICc8L3NwYW4+PC9zcGFuPic7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk2MCxcclxuICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH0pKCk7IFxyXG5cclxuICAgIC8vIFNMSUNLIENBUk9VU0VMIElOREVYIFBBR0VcclxuICAgIChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLmluZGV4LXNsaWRlcicpLnNsaWNrKHtcclxuICAgICAgICAgICAgLy8gcHJldkFycm93OiAnLnNsaWRlci1hcnJvd19fcHJldicsXHJcbiAgICAgICAgICAgIC8vIG5leHRBcnJvdzogJy5zbGlkZXItYXJyb3dfX25leHQnLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSkoKTsgXHJcblxyXG59KTsiXX0=
