import { $, $$, on } from "../utils/dom.js";

/**
 * Inizializza un modal accessibile
 *
 * @param {Object} config
 * @param {string} config.openSelector - Selettore del bottone di apertura
 * @param {string} config.modalSelector - Selettore del modal
 * @param {string} config.closeSelector - Selettore degli elementi che chiudono il modal
 */
function initModal({ openSelector, modalSelector, closeSelector }) {
  const openButton = $(openSelector);
  const modal = $(modalSelector);

  if (!openButton || !modal) return;

  const modalContent = $(".modal__content", modal);
  const closeElements = $$(closeSelector, modal);

  let lastFocusedElement = null;

  /**
   * Apre il modal
   */
  function openModal() {
    lastFocusedElement = document.activeElement;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");

    modalContent?.focus();
  }

  /**
   * Chiude il modal
   */
  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");

    lastFocusedElement?.focus();
  }

  /**
   * Gestione tastiera (ESC)
   */
  function handleKeydown(event) {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeModal();
    }
  }

  on(openButton, "click", openModal);

  closeElements.forEach((el) => {
    on(el, "click", closeModal);
  });

  on(document, "keydown", handleKeydown);
}

/**
 * Inizializzazione modal lingua (footer) in applicants.html
 */
initModal({
  openSelector: "#open-language-modal",
  modalSelector: "#language-modal",
  closeSelector: "[data-close-modal]",
});
