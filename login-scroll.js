$(window).on('scroll', function(e) {
	arhesh = $(this).scrollTop();
	SH = $('#mrabco1').height() / 10;
	if (arhesh >= SH) {
		$('#risho').css({
			'background': '#fff',
			'box-shadow': '0 0 10px 0 #0003'
		});
		$('#risho h3, #risho i').css({
			'color': '#000'
		});
		$('#logo-heworo').css({
			'-webkit-filter': 'invert(100%)',
			'filter': 'invert(100%)'
		});
		$('.hamLine').css({
			'background': '#000'
		});
	} else {
		$('#risho').css({
			'background': 'transparent',
			'box-shadow': 'none'
		});
		$('#risho h3, #risho i').css({
			'color': '#fff'
		});
		$('#logo-heworo').css({
			'-webkit-filter': 'none',
			'filter': 'none'
		});
		$('.hamLine').css({
			'background': '#fff'
		});
	}
});