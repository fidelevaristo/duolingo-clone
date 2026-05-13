import { $, $$, on } from "../utils/dom.js";

/**
 * Inizializza un carousel orizzontale con navigazione tramite dots.
 *
 * @param {Object} config
 * @param {string} config.trackSelector - Selettore CSS dell'elemento che contiene lo scroll
 * @param {string} config.dotSelector - Selettore CSS dei dots di navigazione
 * @param {string} config.activeDotClass - Classe CSS applicata al dot attivo
 */
function initCarousel({ trackSelector, dotSelector, activeDotClass }) {
  const track = $(trackSelector);

  if (!track) return;

  const container = track.parentElement;
  const dots = $$(dotSelector, container);

  if (dots.length === 0) return;

  function updateActiveDot(activeIndex) {
    dots.forEach((dot, currentIndex) => {
      dot.classList.toggle(activeDotClass, currentIndex === activeIndex);
    });
  }

  function getCurrentSlideIndex() {
    const slideWidth = track.clientWidth;

    if (slideWidth === 0) return 0;

    return Math.round(track.scrollLeft / slideWidth);
  }

  function scrollToSlide(index) {
    track.scrollTo({
      left: track.clientWidth * index,
      behavior: "smooth",
    });
  }

  function handleScroll() {
    updateActiveDot(getCurrentSlideIndex());
  }

  function handleResize() {
    updateActiveDot(getCurrentSlideIndex());
  }

  on(track, "scroll", handleScroll);
  on(window, "resize", handleResize);

  dots.forEach((dot, index) => {
    on(dot, "click", () => {
      scrollToSlide(index);
    });
  });

  updateActiveDot(0);
}

initCarousel({
  trackSelector: "#featuresTrack",
  dotSelector: ".features__dot",
  activeDotClass: "features__dot--active",
});

initCarousel({
  trackSelector: "#testimonialsTrack",
  dotSelector: ".testimonials__dot",
  activeDotClass: "testimonials__dot--active",
});
