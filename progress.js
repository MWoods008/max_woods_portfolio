$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 600) {
        $('#p1').css({"width":"100%"});
        $('#p2').css({"width":"85%"});
        $('#p3').css({"width":"45%"});
        $('#p4').css({"width":"25%"});
        $('#p5').css({"width":"20%"});
    }
    else {

    }
});
});