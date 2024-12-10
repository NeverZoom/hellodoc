import $ from 'jquery'
window.jQuery = $
window.$ = $

gsap.registerPlugin(ScrollTrigger);
import 'magnific-popup/dist/jquery.magnific-popup.min.js';

document.addEventListener('DOMContentLoaded', () => {

	// SCROLL BLOCK ANIMATION
	if (window.screen.width > 1200) {
		var action = gsap.to('.fixed', {ease: 'none', duration: 0.25 });
		var height = $('.fixed').height() + 20;
		ScrollTrigger.create({
			trigger: ".fixed",
			start: "top 20px",
			endTrigger: '.end_transition',
			end: 'bottom '+height+'px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action,
			toggleActions: 'play reverse play reverse'
		});

		var action2 = gsap.to('.fixed-2', {ease: 'none', duration: 0.25 });
		var height2 = $('.fixed-2').height() + 20;
		ScrollTrigger.create({
			trigger: ".fixed-2",
			start: "top 20px",
			endTrigger: '.end_transition2',
			end: 'bottom '+height2+'px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action2,
			toggleActions: 'play reverse play reverse'
		});

		var action3 = gsap.to('.fixed-3', {ease: 'none', duration: 0.25 });
		var height3 = $('.fixed-3').height() + 20;
		ScrollTrigger.create({
			trigger: ".fixed-3",
			start: "top 20px",
			endTrigger: '.end_transition3',
			end: 'bottom '+height3+'px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action3,
			toggleActions: 'play reverse play reverse'
		});

		var action4 = gsap.to('.fixed-4', {ease: 'none', duration: 0.25 });
		var height4 = $('.fixed-4').height() + 20;
		ScrollTrigger.create({
			trigger: ".fixed-4",
			start: "top 20px",
			endTrigger: '.end_transition4',
			end: 'bottom '+height4+'px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action4,
			toggleActions: 'play reverse play reverse'
		});

		var action5 = gsap.to('.fixed-5', {ease: 'none', duration: 0.25 });
		var height5 = $('.fixed-5').height() + 20;
		// console.log(height);
		ScrollTrigger.create({
			trigger: ".fixed-5",
			start: "top 20px",
			endTrigger: '.end_transition5',
			end: 'bottom '+height5+'px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action5,
			toggleActions: 'play reverse play reverse'
		});
	}

	// POPUPS 
	if ($('.checkup .checkup_item').length) {
		$('.checkup .checkup_item').each(function( index ) {
			var count = index+1;
			$('.checkup_popup_'+count).magnificPopup({
				type: 'inline',
				preloader: false,
				showCloseBtn: false,
				focus: '#name',
				mainClass: 'mfp-with-zoom',
				zoom: {
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function(openerElement) {
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				},
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					},
					close: function() {
						// Will fire when popup is closed	
					}
				}
			});
		});
	}

	if ($('.checkup-list .checkup-list_item').length) {
		$('.checkup-list .checkup-list_item').each(function( index ) {
			var count = index+1;
			$('.checkup-list_item_popup_'+count).magnificPopup({
				type: 'inline',
				preloader: false,
				showCloseBtn: false,
				focus: '#name',
				mainClass: 'mfp-with-zoom',
				zoom: {
					enabled: true,
					duration: 300,
					easing: 'ease-in-out',
					opener: function(openerElement) {
						return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				},
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					},
					close: function() {
						// Will fire when popup is closed	
					}
				}
			});
		});
	}

})
