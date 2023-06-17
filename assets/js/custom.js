
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('.navbar').height();
		if ($(window).scrollTop() > navHeight) {
			$('.navbar').addClass('fixed');
		 }
		else {
			$('.navbar').removeClass('fixed');
		 }
	});
});