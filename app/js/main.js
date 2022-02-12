"use strict";

// preloader animation
/* const logoStrokes = document.querySelectorAll(".preloader-logo path, .preloader-logo rect");

logoStrokes.forEach(logoStroke => {

    const preloaderTimeline = gsap.timeline();

    preloaderTimeline.fromTo(logoStroke, 1.5, {
        strokeDashoffset: logoStroke.getTotalLength(),
        strokeDasharray: logoStroke.getTotalLength(),
    }, {
        strokeDashoffset: 0,
    })
    .to(logoStrokes, 0.5, {
        fill: 'rgba(255, 255, 255, 1)',
    })
    .to('.preloader-logo', 0.5, {
        y: 20,
        opacity: 0,
        ease: Power2.easeOut
    })    
    .to('.preloader', 1, {
        height: '0%',
        ease: Power2.easeOut
    }, '-=10%')    
});
 */

// nav toggle animation
const navToggle = document.querySelector(".nav-toggle");
const toggleLines = document.querySelector(".toggle-lines");
const lineOne = toggleLines.querySelector("rect:nth-child(1)");
const lineTwo = toggleLines.querySelector("rect:nth-child(2)");
const lineThree = toggleLines.querySelector("rect:nth-child(3)");

const toggleAnimation = gsap.timeline({
  reversed: true,
  paused: true,
});

gsap.set([lineOne, lineTwo, lineThree], { transformOrigin: "50% 50%" });

toggleAnimation
  .to(lineOne, 0.35, { 
      y: 14, 
    })
  .to( lineThree, 0.35, {
      y: -14,
    }, "<" )
  .to( lineTwo, 0.35, {
      scaleX: 0,
    }, "-=50%" )
  .to(lineOne, 0.35, {
    rotate: 45,
  })
  .to( lineThree, 0.35, {
      rotate: -45,
    }, "<" );

navToggle.addEventListener("click", () => {
  toggleAnimation.reversed() ? toggleAnimation.play() : toggleAnimation.reverse();
});
