$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 450 && $(window).width() > 825) {
        $('#nav').addClass('shrink');
        $('#nav').removeClass('navbar-light');
        $('#nav').addClass('navbar-dark');
        $('#nav').removeClass('bg-light')
    }
    else {
    $('#nav').removeClass('shrink');
    $('#nav').addClass('navbar-light');
    $('#nav').removeClass('navbar-dark');
    }
  });
  if($(window).width() <= 824) {
    $('#nav').addClass('shrink');
    $('#nav').addClass('bg-light');
    $('#nav').removeClass('navbar-dark');
    $('#nav').addClass('navbar-light');
  }
  else {
    $('#nav').removeClass('shrink');
    $('#nav').removeClass('bg-dark');
    $('#nav').addClass('navbar-light');
  }
});
