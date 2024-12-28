import $ from 'jquery'
window.jQuery = $
window.$ = $

gsap.registerPlugin(ScrollTrigger);
import 'magnific-popup/dist/jquery.magnific-popup.min.js';

document.addEventListener('DOMContentLoaded', () => {

	$('.burger').on('click', function() {
		$('.mobile_menu').addClass('active');
		// $('body').addClass('actv');
	});

	$('.close').on('click', function() {
		$('.mobile_menu').removeClass('active');
		// $('body').removeClass('actv');
	});


	// SCROLL BLOCK ANIMATION
	if (window.screen.width > 1200) {
		const img = new Image();
		img.src = $('.fixed-5').data('src');
		img.onload = function() {

		var action = gsap.to('.fixed', {ease: 'none', duration: 0.25 });



		// var height = $('.fixed').height() + 20;
		// ScrollTrigger.create({
		// 	trigger: ".fixed",
		// 	start: "top 20px",
		// 	endTrigger: '.end_transition',
		// 	end: 'bottom '+height+'px',
		// 	// markers: true,
		// 	pin: true,
		// 	pinSpacing: false,
		// 	animation: action,
		// 	toggleActions: 'play reverse play reverse'
		// });

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
		// console.log(height4)
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
		// console.log(height5)
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

	// ANIMATIONS
	if (window.screen.width > 1200) {

		if ($('.hero_anim_title').length) {
			gsap.from('.hero_anim_title', {opacity: 0, duration: 1.5, delay: 1, y: 30});
		}
		if ($('.hero_anim_subtitle').length) {
			gsap.from('.hero_anim_subtitle', {opacity: 0, duration: 1, delay: 2, y: 30});
		}
		if ($('.hero_anim_btn').length) {
			gsap.from('.hero_anim_btn', {opacity: 0, duration: 1.5, delay: 2.2, y: 30});
		}
		if ($('.hero_anim_info').length) {
			gsap.from('.hero_anim_info', {opacity: 0, duration: 1.5, delay: 2.5, y: 30});
		}
		if ($('.hero_anim_img').length) {
			gsap.from('.hero_anim_img', {opacity: 1, duration: 3, delay: 1.2, scale: 0});
		}
		if ($('.hero_anim_img_0').length) {
			gsap.from('.hero_anim_img_0', {opacity: 1, duration: 0.8, delay: 2, scale: 0});
		}
		if ($('.hero_anim_img_2').length) {
			gsap.from('.hero_anim_img_2', {opacity: 0, duration: 0.8, delay: 3.2, y: 150, x: -150});
		}


		if ($('.top-line').length) {
			gsap.from('.top-line', {opacity: 0, duration: 1, delay: 0.5, y: -30});
		}
		if ($('.animation_right').length) {
			gsap.from('.animation_right', {opacity: 0, duration: 1, delay: 0.9, x: 30});
		}
		if ($('.animation_opac').length) {
			gsap.from('.animation_opac', {opacity: 0, duration: 1, delay: 0.7});
		}
		if ($('.animation_bottom').length) {
			gsap.from('.animation_bottom', {opacity: 0, duration: 1, delay: 3, y: 30});
		}
		if ($('.animation_top').length) {
			gsap.from('.animation_top', {opacity: 0, duration: 1, delay: 1.3, y: -30});
		}

		if ($('.about_wrapper').length) {
			gsap.from(".about_wrapper img", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".about_wrapper",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.from(".about_wrapper .col-xl-8", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".about_wrapper",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('.servs').length) {
			gsap.from(".servs .section_title", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".servs",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.utils.toArray(".servs .servs_item").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else if (i == 3) {
					j = 0.5;
				} else if (i == 4) {
					j = 0.8;
				} else if (i == 5) {
					j = 1.2;
				} else if (i == 6) {
					j = 1.4;
				} else if (i == 7) {
					j = 1.6;
				} else if (i == 8) {
					j = 1.8;
				} else if (i == 9) {
					j = 2;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.2,
					delay: j,
					y: 30,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}

		if ($('.advantage').length) {
			gsap.from(".advantage_title", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".advantage",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.utils.toArray(".advantage .advantage_block").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else if (i == 3) {
					j = 0.5;
				} else if (i == 4) {
					j = 0.8;
				} else if (i == 5) {
					j = 1.2;
				} else if (i == 6) {
					j = 1.4;
				} else if (i == 7) {
					j = 1.6;
				} else if (i == 8) {
					j = 1.8;
				} else if (i == 9) {
					j = 2;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.4,
					delay: j,
					y: 50,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}

		if ($('.scroll_block-1').length) {
			gsap.from(".scroll_block-1 .section_title", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".scroll_block-1",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.utils.toArray(".scroll_block-1 .scroll_block_item").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else if (i == 3) {
					j = 0.5;
				} else if (i == 4) {
					j = 0.8;
				} else if (i == 5) {
					j = 1.2;
				} else if (i == 6) {
					j = 1.4;
				} else if (i == 7) {
					j = 1.6;
				} else if (i == 8) {
					j = 1.8;
				} else if (i == 9) {
					j = 2;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.4,
					delay: j,
					y: 50,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}
		if ($('.scroll_block-2').length) {
			gsap.from(".scroll_block-2 .section_title", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".scroll_block-2",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.utils.toArray(".scroll_block-2 .scroll_block_item").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else if (i == 3) {
					j = 0.5;
				} else if (i == 4) {
					j = 0.8;
				} else if (i == 5) {
					j = 1.2;
				} else if (i == 6) {
					j = 1.4;
				} else if (i == 7) {
					j = 1.6;
				} else if (i == 8) {
					j = 1.8;
				} else if (i == 9) {
					j = 2;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.4,
					delay: j,
					y: 50,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}
		if ($('.scroll_block-3').length) {
			gsap.from(".scroll_block-3 .section_title", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".scroll_block-3",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.utils.toArray(".scroll_block-3 .scroll_block_item").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else if (i == 3) {
					j = 0.5;
				} else if (i == 4) {
					j = 0.8;
				} else if (i == 5) {
					j = 1.2;
				} else if (i == 6) {
					j = 1.4;
				} else if (i == 7) {
					j = 1.6;
				} else if (i == 8) {
					j = 1.8;
				} else if (i == 9) {
					j = 2;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.4,
					delay: j,
					y: 50,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}
		if ($('.scroll_block-4').length) {
			gsap.from(".scroll_block-4 .section_title", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".scroll_block-4",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.utils.toArray(".scroll_block-4 .scroll_block_item").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else if (i == 3) {
					j = 0.5;
				} else if (i == 4) {
					j = 0.8;
				} else if (i == 5) {
					j = 1.2;
				} else if (i == 6) {
					j = 1.4;
				} else if (i == 7) {
					j = 1.6;
				} else if (i == 8) {
					j = 1.8;
				} else if (i == 9) {
					j = 2;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.4,
					delay: j,
					y: 50,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}
		if ($('.scroll_block-5').length) {
			gsap.from(".scroll_block-5 .section_title", {
				opacity: 0, 
				duration: 1,
				y: 30,
				scrollTrigger: {
					trigger: ".scroll_block-5",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});

			gsap.utils.toArray(".scroll_block-5 .scroll_block_item").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else if (i == 3) {
					j = 0.5;
				} else if (i == 4) {
					j = 0.8;
				} else if (i == 5) {
					j = 1.2;
				} else if (i == 6) {
					j = 1.4;
				} else if (i == 7) {
					j = 1.6;
				} else if (i == 8) {
					j = 1.8;
				} else if (i == 9) {
					j = 2;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.4,
					delay: j,
					y: 50,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}

		if ($('.checkup').length) {

			var action = gsap.to('.checkup', {ease: 'none', duration: 0.25 });
			ScrollTrigger.create({
				trigger: ".scroll_block-1",
				endTrigger: '.checkup',
				start: "bottom 90%", 
				end: "top -10%",
				// markers: true,
				pin: true,
				pinSpacing: false,
				// animation: action,
				toggleActions: 'play reverse play reverse'
			});

			// gsap.from(".checkup", {
			// 	opacity: 0, 
			// 	duration: 1,
			// 	y: 80,
			// 	scrollTrigger: {
			// 		trigger: ".checkup",
			// 		start:"top 70%",
			// 		end: "+=500",
			// 		toggleActions: "play none none none ",
			// 		// markers: true,
			// 	}
			// });
		}

		if ($('.drop').length) {
			gsap.from(".drop", {
				opacity: 0, 
				duration: 1,
				y: 80,
				scrollTrigger: {
					trigger: ".drop",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('.therapy').length) {
			gsap.from(".therapy", {
				opacity: 0, 
				duration: 1,
				y: 80,
				scrollTrigger: {
					trigger: ".therapy",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('.urology').length) {
			gsap.from(".urology", {
				opacity: 0, 
				duration: 1,
				y: 80,
				scrollTrigger: {
					trigger: ".urology",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('.checkup-list').length) {
			gsap.from(".checkup-list", {
				opacity: 0, 
				duration: 1,
				y: 80,
				scrollTrigger: {
					trigger: ".checkup-list",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('footer').length) {
			gsap.from("footer", {
				opacity: 0, 
				duration: 1,
				y: 120,
				scrollTrigger: {
					trigger: "footer",
					start:"top 100%",
					end: "top 10%",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('.checkup-page.promo').length) {
			gsap.from(".checkup-page.promo", {
				opacity: 0, 
				duration: 1,
				y: 80,
				scrollTrigger: {
					trigger: ".checkup-page.promo",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('.doctor').length) {
			gsap.from(".doctor .col-xl-4", {
				opacity: 0, 
				duration: 1,
				x: -60,
				scrollTrigger: {
					trigger: ".doctor",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
			gsap.from(".doctor .col-xl-8", {
				opacity: 0, 
				duration: 1,
				x: 60,
				scrollTrigger: {
					trigger: ".doctor",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}

		if ($('.doctor-list').length) {

			gsap.utils.toArray(".doctor-list .col-xl-12").forEach((panel, i) => {
				if(i == 1) {
					var j = 0.2;
				} else if (i == 2) {
					j = 0.4;
				} else {
					j = 0.5;
				}
				
				gsap.from(panel, {
					opacity: 0, 
					duration: 0.4,
					delay: j,
					y: 50,
					scrollTrigger: {
						trigger: panel,
						start:"top 97%",
						// end: "+=500",
						toggleActions: "play none none none ",
						// markers: true,
					}
				});
			});
		}

		if ($('.drop-list').length) {
			gsap.from(".drop-list", {
				opacity: 0, 
				duration: 1,
				y: 80,
				scrollTrigger: {
					trigger: ".drop-list",
					start:"top 70%",
					end: "+=500",
					toggleActions: "play none none none ",
					// markers: true,
				}
			});
		}
	}


})
