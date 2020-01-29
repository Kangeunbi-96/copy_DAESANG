window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, {passive: false});
window.addEventListener ("mousewheel", function (event) { event.preventDefault (); }, {passive: false});
$(document).ready(function(){
    
    window.onload = function() {
        setTimeout(function(){
            scrollTo(0,0);
        }, 100);
        $('.circle_btn').css('opacity','1');
    }


    $('.depths11').hover(function(){
        $('.depths2_1').css('display','block');
    },
    function(){
        $('.depths2_1').css('display','none');
    });

    $('.depths22').hover(function(){
        $('.depths2_2').css('display','block');
    },
    function(){
        $('.depths2_2').css('display','none');
    });
    
    $('.depths33').hover(function(){
        $('.depths2_3').css('display','block');
    },
    function(){
        $('.depths2_3').css('display','none');
    });

    $('.depths44').hover(function(){
        $('.depths2_4').css('display','block');
    },
    function(){
        $('.depths2_4').css('display','none');
    });

    $('.s1').css({
        transform: 'translateY(0)',
        opacity: 1,
    });
    $('.btn1').css('opacity','0');
    $('.btn_txt1').css('opacity','1');

    var sec1 = $("#s1").offset().top;
    $(window).scroll(function(){
        var s_top1 = $(window).scrollTop() + 300;

        if(s_top1 >= sec1) {
             $('.btn1').css('opacity','0');
             $('.btn_txt1').css('opacity','1');

        }
    });

    var sec2 = $("#s2").offset().top;
    $(window).scroll(function(){
        var s_top2 = $(window).scrollTop() + 500;

        if(s_top2 >= sec2) {
            $('.s2').css({
                transform: 'translateY(0)',
                opacity: 1
            });
            $('.btn1').css('opacity','1');
            $('.btn_txt1').css('opacity','0');
            $('.btn2').css('opacity','0');
            $('.btn_txt2').css('opacity','1');
            $('.sub_menu2').show(300);
            $('.main_menu2').addClass('on');
        }
        // else if(s_top2 <= sec2) {
        //     $('.btn2').css('opacity','1');
        //     $('.btn_txt2').css('opacity','0');
        // }
        else {
            $('.btn2').css('opacity','1');
            $('.btn_txt2').css('opacity','0');
        }
    });
    
    var sec3 = $("#s3").offset().top;
    $(window).scroll(function(){
        var s_top3 = $(window).scrollTop() + 100;

        if(s_top3 >= sec3) {
            $('.s3').css({
                transform: 'translateY(0)',
                opacity: 1,
            });
            $('.btn2').css('opacity','1');
            $('.btn_txt2').css('opacity','0');
            $('.btn3').css('opacity','0');
            $('.btn_txt3').css('opacity','1');
        }
        else {
            $('.btn3').css('opacity','1');
            $('.btn_txt3').css('opacity','0');
        }
    });

    var sec4 = $("#s4").offset().top;
    $(window).scroll(function(){
        var s_top4 = $(window).scrollTop() + 100;

        if(s_top4 >= sec4) {
            $('.s4').css({
                transform: 'translateY(0)',
                opacity: 1,
            });
            $('.btn3').css('opacity','1');
            $('.btn_txt3').css('opacity','0');
            $('.btn4').css('opacity','0');
            $('.btn_txt4').css('opacity','1');
            $('.circle_btn').css('opacity','1');
        }
        else {
            $('.btn4').css('opacity','1');
            $('.btn_txt4').css('opacity','0');
        }
    });

    var sec5 = $("#s5").offset().top;
    $(window).scroll(function(){
        var s_top5 = $(window).scrollTop() + 300;

        if(s_top5 >= sec5) {
            $('.s5_1').css({
                transform: 'translateY(0)',
                opacity: 1,
            });
            $('.circle_btn').css('opacity','0');
            $('.btn_txt4').css('opacity','0');
        }
    });
    
    var sec5 = $("#s5").offset().top;
    $(window).scroll(function(){
        var s_top5 = $(window).scrollTop() + 300;

        if(s_top5 >= sec5) {
            $('.s5_2').css({
                transform: 'translateY(0)',
                opacity: 1,
            });
        }
    });

    var sec5 = $("#s5").offset().top;
    $(window).scroll(function(){
        var s_top5 = $(window).scrollTop() + 300;

        if(s_top5 >= sec5) {
            $('.s5_3').css({
                transform: 'translateY(0)',
                opacity: 1,
            });
            $('.s5_4').css({
                transform: 'translateY(0)',
                opacity: 1,
            });
            $('#hd').css({
                background: 'rgba(0,0,0,0.5)'
            });
            $('.s5_4').css({
                transform: 'translateY(0)',
                opacity: 1,
            });
            $('#hd').css({
                background: 'rgba(0,0,0,0.5)'
            });
        }
        else{
            $('#hd').css({
                background: 'rgba(0,0,0,0)'
            });
        }
    });

 
    $(document).on('click', '.menu_line', function(){
        $('#menu').addClass('on');
        $('.dim').show();
    });

    $(document).on('click', '#menu img', function(){
        $('#menu').removeClass('on');
        $('.dim').hide();
    });


    $(document).on('click', '.lang', function(){
        $('.langbox').css('display','block');
        $('#hd').css('background', 'white');
        $('.depths a').css('color', 'black');
        $('.menuToggle > span').css('background', 'black');
        $('.hd_logo').css('background-image', 'url(img/logo_on.png)');

    })
    

    $('.langbox').mouseleave(function(){
        $('.langbox').css('display', 'none');
        $('#hd').css('background', 'none');
        $('.depths > a').css('color', 'white');
        $('.menuToggle > span').css('background', 'white');
        $('.hd_logo').css('background-image', 'url(img/logo.png)');
    }) 

    setTimeout(function(){
        $('body').scrollTop(0);
    },1);
    var scrollEvent = false;
    var index = 0;

    $(document).on('click', '.btn_scroll', function(){
        index = $('.btn_scroll').index(this);
        move(index);
    });

    $('.down').click(function(){
        event.preventDefault();
        var href = $(this).attr('href');

        var pos = $(href).offset().top;
        index++;
        $('html,body').animate({
            scrollTop:pos
        }, 800);
    });

    $(document).on('mousewheel', 'html,body', function(c){
        var m = c.originalEvent.wheelDelta;
        var sb = $('.section').eq(0).height();

        if(m > 1 && !scrollEvent && index >= 1){
            console.log(index);
            scrollEvent = true;
            index--;
            move(index);
        }else if(m < 1 && !scrollEvent && index < 4){
            console.log(index);
            scrollEvent = true;
            index ++;
            move(index);
        }

    });

    function move(index){
        var top = $('.section').eq(index).offset().top;
        // $('.link').removeClass('view');
        // $('.link').eq(index).addClass('view');
        // $('.btn1').css('opacity','0');
        // $('btn_txt1').css('display','block');
        $('body').animate({
            scrollTop:top
        },{
            duration: 500,
            complete: function(){
                scrollEvent = false;
            }
        });
    }

    $('.sub_menu1').hide();
    $('.main_menu1').hover(function() {
        $('.sub_menu1').show(300);
        $('.main_menu1').addClass('on');
        $('.sub_menu2').hide(300);
        $('.main_menu2').removeClass('on');
    },
    function(){
        $('.sub_menu1').hide(300);
        $('.main_menu1').removeClass('on');
    });

    $('.sub_menu2').hide();
    // $('.sub_menu2').show();
    // $('.main_menu2').addClass('on');
    $('.main_menu2').hover(function(){
        $('.sub_menu2').show(300);
        $('.main_menu2').addClass('on');
    },
    function(){
        $('.sub_menu2').hide(300);
        $('.main_menu2').removeClass('on');
    });
    
    $('.sub_menu3').hide();
    $('.main_menu3').hover(function(){
        $('.sub_menu3').show(300);
        $('.main_menu3').addClass('on');
        $('.sub_menu2').hide(300);
        $('.main_menu2').removeClass('on');
    },
    function(){
        $('.sub_menu3').hide(300);
        $('.main_menu3').removeClass('on');
    });
})