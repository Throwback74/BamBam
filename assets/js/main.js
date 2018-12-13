/*
	Telephasic by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			// xlarge:   [ '1281px',  '1680px' ],
			// large:    [ '981px',   '1280px' ],
			// medium:   [ '737px',   '980px'  ],
			// small:    [ '481px',   '736px'  ],
			// xsmall:   [ '361px',   '480px'  ],
			// xxsmall:  [ null,      '360px'  ],
			normal:    [ '1081px',  '1280px'  ],
			narrow:    [ '821px',   '1080px'  ],
			narrower:  [ '737px',   '820px'   ],
			mobile:    [ '481px',   '736px'   ],
			mobilep:   [ null,      '480px'   ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

	// Mobile?
	if (browser.mobile)
	$body.addClass('is-mobile');
else {

	breakpoints.on('>medium', function() {
		$body.removeClass('is-mobile');
	});

	breakpoints.on('<=medium', function() {
		$body.addClass('is-mobile');
	});

}

	// Nav.

		// Buton.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						'<a href="index.html" class="link depth-0">Home</a>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					resetScroll: true,
					resetForms: true,
					side: 'top',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

				// Scrolly replacement code 
				// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
	// On-page links
	if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		&& 
		location.hostname == this.hostname
	) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000, function() {
				// Callback after animation
				// Must change focus!
				var $target = $(target);
				$target.focus();
				if ($target.is(":focus")) { // Checking if the target was focused
					return false;
				} else {
					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
					$target.focus(); // Set focus again
				};
			});
		}
	}
});

})(jQuery);