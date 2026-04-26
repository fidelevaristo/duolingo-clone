import { welcomeSteps } from "../data/welcome-steps.js";
import { Onboarding } from "../models/Onboarding.js";

const onboarding = new Onboarding(welcomeSteps);

function printState(title) {
  const state = onboarding.getState();

  console.log("\n==============================");
  console.log(title);
  console.log("==============================");

  console.log("Step:", state.currentStep.id);
  console.log("Question:", state.currentStep.question);
  console.log("Selected:", state.selectedOption);
  console.log("Can Continue:", state.canContinue);
  console.log("Can Go Back:", state.canGoBack);
  console.log(`
    Progress: ${state.progress.current}/${state.progress.total} (${state.progress.percentage.toFixed(0)}%)
  `);
  console.log("Answers:", state.answers);
}

// Estado inicial
printState("INITIAL STATE");

// Tenta avançar sem selecionar
try {
  onboarding.next();
} catch (e) {
  console.log("\n[EXPECTED ERROR]", e.message);
}

// Loop por todos os steps
while (true) {
  const state = onboarding.getState();
  const step = state.currentStep;

  // Seleciona automaticamente a primeira opção
  const option = step.options[0];

  console.log(`\nSelecting option: ${option.id}`);
  onboarding.selectOption(option.id);

  printState("AFTER SELECTION");

  if (!onboarding.canGoNext()) {
    console.log("\nReached last step or cannot continue.");
    break;
  }

  console.log("\nGoing NEXT");
  onboarding.next();

  printState("AFTER NEXT");
}

// Teste de voltar (back)
console.log("\n=== TESTING BACK NAVIGATION ===");

while (onboarding.canGoBack()) {
  onboarding.back();
  printState("AFTER BACK");
}

console.log("\n=== END OF FLOW ===");