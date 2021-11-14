$(function() {

  // Hamburger
  $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-mobile').toggleClass('menu-mobile_active');
});

  	// Tabs
  		$('#second_content').hide();
    function toggleTabs(el,sel){
        el.hide();
        sel.show();
        el.animate({
            opacity: "0"
        }, 500);
        sel.animate({
            opacity: "1"
        }, 1200);
    }

    $('#second_tab').click(function () {
        let el = $('#first_content');
        let siblinEl = $('#second_content');
        toggleTabs(el,siblinEl);
    });
    $('#first_tab').click(function () {
        let el = $('#second_content');
        let siblinEl = $('#first_content');
        toggleTabs(el,siblinEl);

    });

    $(".tabs_link").on("click", ".tab:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
    });


  // ArcticModal
        $('.popup_consultation').click(function(e) {
      e.preventDefault();
      $('#consultation').arcticmodal();
    });

        $('.popup_work').click(function(e) {
      e.preventDefault();
      $('#work').arcticmodal();
    });

    // Preloader

    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');

    // Плавный скроллинг
  $('.go_to').click( function(){
  var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
      return false;
    });


      // Плавающая шапка
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200){  
            $('#header-fixed').addClass("sticky");
        }
        else{
            $('#header-fixed').removeClass("sticky");
        }
    });

      if($(window).width() <= 992){
        $('*').removeClass('animated');
    };

    // Slick slider

      $('.works-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>'
     });

      // To top button

      $(window).scroll(function() {
      if($(this).scrollTop() > 500) {
      $('#toTop').fadeIn();
      } else {
      $('#toTop').fadeOut();
      }
      });
      $('#toTop').click(function() {
      $('body,html').animate({scrollTop:0},800);
      });

      // animation delay

      new WOW().init();

});