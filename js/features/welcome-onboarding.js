import { Onboarding } from "../models/Onboarding.js";
import { welcomeSteps } from "../data/welcome-steps.js";
import { $, on } from "../utils/dom.js";

const ICON_BASE_PATH = "../assets/pages/welcome/icons/";

// inizializza il gestore dello stato dell'onboarding
const onboarding = new Onboarding(welcomeSteps);

// cache degli elementi principali del DOM
const questionEl = $("[data-question]");
const optionsEl = $("[data-options]");
const continueBtn = $("[data-continue]");
const backBtn = $("[data-back]");
const progressBar = $("[data-progress-bar]");

// Renderizza lo stato corrente dello step
function render() {
  const state = onboarding.getState();
  const step = state.currentStep;

  // aggiorna il testo della domanda
  questionEl.textContent = step.question;

  // Resetta il container delle opzioni e applica il layout dinamico
  optionsEl.innerHTML = "";
  optionsEl.className = `survey-options survey-options--${step.layout}`;

  // genera dinamicamente tutte le opzioni
  step.options.forEach(function (option) {
    const optionElemet = createOptionElement(
      step,
      option,
      state.selectedOption,
    );
    optionsEl.appendChild(optionElemet);
  });

  // aggiorna stato dei controlli
  continueBtn.disabled = !state.canContinue;
  backBtn.disabled = false;

  // aggiorna la barra di progresso
  progressBar.style.width = `${state.progress.percentage}%`;
}

// Crea un elemento opzione in base al layout dello step
function createOptionElement(step, option, selectedOptionId) {
  // layout speciale
  if (step.layout === "benefits") {
    return createBenefitItem(option);
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = `survey-option survey-option--${step.layout}`;
  button.dataset.optionId = option.id;

  // evidenzia se è selezionato
  if (selectedOptionId === option.id) {
    button.classList.add("survey-option--selected");
  }

  // icona opzionale
  if (option.icon) {
    button.appendChild(createIcon(option.icon));
  }

  // Contenuto principale (label + eventuale descrizione)
  const content = document.createElement("span");
  content.className = "survey-option__content";

  const label = document.createElement("span");
  label.className = "survey-option__label";
  label.textContent = option.label;

  content.appendChild(label);

  // Descrizione opzionale (per layout complessi)
  if (option.description) {
    const description = document.createElement("span");
    description.className = "survey-option__description";
    description.textContent = option.description;
    content.appendChild(description);
  }

  button.appendChild(content);

  // Meta opzionale (es. livello: "Normale", "Intenso")
  if (option.meta) {
    const meta = document.createElement("span");
    meta.className = "survey-option__meta";
    meta.textContent = option.meta;
    button.appendChild(meta);
  }

  // Gestione selezione
  on(button, "click", function () {
    onboarding.selectOption(option.id);
    render();
  });

  return button;
}

/* Crea un item informativo (layout benefits). Non è cliccabile, solo descrittivo. */

function createBenefitItem(option) {
  const item = document.createElement("article");
  item.className = "survey-benefit";

  item.appendChild(createIcon(option.icon, "survey-benefit__icon"));

  const content = document.createElement("div");
  content.className = "survey-benefit__content";

  const title = document.createElement("h2");
  title.className = "survey-benefit__title";
  title.textContent = option.label;

  const description = document.createElement("p");
  description.className = "survey-benefit__description";
  description.textContent = option.description;

  content.append(title, description);
  item.appendChild(content);

  return item;
}

/* Utility per creare un'immagine icona. */

function createIcon(iconName, className = "survey-option__icon") {
  const img = document.createElement("img");
  img.className = className;
  img.src = `${ICON_BASE_PATH}${iconName}`;
  img.alt = "";

  return img;
}

// Navigazione avanti
on(continueBtn, "click", function () {
  onboarding.next();
  render();
});

// Navigazione indietro
on(backBtn, "click", function () {
  if (onboarding.canGoBack()) {
    onboarding.back();
    render();
    return;
  }

  window.location.href = "../pages/register.html";
});

on(continueBtn, "click", function () {
  if (onboarding.isLastStep()) {
    window.location.href = "../../index.html";
    return;
  }

  onboarding.next();
  render();
});

// Primo render iniziale
render();
