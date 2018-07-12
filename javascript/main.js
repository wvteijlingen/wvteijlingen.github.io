//Scrolling anchors
$(document).ready(function() {
	$('a').click(function() {
		var href = $(this).attr('href');

		if(!href.charAt(0) === '#') return;

		var target = $(href);

		$('html, body').animate({
			scrollTop: target.offset().top
		}, 250);

		return false;
	});
});