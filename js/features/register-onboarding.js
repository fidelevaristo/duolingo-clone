const screens = document.querySelectorAll(".onboarding__screen");
const courseCards = document.querySelectorAll(".course-selector__card");
const languageCards = document.querySelectorAll(".language-selector__card");
const header = document.querySelector(".onboarding__header");

const ENABLED_COURSE = "languages";
const ENABLED_LANGUAGE = "portuguese";

/**
 * Mostra una schermata e nasconde le altre
 */
function showScreen(screenName) {
  screens.forEach((screen) => {
    const isActive = screen.dataset.screen === screenName;
    screen.classList.toggle("onboarding__screen--active", isActive);
  });
}

/**
 * Gestisce lo stato attivo (selezione singola)
 */
function setActiveCard(cards, selectedCard, activeClass) {
  cards.forEach((card) => {
    card.classList.remove(activeClass);
  });

  selectedCard.classList.add(activeClass);
}

/**
 * Gestisce lo stato dell'header durante lo scroll
 */
function handleHeaderScroll() {
  if (!header) return;

  const isScrolled = window.scrollY > 0;
  header.classList.toggle("onboarding__header--scrolled", isScrolled);
}

window.addEventListener("scroll", handleHeaderScroll);
handleHeaderScroll();

/**
 * =========================
 * COURSE SELECTION
 * =========================
 */
courseCards.forEach((card) => {
  const course = card.dataset.course;

  if (course !== ENABLED_COURSE) {
    card.setAttribute("disabled", "true");
    card.classList.add("course-selector__card--disabled");
    return;
  }

  card.addEventListener("click", () => {
    setActiveCard(courseCards, card, "course-selector__card--active");
    showScreen("languages");
  });
});

/**
 * =========================
 * LANGUAGE SELECTION
 * =========================
 */
languageCards.forEach((card) => {
  const language = card.dataset.language;

  if (language !== ENABLED_LANGUAGE) {
    card.setAttribute("disabled", "true");
    card.classList.add("language-selector__card--disabled");
    return;
  }

  card.addEventListener("click", () => {
    setActiveCard(languageCards, card, "language-selector__card--active");
    showScreen("loading");

    setTimeout(() => {
      window.location.href = "../pages/welcome.html";
    }, 1800);
  });
});
