$(function() {

    $(document).ready(function(){

        $('input[type="phone"]').mask("+7 999 999 99 99");

        item_width = 0; 
        block_width = $('#marquee').width();

        for (i = 1; i < 10; i++){
            $('.line__text').each(function(){
                    item_width += $(this).width();

                    if(item_width < block_width){
                        $(this).clone().appendTo( "#marquee" );
                    }
            });
        }

        // scrolled line start
        $(window).on('scroll', function (e) {
           
            var scroll = window.pageYOffset;
                marquee = $("#marquee");     

            marquee.css('transform', 'matrix(1, 0, 0, 1, '+ scroll +', 0)');            
        });
        // scrolled line end

        // sliders start
        $('.today .item-slide').slick({
            fade: true,
            arrows: true,
            dots: false,
            autoplay: true,                
            autoplaySpeed: 2000,
        });
        
        $('.aip-talking__slider').slick({
            arrows: true,
            autoplay: true,                
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        $('.video-block, .article-block').slick({
            arrows: true,
            autoplay: true,                
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        $('.congrats__content-bottom .slider .slider-content').slick({
            arrows: true,
            autoplay: true,                
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 902,
                    settings: {
                        dots: true,
                    }
                }
            ]
        });

        $('.memories__content-slider').slick({
            arrows: true,
            autoplay: false, 
            infinite: true,               
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 902,
                    settings: {
                        dots: true,
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        // sliders end


        // modal start
        $('.nav-btn').on('click', function(){
            $('.modal-menu').addClass('active');
        });
        $('.close-btn').on('click', function(){
            $(this).parent().parent().removeClass('active');
        });

        $('a.call').on('click', function(){
            $('.form-modal').addClass('active');
            return false;
        });
        // modal end

        // form validate start
        var email_input = $('input[type="email"]');

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
          }
          
          function validate() {
            const $result = $(".form-error");
            const email = email_input.val();
            $result.text("");
          
            if (validateEmail(email)) {
              $result.text('');
              email_input.css('border-color','#1B2232');
            } else {
              $result.text("Некорректный формат");
              email_input.css('border-color','#FF294F');
            }
            return false;
          }
          
          email_input.on("input", validate);

          $('.submit-btn').on('click', function(){
            var parent =  $(this).parent().parent();
            parent.find('div').remove();
            parent.html('<div class="thanks"><div class="title">Спасибо за заявку!</div><div class="epilog">В течение дня мы отправим анкету на ваш электронный адрес</div></div>')
          });
        // form validate end

        if($(document).width() > 902){

            $(document).ready(function() {
                $('.animate-title').addClass("hidden").viewportChecker({
                    classToAdd: 'visible animate__fadeInUp animate__animated',
                    offset: 100
                });
            
                $('.animate-text').addClass("hidden").viewportChecker({
                    classToAdd: 'visible animate__fadeInUp animate__animated',
                    offset: 200
                });
            });

        }

        // year line start       
        
        if($(document).width() > 902){
            function CircleInit(){
                $('.slick-current').css('transform', 'translate(0px, 0px)');

                var                 
                    next = $('.slick-current').nextAll('.year');
                    prev = $('.slick-current').prevAll('.year');
                    i = 1;
                
                next.each(function(){

                    switch (i) {
                        case 1: rotateX = 0;rotateY = 90; break;
                        case 2: rotateX = 60;rotateY = 190; break;
                        case 3: rotateX = 175 ;rotateY = 290; break;
                    
                        default: break;
                    }

                    $(this).css('transform', 'translate('+ -rotateX +'px, '+ rotateY +'px)');

                    if(i < 3){
                        i++;
                    }
                });

                i = 1;

                prev.each(function(){
                    switch (i) {
                        case 1: rotateX = 0;rotateY = 90; break;
                        case 2: rotateX = 60;rotateY = 190; break;
                        case 3: rotateX = 175 ;rotateY = 290; break;
                    
                        default: break;
                    }

                    $(this).css('transform', 'translate('+ rotateX +'px, '+ rotateY +'px)');
                    
                    if(i < 3){
                        i++;
                    }
                });
            }
            function CircleChange(currentSlide, nextSlide){
                var                 
                next = $('.slick-current').nextAll('.year');
                prev = $('.slick-current').prevAll('.year');

                function Transform(e, rotateX, rotateY){
                    e.css('transform', 'translate('+ rotateX +'px, '+ rotateY +'px)');
                }

                if(currentSlide > nextSlide){
                    // крутим вправо

                    i = 1;
                    next.each(function(){
                        switch (i) {
                            case 1: rotateX = -40 ;rotateY = 190; Transform($(this), rotateX, rotateY); break;
                            case 2: rotateX = -155 ;rotateY = 290; Transform($(this), rotateX, rotateY); break;
                        
                            default: break;
                        }
                        
                        if(i < 4){
                            i++;
                        } 
                    });

                    i = 1;
                    prev.each(function(){
                        switch (i) {
                            case 1: rotateX = 0; rotateY = 0; Transform($(this), rotateX, rotateY); break;
                            case 2: rotateX = -30; rotateY = 90; Transform($(this), rotateX, rotateY); break;
                            case 3: rotateX = 40 ; rotateY = 190; Transform($(this), rotateX, rotateY); break;
                            case 4: rotateX = 155 ;rotateY = 290; Transform($(this), rotateX, rotateY); break;
                        
                            default: break;
                        }
                        if(i < 4){
                            i++;
                        }
                    });
                } else{
                    // крутим влево

                    i = 1;
                    next.each(function(){
                        switch (i) {
                            case 1: rotateX = 0;   rotateY = 0; Transform($(this), rotateX, rotateY); break;
                            case 2: rotateX = 30;  rotateY = 90; Transform($(this), rotateX, rotateY); break;
                            case 3: rotateX = -40; rotateY = 190; Transform($(this), rotateX, rotateY); break;
                            case 4: rotateX = -155;rotateY = 290; Transform($(this), rotateX, rotateY); break;
                        
                            default: break;
                        }
                        if(i < 4){
                            i++;
                        } 
                    });

                    i = 1;
                    prev.each(function(){
                        switch (i) {
                            case 1: rotateX = 40 ;  rotateY = 190; Transform($(this), rotateX, rotateY); break;
                            case 2: rotateX = 155 ; rotateY = 290; Transform($(this), rotateX, rotateY); break;
                        
                            default: break;
                        }

                        if(i < 4){
                            i++;
                        }
                    });
                }
            }

            $('.way-page__line').on('init', function(event, slick){
                CircleInit();
            });
            
            $('.way-page__content-desc').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.way-page__line'
            });
            $('.way-page__line').slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.way-page__content-desc',
                dots: false,
                arrows: false,
                swipe: false,
                centerMode: true,
                focusOnSelect: true
            });

            $('.way-page__line').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                CircleChange(currentSlide, nextSlide);
            });

            $('.way-page__line').on('afterChange', function(event, slick, currentSlide, nextSlide){
                CircleInit();
            });
        } else {
            $('.way-page__content-desc').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                adaptiveHeight: true,
                fade: true,
                asNavFor: '.way-page__line'
            });
            $('.way-page__line').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                asNavFor: '.way-page__content-desc',
                dots: false,
                arrows: false,
                swipe: true,
                centerMode: false,
                focusOnSelect: true
            });
        }
        // year line end

        $('.review-more__button').on('click', 'a', function(){
            $('.aip-talking__list .item.notshow').removeClass('notshow');
            return false;
        });

        // video tabs
        $('.tab-nav').on('click', '.tab-link', function(){
            var content = $(this).attr('data-show');
                tab_block = $(this).parents('section').find('.tab-block');

                $('.tab-nav .tab-link').removeClass('active');
                $(this).addClass('active');

                tab_block.find('div.active').removeClass('active');

                setTimeout(function(){
                    tab_block.find('div.'+content+'-block').addClass('active');
                }, 300);
                
        });

        
    });
});
