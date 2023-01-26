// var navLinks=document.getElementById("navLinks");

// function showMenu(){
//     navLinks.style.right = "0";
 
// }

// function hideMenu(){
//     navLinks.style.right = "-200px";
// }


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    effects: true
})


var mySplitText = new SplitText("#quote" , { type:"words,chars"})

TweenLite.set("#quote" , {perspective:400});
TweenMax.staggerFrom(mySplitText.chars, 0.5 , {opacity:0, scale:0, rotationX:-180, y:80, transformOrigin:"0% 50% -50%" , ease:Back.easeOut } , 0.01 , allDone);

function allDone(){
    mySplitText.revert();
}


// TweenMax
gsap.fromTo(".course-col", {x: -10}, {x: 0, duration: 3});


// Scroll Magic
const controller = new ScrollMagic.Controller();

const scene  = new ScrollMagic.Scene({
    triggerElement: ".course",
    duration: 1000
})