function loadingAnimation() {
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

            }, 33)
        },
    })

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 4
    })

    tl.from("#page1", {
        delay: 0.2,
        y: 1600,
        duration: 0.6,
        ease: Power4,
    })

    tl.to("#loader", {
        display: "none",
    })

    tl.from("#nav",{
        opacity: 0,
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
        y: 120,
        stagger: 0.2,
    })
}
loadingAnimation()


function cursorAnimatoin() {

    // Below is effect of one white corcle chasing cursor //
    document.addEventListener("mousemove", function (dets) {
        // console.log(dets.x)
        gsap.to("#crsr", {
            left: dets.x, // dets.x -> x coordinate
            top: dets.y,  // dets.y -> y coordinate
            // duration: 0.2, // this is to control speed of chasing but not necessary
        })
    })


    // Below is for using magnet effect using sheryjs. it is awailable on npmjs (website) -> sheryjs (search) //
    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {

    });
}
cursorAnimatoin()


