const screens = document.querySelectorAll(".onboarding__screen");
const courseCards = document.querySelectorAll(".course-selector__card");
const languageCards = document.querySelectorAll(".language-selector__card");

const ENABLED_COURSE = "languages";
const ENABLED_LANGUAGE = "portuguese";

function showScreen(screenName) {
  screens.forEach((screen) => {
    const isActive = screen.dataset.screen === screenName;
    screen.classList.toggle("onboarding__screen--active", isActive);
  });
}

/**
 * Gestione selezione corso
 */
courseCards.forEach((card) => {
  const course = card.dataset.course;

  // Disabilita tutto ciò che non è "languages"
  if (course !== ENABLED_COURSE) {
    card.setAttribute("disabled", "true");
    card.classList.add("course-selector__card--disabled");
    return;
  }

  card.addEventListener("click", () => {
    showScreen("languages");
  });
});

/**
 * Gestione selezione lingua
 */
languageCards.forEach((card) => {
  const language = card.dataset.language;

  // Disabilita tutto ciò che non è "portuguese"
  if (language !== ENABLED_LANGUAGE) {
    card.setAttribute("disabled", "true");
    card.classList.add("language-selector__card--disabled");
    return;
  }

  card.addEventListener("click", () => {
    showScreen("loading");

    setTimeout(() => {
      window.location.href = `../pages/welcome.html`;
    }, 1800);
  });
});
