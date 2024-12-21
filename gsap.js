let container = document.getElementById("container");
container.addEventListener("mousemove", (dets) => {
    gsap.to(".cursor", {
        x:dets.x,
        y:dets.y,
        duration: 0.4,
    })
})
gsap.to(".pepsi-can-heading", {
    left: "15%",
    duration: 3,
})
let pepsi = gsap.timeline({scrollTrigger:{
    trigger: ".pepsiabout",
    start: "0%, 95%",
    end: "10% 50%",
    scrub: true,
    duration: 5,
    // markers: true,
}})
pepsi.to(".pepsican", {
    top: "105%",
    left: "13%",
    
}, 'p')
pepsi.to(".pepsiheading", {
    fontSize: 45,
}, 'p')
pepsi.to(".pepsibuy", {
    left: "0%",
}, 'p')


// Fanta 

let fanta = gsap.timeline({scrollTrigger:{
    trigger: ".fantapage",
    start: "10% 95%",
    end: "50% 50%", 
    scrub: true,
}})
fanta.to(".fantaheading", {
    left: "8%",
}, 'orange')
fanta.to(".fantacan", {
    rotate: 0,
}, 'orange')
fanta.to(".orange", {
    marginTop: "4%",
}, 'orange')
fanta.to(".oranges", {
    left: "50%",
}, 'orange')
fanta.to(".leave", {
    margin: "34%",
    left: "48%",
    rotate: 360,
}, 'orange')