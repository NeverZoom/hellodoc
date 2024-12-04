import $ from 'jquery'
window.jQuery = $
window.$ = $

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {


	// SCROLL BLOCK ANIMATION
	if (window.screen.width > 1200) {
		var action = gsap.to('.fixed', {ease: 'none', duration: 0.25 });
		ScrollTrigger.create({
			trigger: ".fixed",
			start: "top 20px",
			endTrigger: '.end_transition',
			end: 'bottom 595px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action,
			toggleActions: 'play reverse play reverse'
		});

		var action2 = gsap.to('.fixed-2', {ease: 'none', duration: 0.25 });
		ScrollTrigger.create({
			trigger: ".fixed-2",
			start: "top 20px",
			endTrigger: '.end_transition2',
			end: 'bottom 385px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action2,
			toggleActions: 'play reverse play reverse'
		});
	}

})
