"use strict";

// preloader animation
const logoStrokes = document.querySelectorAll(".preloader-logo path, .preloader-logo rect");

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
