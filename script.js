var tl = gsap.timeline()

tl.from(".line h1",{
    y: 150, //gsap.from -> that means animation will be from y:150 to y:0
    stagger: 0.25, //stagger is used to animate one by one of each element ( here h1 will animate one by one)
    duration: 0.6,
    delay: 0.5,
})

tl.from("#line1-part1",{
    opacity: 0,

    onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function() {
            if(grow<100)
            {
                h5timer.innerHTML = grow++
            }
            else{
                h5timer.innerHTML = grow
            }
    
        },33)
    },
})

tl.to(".line h2",{
    animationName: "anime",
    opacity: 1
})

tl.to("#loader",{
    opacity: 0,
    duration: 0.2,
    delay: 4
})

tl.from("#page1",{
    delay: 0.2,
    y:1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
})

tl.to("#loader",{
    display: "none",
})