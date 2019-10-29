

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
  

  
  
});


$('#notific-btn').click(function () {
    $(this).toggleClass('show');
});
