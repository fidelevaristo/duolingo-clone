const testimonialsTrack = document.getElementById("testimonialsTrack")
const testimonialsDots = document.querySelectorAll(".testimonials__dot")
const testimonialsCards = document.querySelectorAll(".testimonials-card")

function updateActiveTestimonialsDot(index) {
    testimonialsDots.forEach((dot, currentIndex) => {
        dot.classList.toggle("testimonials__dot--active", currentIndex === index)
    })
}

function getCurrentTestimonialsIndex() {
    const scrollPosition = testimonialsTrack.scrollLeft
    const slideWidth = testimonialsTrack.clientWidth
    return Math.round(scrollPosition / slideWidth)
}

testimonialsTrack.addEventListener("scroll", () => {
    const activeIndex = getCurrentTestimonialsIndex()
    updateActiveTestimonialsDot(activeIndex)
})

testimonialsDots.forEach(("click"), () => {
    testimonialsTrack.scroll({
        left: testimonialsTrack.clientWidth * index,
        behavior: "smooth"
    })
})

window.addEventListener("resize", () => {
    updateActiveDot(getCurrentSlideIndex())
})