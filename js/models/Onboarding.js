export function Onboarding(steps) {
    this.steps = steps
    this.currentStepIndex = 0
    this.answers = {}
}

Onboarding.prototype.getCurrentStep = function () {
    return this.steps[this.currentStepIndex]
}

Onboarding.prototype.getCurrentStepId = function () {
    return this.getCurrentStep().id
}

Onboarding.prototype.selectOption = function (optionId) {
    const currentStep = this.getCurrentStep()

    const optionExists = currentStep.options.some(function (option) {
        return option.id === optionId
    })

    if (!optionExists) {
        throw new Error("Option does not exist in this step")
    }

    this.answers[currentStep.id] = optionId
}

Onboarding.prototype.hasSelectedOption = function () {
    const currentStepId = this.getCurrentStepId()

    return Boolean(this.answers[currentStepId])
}

Onboarding.prototype.canGoNext = function () {
    return this.hasSelectedOption() && this.currentStepIndex < this.steps.length - 1
}

Onboarding.prototype.canGoBack = function () {
    return this.currentStepIndex > 0
}

Onboarding.prototype.next = function () {
    if (!this.hasSelectedOption()) {
        throw new Error("Select an option before you continuing")
    }

    if (this.currentStepIndex < this.steps.length - 1) {
        this.currentStepIndex++
    }
}

Onboarding.prototype.back = function () {
    if (this.canGoBack()) {
        this.currentStepIndex--
    }
}

Onboarding.prototype.getProgress = function () {
    return {
        current: this.currentStepIndex + 1,
        total: this.steps.length,
        percentage: ((this.currentStepIndex + 1) / this.steps.length) * 100
    }
}

Onboarding.prototype.getState = function () {
    return {
        currentStep: this.getCurrentStep(),
        selectedOption: this.answers[this.getCurrentStepId()] || null,
        canContinue: this.hasSelectedOption(),
        canGoBack: this.canGoBack(),
        progress: this.getProgress(),
        answers: this.answers
    }
}