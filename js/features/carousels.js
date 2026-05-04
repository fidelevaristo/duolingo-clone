/**
 * Inizializza un carousel orizzontale con navigazione tramite dots.
 *
 * @param {Object} config
 * @param {string} config.trackId - ID dell'elemento che contiene lo scroll (track)
 * @param {string} config.dotSelector - Selettore CSS per i dots di navigazione
 * @param {string} config.activeDotClass - Classe CSS da applicare al dot attivo
 */
function initCarousel({ trackId, dotSelector, activeDotClass }) {
  // Recupera il contenitore principale dello scroll
  const track = document.getElementById(trackId);

  // Se il track non esiste, interrompe l'inizializzazione
  if (!track) return;

  // Limita la ricerca dei dots al container del carousel
  const container = track.parentElement;
  const dots = container.querySelectorAll(dotSelector);

  // Se non ci sono dots, non ha senso inizializzare il comportamento
  if (dots.length === 0) return;

  /**
   * Aggiorna lo stato attivo dei dots
   * @param {number} index - Indice dello slide attivo
   */
  function updateActiveDot(index) {
    dots.forEach((dot, currentIndex) => {
      dot.classList.toggle(activeDotClass, currentIndex === index);
    });
  }

  /**
   * Calcola l'indice dello slide corrente in base allo scroll orizzontale
   * @returns {number}
   */
  function getCurrentSlideIndex() {
    const scrollPosition = track.scrollLeft;
    const slideWidth = track.clientWidth;

    // Protezione contro divisione per zero (es. elemento non visibile)
    if (slideWidth === 0) return 0;

    return Math.round(scrollPosition / slideWidth);
  }

  /**
   * Handler per lo scroll del carousel
   */
  function handleScroll() {
    updateActiveDot(getCurrentSlideIndex());
  }

  /**
   * Handler per il resize della finestra
   * (necessario per ricalcolare l'indice corretto)
   */
  function handleResize() {
    updateActiveDot(getCurrentSlideIndex());
  }

  // Listener per aggiornare il dot attivo durante lo scroll
  track.addEventListener("scroll", handleScroll);

  // Gestione click sui dots per navigare tra gli slide
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      track.scrollTo({
        left: track.clientWidth * index,
        behavior: "smooth",
      });
    });
  });

  // Listener globale per aggiornare lo stato al resize
  window.addEventListener("resize", handleResize);

  // Imposta lo stato iniziale (primo slide attivo)
  updateActiveDot(0);
}

/**
 * Inizializzazione carousel sezione "features"
 */
initCarousel({
  trackId: "featuresTrack",
  dotSelector: ".features__dot",
  activeDotClass: "features__dot--active",
});

/**
 * Inizializzazione carousel sezione "testimonials"
 */
initCarousel({
  trackId: "testimonialsTrack",
  dotSelector: ".testimonials__dot",
  activeDotClass: "testimonials__dot--active",
});
