$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
        $('#nav').addClass('shrink');
        $('#nav').removeClass('navbar-light');
        $('#nav').addClass('navbar-dark');
    }
    else {
    $('#nav').removeClass('shrink');
    $('#nav').addClass('navbar-light');
    $('#nav').removeClass('navbar-dark');
    }
  });
});