$(document).ready(function() {
	var rellax;
	if ($('.relax')) {
		relax = new Rellax('.rellax');
	}
	setTimeout(function() {
		$('#loading-page').fadeOut();
	}, 500);
	$('#risho').load('header.html');

	$('.hvus').click(function() {
		$hano = $(this);
		$(this).find('.hvus-animation').show();
		$(this).find('.hvus-animation').css({
			'height': '0',
			'transition': 'none'
		});
		setTimeout(function() {
			$hano.find('.hvus-animation').css({
				'transition': 'height 250ms ease-in-out'
			});
			setTimeout(function() {
				$hano.find('.hvus-animation').css({
					'height': '100%'
				});
				setTimeout(function() {
					$hano.find('.hvus-animation').fadeOut();
				}, 450);
			});
		});
	});

	$('#login-uName').focus(function() {
		$('#uName-border').css({
			'width': '100%'
		});
	});
	$('#login-uName').blur(function() {
		$('#uName-border').css({
			'width': '0'
		});
	});
	$('#login-pwd').focus(function() {
		$('#pwd-border').css({
			'width': '100%'
		});
	});
	$('#login-pwd').blur(function() {
		$('#pwd-border').css({
			'width': '0'
		});
	});

	$('.login-form button').append('<span class="ripple"></span>');
	$('.login-form button').click(function(e) {
		let top = $(window).scrollTop() - $(this).offset().top + e.clientY;
		let left = $(window).scrollLeft() - $(this).offset().left + e.clientX;
		$(this).children('span').css({
			"left": left,
			"top": top
		});
		$(this).children('span').addClass('activeRipple');
		setTimeout(function() {
			$('.ripple').removeClass('activeRipple');
		}, 500);
	});

	$('#login-hvus').click(function() {
		setTimeout(function() {
			window.open('login-page.html', '_self');
		}, 400);
	});
	$('#home-hvus').click(function() {
		setTimeout(function() {
			window.open('index.html', '_self');
		}, 400);
	});

	// Login system
	var name = $('#login-uName');
	var pwd = $('#login-pwd');
	var loginBtn = $('#login-button');
	var loginError = $('#login-error');
	loginBtn.click(function() {
		if ($('#login-uName').html()) {
			alert();
		}
	});
});
