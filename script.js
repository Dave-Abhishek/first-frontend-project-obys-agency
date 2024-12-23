function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

function loadingAnimation() {

    /*
    // Below coment is due to one problem but now problem resolved because of "locomotive js".
    // Disable scrolling during the animation
    document.body.style.overflow = "hidden"; // this lone is not in Video, this line added by me using ChatGPT.
    //Enable function name is "tl.call(() =>{})".
    //if any pdoblem occurs then remove the above line as well as last line which mention like this same comment.
    */

    var tl = gsap.timeline()

    tl.from(".line h1", {
        y: 150, //gsap.from -> that means animation will be from y:150 to y:0
        stagger: 0.25, //stagger is used to animate one by one of each element ( here h1 will animate one by one)
        duration: 0.6,
        delay: 0.5,
    })

 
    tl.from("#line1-part1", {
        opacity: 0,

        onStart: function () {
            var h5timer = document.querySelector("#line1-part1 h5")
            var grow = 0
            setInterval(function () {
                if (grow < 100) {
                    h5timer.innerHTML = grow++
                }
                else {
                    h5timer.innerHTML = grow
                }

            }, 27)
        },
    })

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 2.6,
    })

    tl.from("#page1", {
        delay: 0.2,
        // In video, samarth takes y: 1600, but I am taking y: 16,
        y: 1600,
        duration: 0.6,
        // ease: power4,
        ease: "power4.out",

    })

    tl.to("#loader", {
        display: "none",
    })

    tl.from("#nav", {
        opacity: 0,
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 140,
        stagger: 0.2,
    })
    tl.from("#hero1, #page2", {
        opacity: 0,
    }, "-=1.2") //this -> }, "-=1.2") <- will run this tl.from before others.

    /*
    // Below coment is due to one problem but now problem resolved because of "locomotive js".
    tl.call(() => {
        document.body.style.overflow = "auto"; // this lone is not in Video, this line added by me using ChatGPT.
        window.scrollTo(0, 0); // Ensure the scrollbar stays at the top
    });
    // Enable scrolling after the animation
    */
}

function cursorAnimatoin() {
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5, 
    });
    Shery.makeMagnet("#nav-part2 h4");

    // Below code is for video container that animate yellow circle following cursor inside video container
    var videoContainer = document.querySelector("#video-container");
    var video = document.querySelector("#video-container video");
    videoContainer.addEventListener("mouseenter", function() {
        // Language-Gujarati: jem jem mouse movement karse tem tem function run thase.
        videoContainer.addEventListener("mousemove", function (dets) {
            gsap.to(".mousefollower",{
                opacity: 0,
                //display none is not wirking I don't know why ?
                // display: "none",
            })
            gsap.to("#video-cursor", {
                left: dets.x - 490,
                top: dets.y -300,
            })
        })
    })
    videoContainer.addEventListener("mouseleave", function() {
        gsap.to(".mousefollower",{
            opacity: 1,
            // display: "initial",
        })
        gsap.to("#video-cursor", {
            left: "70%",
            top: "-15%",
        })
    })
    var flag = 0;
    videoContainer.addEventListener("click", function() {
        if(flag == 0){
            video.play();
            video.style.opacity = 1;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
            gsap.to("#video-cursor",{
                scale:0.7,
            })
            flag = 1;
        }
        else{
            video.pause();
            video.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
            gsap.to("#video-cursor",{
                scale:1,
            })
            flag = 0;
        }
    })
}

function page3Animation() {
    Shery.imageEffect(".image-div", {
        style: 5,
        // debug: true, 
        // //first run this debug then arrange according to you then click on save to clipboard then make config and paste.
        config: { "a": { "value": 1.15, "range": [0, 30] }, "b": { "value": 1, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272749932567818 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 2.18, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.09, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.46, "range": [0, 10] }, "metaball": { "value": 0.41, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
        gooey: true,
    })
}

loadingAnimation()
cursorAnimatoin()
locomotiveAnimation()
page3Animation()

document.addEventListener("mousemove",function (dets) {
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y,
    })
})
document.querySelector("#hero3").addEventListener("mouseenter", function() {
    gsap.to("#flag",{
        opacity: 1,
    })
})
document.querySelector("#hero3").addEventListener("mouseleave", function() {
    gsap.to("#flag",{
        opacity: 0,
    })
})

//First Function to use cursor animation but then used shery js fot that.
// function cursorAnimatoin() {

//     // Below is effect of one white corcle chasing cursor //
//     document.addEventListener("mousemove", function (dets) {
//         // console.log(dets.x)
//         gsap.to("#crsr", {
//             left: dets.x, // dets.x -> x coordinate
//             top: dets.y,  // dets.y -> y coordinate
//             // duration: 0.2, // this is to control speed of chasing but not necessary
//         })
//     })


//     // Below is for using magnet effect using sheryjs. it is awailable on npmjs (website) -> sheryjs (search) //
//     Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {

//     });
// }