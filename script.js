const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// Gsap animation
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "20% 50%",
        end: "100% 50%",
        markers: true,
        scrub: 1
    },
});

tl.to(".text-area-hover h1",{
    width: "100%",
});
tl.to(".text-area-hover h2",{
    delay: -0.4,
    width: "100%",
});