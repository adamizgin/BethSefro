$(document).ready(function() {
	var rellax;
	$('#risho').load('header.html');
	setTimeout(function() {
		if ($('.relax')) {
			relax = new Rellax('.rellax');
		}
		setTimeout(function() {
			$('#loading-page').fadeOut();
		}, 500);

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

		$('.hvus').hover(function() {
			$(this).children('.risho-dropdown').fadeIn(200);
			$(this).children('.risho-dropdown').css({
				'bottom': '0'
			},);
		}, function() {
			$(this).children('.risho-dropdown').fadeOut(200);
			$(this).children('.risho-dropdown').css({
				'bottom': '100px'
			},);
		});

		$('.risho-dropdown a').hover(function() {
			$(this).css({
				'transform': 'translateX(5%)'
			});
		}, function() {
			$(this).css({
				'transform': 'translateX(0%)'
			});
		});

		$('#syriac-course-1').click(function() {
			setTimeout(function() {
				window.open('course1.html', '_self');
			}, 400);
		});
	}, 300);
	$('.not-connectable').html('<i class="fas fa-times"></i>');
	$('.connectable').html('<i class="fas fa-check"></i>');
});
