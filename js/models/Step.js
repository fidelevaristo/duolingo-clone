import { Option } from "./Option.js";

export function Step(id, question, options, requiresSelection = true) {
  if (!id) {
    throw new Error("Step id is required");
  }

  if (!question) {
    throw new Error("Step question is required");
  }

  if (!Array.isArray(options)) {
    throw new Error("Step options must be an array");
  }

  this.id = id;
  this.question = question;
  this.options = options.map(function (option) {
    return new Option(option.id, option.label);
  });
  this.requiresSelection = requiresSelection;
}

Step.prototype.hasOption = function (optionId) {
  return this.options.some(function (option) {
    return option.id === optionId;
  });
};