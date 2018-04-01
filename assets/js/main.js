$( document ).ready(function() {
  let header = $("header").offset().top;
  let headerHeight = $("header").outerHeight();

  $(window).scroll(() => {
    let windowSize = $(window).width();
    if(windowSize > 805) {
      if($(window).scrollTop() > 20) {
        $("header").addClass('fixed');
      } else {
        $("header").removeClass('fixed');
      }
    }

  });

  $(".progress-inner").each((i, v) => {
    let percent = $(v).data("percent");
    $(v).animate({
      width: percent + "%"
    }, 1000);
  });

  $('ul#nav li a').click((e) => {
    e.preventDefault();
    let id = $(e.target).data('nav');
    navGoTo(id);
  });

  $('ul#types a').on('click', function(e) {
    e.preventDefault();
    let type = $(this).data('type');
    if(type == "education") {
      $('ul#types a li').removeClass('active');
      $(this).find('li').addClass('active');
      $("#education").addClass('active');
      $("#experience").removeClass('active');
    } else if (type == "experience") {
      $('ul#types a li').removeClass('active');
      $(this).find('li').addClass('active');
      $("#education").removeClass('active');
      $("#experience").addClass('active');
    }
  });

  $('.hamburger').click(function() {
      let active = $(this).hasClass('is-active');
      let dropdown = $('.dropdown');
      if(!active) {
        $(this).addClass('is-active');
        dropdown.slideDown();
      } else {
        $(this).removeClass('is-active');
        dropdown.slideUp();
      }
  });

});

$('#typed').typeIt({
  strings: ["I'm <b>Zac</b>.", "I'm a <b>front-end web developer</b>."],
  breakLines: false,
  speed: 120,
  loop: true,
  loopDelay: 2000,
  deleteSpeed: 100
})

function navGoTo(element) {
  $('html, body').animate({
    scrollTop: $('#'+element).offset().top
  }, 'slow');
}
