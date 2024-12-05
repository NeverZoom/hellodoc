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
			end: 'bottom 395px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action2,
			toggleActions: 'play reverse play reverse'
		});

		var action3 = gsap.to('.fixed-3', {ease: 'none', duration: 0.25 });
		ScrollTrigger.create({
			trigger: ".fixed-3",
			start: "top 20px",
			endTrigger: '.end_transition3',
			end: 'bottom 395px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action3,
			toggleActions: 'play reverse play reverse'
		});

		var action4 = gsap.to('.fixed-4', {ease: 'none', duration: 0.25 });
		ScrollTrigger.create({
			trigger: ".fixed-4",
			start: "top 20px",
			endTrigger: '.end_transition4',
			end: 'bottom 395px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action4,
			toggleActions: 'play reverse play reverse'
		});

		var action5 = gsap.to('.fixed-5', {ease: 'none', duration: 0.25 });
		ScrollTrigger.create({
			trigger: ".fixed-5",
			start: "top 20px",
			endTrigger: '.end_transition5',
			end: 'bottom 395px',
			// markers: true,
			pin: true,
			pinSpacing: false,
			animation: action5,
			toggleActions: 'play reverse play reverse'
		});
	}

})
