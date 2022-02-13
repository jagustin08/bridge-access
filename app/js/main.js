"use strict";

// preloader animation
const logoStrokes = document.querySelectorAll( ".preloader-logo path, .preloader-logo rect" );

logoStrokes.forEach((logoStroke) => {
  const preloaderTimeline = gsap.timeline();

  preloaderTimeline.fromTo( logoStroke, 2, {
        strokeDashoffset: logoStroke.getTotalLength(),
        strokeDasharray: logoStroke.getTotalLength(),
      },
      {
        strokeDashoffset: 0,
      }
    )
    .to(logoStrokes, 0.5, { 
      fill: "rgba(255, 255, 255, 1)" 
    })
    .to(".preloader-logo", 0.5, { 
      y: 20, 
      opacity: 0, 
      ease: Power2.easeOut 
    })
    .to(".preloader", 1, { 
      height: "0%", 
      ease: Power2.easeOut 
    }, "-=10%")
    .fromTo( ".hero-img", 0.4, { 
      scale: 1.1, 
      ease: Power2.easeOut, 
      filter: "blur(1px)" 
    },
    { 
      scale: 1, 
      filter: "blur(0px)" 
    }, "<" )
    .fromTo( ".main-header", 0.4, { 
      yPercent: -100 
    },
    { 
      yPercent: 0, 
      ease: Power2.easeOut, 
      delay: 0.4 
    }, "-=50%" )
    .to(".hero .fadeInUp", 1, {
      opacity: 1,
      top: 0,
      stagger: 0.15,
      ease: Power2.easeOut,
    });
});

// nav toggle animation
const navToggle = document.querySelector(".nav-toggle");
const toggleLines = document.querySelector(".toggle-lines");
const lineOne = toggleLines.querySelector("rect:nth-child(1)");
const lineTwo = toggleLines.querySelector("rect:nth-child(2)");
const lineThree = toggleLines.querySelector("rect:nth-child(3)");

gsap.set([lineOne, lineTwo, lineThree], { transformOrigin: "50% 50%" });

const toggleAnimation = gsap.timeline({
  reversed: true,
  paused: true,
});

toggleAnimation
  .to(lineOne, 0.15, { y: 14 })
  .to(lineThree, 0.15, { y: -14 }, "<")
  .to(lineTwo, 0.15, { scaleX: 0 }, "-=50%")
  .to(lineOne, 0.15, { rotate: 45 })
  .to(lineThree, 0.15, { rotate: -45 }, "<")
  .fromTo( ".main-nav", 0.35, { 
    height: 0, 
    ease: Power2.easeInOut 
  },
  { 
    height: "auto" 
  }, "<" );

navToggle.addEventListener("click", () => {
  toggleAnimation.reversed() ? toggleAnimation.play() : toggleAnimation.reverse();
});

// Initialize swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
