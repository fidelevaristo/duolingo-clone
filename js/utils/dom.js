/**
 * Seleziona un singolo elemento dal DOM.
 *
 * @param {string} selector - Selettore CSS
 * @param {Document|Element} scope - Contesto di ricerca
 * @returns {Element|null}
 */
export function $(selector, scope = document) {
  return scope.querySelector(selector);
}

/**
 * Seleziona più elementi dal DOM.
 *
 * @param {string} selector - Selettore CSS
 * @param {Document|Element} scope - Contesto di ricerca
 * @returns {NodeListOf<Element>}
 */
export function $$(selector, scope = document) {
  return scope.querySelectorAll(selector);
}

/**
 * Registra un event listener su un elemento.
 *
 * @param {EventTarget} element - Elemento che riceve l'evento
 * @param {string} eventType - Tipo di evento
 * @param {Function} handler - Funzione eseguita all'evento
 */
export function on(element, eventType, handler) {
  element.addEventListener(eventType, handler);
}
