"use strict";const logoStrokes=document.querySelectorAll(".preloader-logo path, .preloader-logo rect");logoStrokes.forEach((e=>{gsap.timeline().fromTo(e,1.5,{strokeDashoffset:e.getTotalLength(),strokeDasharray:e.getTotalLength()},{strokeDashoffset:0}).to(logoStrokes,.5,{fill:"rgba(255, 255, 255, 1)"}).to(".preloader-logo",.5,{y:20,opacity:0,ease:Power2.easeOut}).to(".preloader",1,{height:"0%",ease:Power2.easeOut},"-=10%")}));
//# sourceMappingURL=main.js.map
