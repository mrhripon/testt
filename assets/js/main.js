(function ($) {
    "use strict";

    // Script for OffCanvas Menu Activation
    $(document).ready(function () {
        $('.toggle-menu').on('click', function () {
            $(this).toggleClass('white');
            $('#main-menu').slideToggle();
            $('#profile-sub').removeClass('show');
            $('#notification-sub').removeClass('show');
            $('.user-part .bell').removeClass('white');
            $('body').toggleClass('fix2');
            $('body').removeClass('fix3');
            $('body').removeClass('fix');
        })

        
        $('.user-part .user').on('click', function (e) {
            e.preventDefault();
            $('#profile-sub').toggleClass('show');
            $('#main-menu').slideUp();
            $('#notification-sub').removeClass('show');
            $('.toggle-menu').removeClass('white');
            $('.user-part .bell').removeClass('white');
            $('body').toggleClass('fix3');
            $('body').removeClass('fix2');
            $('body').removeClass('fix');
        })

        $('.user-part .bell').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('white');
            $('#notification-sub').toggleClass('show');
            $('#profile-sub').removeClass('show');
            $('.toggle-menu').removeClass('white');
            $('#main-menu').slideUp();
            $('body').toggleClass('fix');
            $('body').removeClass('fix2');
            $('body').removeClass('fix3');
        })
        $('.close-sub').on('click', function (e) {
            $('#notification-sub').removeClass('show');
            $('.user-part .bell').removeClass('white');
            $('body').removeClass('fix');
            $('body').removeClass('fix2');
            $('body').removeClass('fix3');
        })

        $('.personal-menu-trigger').on('click', function (e) {
            $('.personal-menu').toggleClass('show');
        })
    })



    $(".v-scroll-two").niceScroll({
        cursorcolor: '#009EFD',
        cursorwidth: '10px',
        autohidemode: false
      });


      $(function() {  
        $(".v-scroll").niceScroll({
            cursorcolor: '#009EFD',
            cursorwidth: '10px'
          });

        //   Activating/deactivating scroll on modals:
         var bModal = $('modal')
            bModal.on('shown.bs.modal', function(e){	
                bModalBody.niceScroll({
                    touchbehavior: true,
                    autohidemode:false
                });
            }).on('hide.bs.modal', function(e){	
                bModalBody.niceScroll().remove();
            });
  
    });

    // Toggle button Query
    document.querySelectorAll('.toggle-outer').forEach(function(each){
        each.addEventListener('click',function(){
            this.classList.toggle('active');
        });
    });


    // Script for Slick Slider Activation
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<button type="button" class="slick-prev"><i class="far fa-angle-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="far fa-angle-left"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // Script for Nice Select Activation 
    $(document).ready(function () {
        $('select').niceSelect();
    })


    // Script for Magnific Popup Activation 
    $(document).ready(function () {
        $('.iframe-link').magnificPopup({ type: 'iframe' });
    });



    // Script For Scroll to top Button
    $(document).ready(function () {
        var back = $('.back-to-top');
        back.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        $(window).on('scroll', function () {
            var self = $(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })




    // Util.cModal('#m-open','#c-modal-one', '.cls-modal')



  
})(jQuery);	 // End line