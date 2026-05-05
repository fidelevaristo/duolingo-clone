import { Step } from "./Step.js";

export function Onboarding(steps) {
  this.steps = steps.map(function (step) {
    return new Step(
      step.id,
      step.question,
      step.options,
      {layout: step.layout, 
        requiresSelection: step.requiresSelection
      }
    );
  });

  this.currentStepIndex = 0;
  this.answers = {};
}

Onboarding.prototype.getCurrentStep = function () {
  return this.steps[this.currentStepIndex];
};

Onboarding.prototype.getCurrentStepId = function () {
  return this.getCurrentStep().id;
};

Onboarding.prototype.selectOption = function (optionId) {
  const currentStep = this.getCurrentStep();

  if (!currentStep.hasOption(optionId)) {
    throw new Error("Option does not exist in this step");
  }

  this.answers[currentStep.id] = optionId;
};

Onboarding.prototype.hasSelectedOption = function () {
  const currentStep = this.getCurrentStep();

  if (currentStep.requiresSelection === false) {
    return true;
  }

  return Boolean(this.answers[currentStep.id]);
};

Onboarding.prototype.canGoNext = function () {
  return (
    this.hasSelectedOption() && this.currentStepIndex < this.steps.length - 1
  );
};

Onboarding.prototype.hasPreviousStep = function () {
  return this.currentStepIndex > 0;
};

Onboarding.prototype.canGoBack = function () {
  return this.hasPreviousStep();
};

Onboarding.prototype.next = function () {
  if (!this.hasSelectedOption()) {
    throw new Error("Select an option before continuing");
  }

  if (this.currentStepIndex < this.steps.length - 1) {
    this.currentStepIndex++;
  }
};

Onboarding.prototype.back = function () {
  if (this.hasPreviousStep()) {
    this.currentStepIndex--;
  }
};

Onboarding.prototype.getProgress = function () {
  return {
    current: this.currentStepIndex + 1,
    total: this.steps.length,
    percentage: ((this.currentStepIndex + 1) / this.steps.length) * 100,
  };
};

Onboarding.prototype.getState = function () {
  const currentStep = this.getCurrentStep();

  return {
    currentStep: currentStep,
    selectedOption: this.answers[currentStep.id] || null,
    canContinue: this.hasSelectedOption(),
    canGoBack: this.canGoBack(),
    progress: this.getProgress(),
    answers: this.answers,
  };
};
