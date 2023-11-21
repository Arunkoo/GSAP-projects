var t1 = gsap.timeline();
t1.from("#nav img, #nav h3, #nav h4, #nav button", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    // stagger: 0.5,
})

t1.from(".main h1", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    // stagger: 1,
})
t1.from(".main > img", {
    scale: 3,
    opacity: 0,
    stagger: 0.1,
})
t1.from("#btn2", {
    y: -15,
    duration: 2,
    delay: 0.5,
    // opacity: 0,
})