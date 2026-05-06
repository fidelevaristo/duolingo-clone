import { $, on } from "../utils/dom.js";

const languageMenu = $("#languageStripMenu");
const prevButton = $("#languageStripPrev");
const nextButton = $("#languageStripNext");

if (languageMenu && prevButton && nextButton) {
  const getScrollAmount = () => languageMenu.clientWidth * 0.85;

  const isAtStart = () => languageMenu.scrollLeft <= 2;

  const isAtEnd = () => {
    const maxScrollLeft = languageMenu.scrollWidth - languageMenu.clientWidth;
    return languageMenu.scrollLeft >= maxScrollLeft - 2;
  };

  /**
   * Scorre il menu verso una posizione specifica.
   *
   * @param {number} left - Posizione orizzontale dello scroll
   */
  function scrollToPosition(left) {
    languageMenu.scrollTo({
      left,
      behavior: "smooth",
    });
  }

  /**
   * Torna all'inizio se siamo alla fine,
   * altrimenti scorre verso destra.
   */
  on(nextButton, "click", () => {
    if (isAtEnd()) {
      scrollToPosition(0);
      return;
    }

    scrollToPosition(languageMenu.scrollLeft + getScrollAmount());
  });

  /**
   * Va alla fine se siamo all'inizio,
   * altrimenti scorre verso sinistra.
   */
  on(prevButton, "click", () => {
    const maxScrollLeft = languageMenu.scrollWidth - languageMenu.clientWidth;

    if (isAtStart()) {
      scrollToPosition(maxScrollLeft);
      return;
    }

    scrollToPosition(languageMenu.scrollLeft - getScrollAmount());
  });
}
