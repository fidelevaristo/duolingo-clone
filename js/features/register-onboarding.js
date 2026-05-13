import { $, $$, on } from "../utils/dom.js";

const screens = $$(".onboarding__screen");
const courseCards = $$(".course-selector__card");
const languageCards = $$(".language-selector__card");
const header = $(".onboarding__header");

const ENABLED_COURSE = "languages";
const ENABLED_LANGUAGE = "portuguese";
const WELCOME_PAGE_URL = "../pages/welcome.html";
const REDIRECT_DELAY = 1800;

/**
 * Mostra una schermata e nasconde tutte le altre.
 *
 * @param {string} screenName - Nome della schermata da mostrare
 */
function showScreen(screenName) {
  screens.forEach((screen) => {
    const isActive = screen.dataset.screen === screenName;
    screen.classList.toggle("onboarding__screen--active", isActive);
  });
}

/**
 * Gestisce lo stato attivo di una lista di card.
 * Utile quando può esserci una sola selezione attiva alla volta.
 *
 * @param {NodeListOf<Element>} cards - Lista delle card
 * @param {Element} selectedCard - Card selezionata
 * @param {string} activeClass - Classe CSS da applicare alla card attiva
 */
function setActiveCard(cards, selectedCard, activeClass) {
  cards.forEach((card) => {
    card.classList.remove(activeClass);
  });

  selectedCard.classList.add(activeClass);
}

/**
 * Disabilita una card non disponibile.
 *
 * @param {Element} card - Card da disabilitare
 * @param {string} disabledClass - Classe CSS per lo stato disabilitato
 */
function disableCard(card, disabledClass) {
  card.setAttribute("disabled", "true");
  card.classList.add(disabledClass);
}

/**
 * Gestisce lo stato visuale dell'header durante lo scroll.
 */
function handleHeaderScroll() {
  if (!header) return;

  const isScrolled = window.scrollY > 0;
  header.classList.toggle("onboarding__header--scrolled", isScrolled);
}

/**
 * Inizializza la selezione del corso.
 */
function initCourseSelection() {
  courseCards.forEach((card) => {
    const course = card.dataset.course;

    if (course !== ENABLED_COURSE) {
      disableCard(card, "course-selector__card--disabled");
      return;
    }

    on(card, "click", () => {
      setActiveCard(courseCards, card, "course-selector__card--active");
      showScreen("languages");
    });
  });
}

/**
 * Inizializza la selezione della lingua.
 */
function initLanguageSelection() {
  languageCards.forEach((card) => {
    const language = card.dataset.language;

    if (language !== ENABLED_LANGUAGE) {
      disableCard(card, "language-selector__card--disabled");
      return;
    }

    on(card, "click", () => {
      setActiveCard(languageCards, card, "language-selector__card--active");
      showScreen("loading");

      setTimeout(() => {
        window.location.href = WELCOME_PAGE_URL;
      }, REDIRECT_DELAY);
    });
  });
}

/**
 * Inizializza il comportamento dell'header.
 */
function initHeaderScroll() {
  on(window, "scroll", handleHeaderScroll);
  handleHeaderScroll();
}

/**
 * Inizializza l'onboarding della pagina register.
 */
function initRegisterOnboarding() {
  if (screens.length === 0) return;

  initHeaderScroll();
  initCourseSelection();
  initLanguageSelection();
}

initRegisterOnboarding();