const track = document.getElementById("featuresTrack")
const dots = document.querySelectorAll(".features__dot")
const slides = document.querySelectorAll(".feature")

function updateActiveDot(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle("features__dot--active", i === index)
    })
}

function getCurrentSlideIndex() {
    const trackScroll = track.scrollLeft
    const slideWidth = track.clientWidth
    return Math.round(trackScroll / slideWidth)
}

track.addEventListener("scroll", () => {
    const activeIndex = getCurrentSlideIndex()
    updateActiveDot(activeIndex)
})

dots.forEach ((dot, index) => {
    dot.addEventListener("click", () => {
        track.scrollTo({
            left: track.clientWidth * index, 
            behavior: "smooth"
        })
    })
})

window.addEventListener("resize", () => {
    updateActiveDot(getCurrentSlideIndex())
})