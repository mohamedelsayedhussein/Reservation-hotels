

$(document).ready(function(){

  let scrollToTop = $('.scroll-top');

  scrollToTop.on('click', ()=>{
    $('html, body').animate({
      scrollTop: 0
    }, 700)
  })

  $(window).scroll(function(){
    if($(this).scrollTop() >= 100) {
      scrollToTop.fadeIn();
    }else {
      scrollToTop.fadeOut();
    }
  });
  
});


// $(document).ready(function(){
    // menu toggle bars button script
    
    // var $header = $('header');

    // $('.togglebutton').click( function() {
    //     $(this).toggleClass('active');
    //     $header.toggleClass('active');
    // });

    // scroll event for navbar header

    // var zero = 0;

    // $(window).scroll(function() {
    //     $header.toggleClass('hide', $(window).scrollTop() > zero);
    //     zero = $(window).scrollTop();

    //     if ($(window).scrollTop() > 0) {
    //       $header.addClass('scrolled');
    //     } else {
    //       $header.removeClass('scrolled');
    //     }
    // });



  // popup free quote script

    // $('a#freeQuote').click(function(e){
    //   e.preventDefault();
    //   $('.modal-quote').fadeIn(500);
    // });

    // $('.modal-quote span.close').click(function(){
    //   $('.modal-quote').fadeOut(500);
    // });
    
    // $('.modal-quote').click(function(){
    //     $(this).fadeOut(500);
    // });

    // $('.modal-quote .popup-content').click(function(event){
    //   event.stopPropagation();
    // });
    
    // $(document).keydown(function(e){
    //   if (e.keyCode == 27) {
    //     $('.modal-quote').fadeOut(500);
    //   }
    // });

  // slick slider init
  
    // $('.slider-for').slick({
    //   autoplay: true,
    //   speed: 2500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: true,
    //   asNavFor: '.slider-nav',
    //   prevArrow: '.services-section .controllers .PrevArrow',
		// 	nextArrow: '.services-section .controllers .NextArrow'
    // });
    // $('.slider-nav').slick({
    //   autoplay: false,
    //   speed: 2500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   asNavFor: '.slider-for',
    //   arrows: false,
    //   dots: false,
    //   focusOnSelect: true
    // });

  // });

//  init aos animation library
  // AOS.init();

  // float placholder of inputs
  
  // function stateCheck($formControl) {
  //   if ($formControl.val().length > 0) {
  //     $formControl.addClass('valid')
  //   }else {
  //     $formControl.removeClass('valid')
  //   }
  // }
  // $(function () {
  //   $('.form-control').on('focusout', function(){
  //     stateCheck($(this));
  //   })
  // })

  // calendar picker

  $('input[name="dates"]').daterangepicker({
    singleDatePicker: true,
    autoUpdateInput: false
  });

  // select to plugin

  $('#mselected').select2();

  // log in script

  let signUpButton = $("#signUp");
  let signInButton = $("#signIn");
  let container = $("#container-log");

  signUpButton.on("click", () => {
    container.addClass("right-panel-active");
  });

  signInButton.on("click", () => {
    container.removeClass("right-panel-active");
  });


  $('#mobile-sign-up').click(function() {
    container.addClass('transition')
  })
  $('#mobile-sign-in').click(function() {
    container.removeClass('transition')
  })
  // $(document).ready(function(){
  //   $('#send-message').click(function(){
  //     $('.forget-pass').css({
  //       'height': '100%',
  //       'opacity': '1',
  //       'visibility': 'visible'
  //       });
  //   });

  //   $('.close-forget-pass , .forget-pass ').click(function(){
  //     $('.forget-pass').css({
  //       'height': '0',
  //       'opacity': '0',
  //       'visibility': 'hidden'
  //       });
  //   });

  //   $('.forget-pass .box').click(function(event){
  //     event.stopPropagation();
  //   });

  //   $(document).keydown(function(e) {
  //     if (e.keyCode == 27 ) {
  //       $('.forget-pass').css({
  //         'height': '0',
  //         'opacity': '0',
  //         'visibility': 'hidden'
  //       });
  //     }
  //   });
  // });