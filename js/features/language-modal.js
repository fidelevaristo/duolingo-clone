/**
 * IIFE (Immediately Invoked Function Expression)
 * Serve per isolare lo scope ed evitare di inquinare il global scope
 */
(function () {
  // Bottone che apre il modal (trigger)
  const openButton = document.getElementById("open-language-modal");

  // Elemento principale del modal
  const modal = document.getElementById("language-modal");

  // Se uno dei due elementi non esiste, interrompe l'esecuzione
  if (!openButton || !modal) return;

  // Contenuto interno del modal (utile per gestione focus/accessibilità)
  const modalContent = modal.querySelector(".modal__content");

  // Tutti gli elementi che chiudono il modal (es. bottoni con attributo data-close-modal)
  const closeElements = modal.querySelectorAll("[data-close-modal]");

  // Variabile per salvare l'ultimo elemento attivo prima dell'apertura del modal
  let lastFocusedElement = null;

  /**
   * Apre il modal
   * - Salva il focus corrente
   * - Mostra il modal
   * - Aggiorna attributi ARIA per accessibilità
   * - Sposta il focus dentro il modal
   */
  function openModal() {
    // Salva l'elemento attualmente focalizzato (per ripristinarlo dopo)
    lastFocusedElement = document.activeElement;

    // Mostra il modal (classe CSS)
    modal.classList.add("is-open");

    // Aggiorna attributo ARIA (modal visibile)
    modal.setAttribute("aria-hidden", "false");

    // Indica che il bottone ha aperto un contenuto espandibile
    openButton.setAttribute("aria-expanded", "true");

    // Sposta il focus nel contenuto del modal
    modalContent.focus();
  }

  /**
   * Chiude il modal
   * - Nasconde il modal
   * - Aggiorna attributi ARIA
   * - Ripristina il focus sull'elemento precedente
   */
  function closeModal() {
    // Nasconde il modal
    modal.classList.remove("is-open");

    // Aggiorna attributo ARIA (modal nascosto)
    modal.setAttribute("aria-hidden", "true");

    // Indica che il contenuto non è più espanso
    openButton.setAttribute("aria-expanded", "false");

    // Ripristina il focus sull'elemento precedente (accessibilità)
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  // Evento click per aprire il modal
  openButton.addEventListener("click", openModal);

  // Associa la chiusura del modal a tutti gli elementi con data-close-modal
  closeElements.forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  /**
   * Listener globale per tastiera
   * Permette di chiudere il modal premendo "Escape"
   */
  document.addEventListener("keydown", (event) => {
    // Se il modal non è aperto, non fare nulla
    if (!modal.classList.contains("is-open")) return;

    // Se viene premuto il tasto Escape, chiude il modal
    if (event.key === "Escape") {
      closeModal();
    }
  });
})();
