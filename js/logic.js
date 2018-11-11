$(document).ready(function () {
	$('section').eq(0).show();
	$('.navbar-nav').on('click', 'li', function () {
		$('section').eq($(this).index()).show().siblings('section:visible').hide();
	});
});