export function Option(id, label) {
  if (!id) {
    throw new Error("Option id is required");
  }

  if (!label) {
    throw new Error("Option label is required");
  }

  this.id = id;
  this.label = label;
}