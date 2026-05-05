export function Option(id, label, config = {}) {
  if (!id) {
    throw new Error("Option id is required");
  }

  if (!label) {
    throw new Error("Option label is required");
  }

  this.id = id;
  this.label = label;
  this.icon = config.icon || null;
  this.description = config.description || null;
  this.meta = config.meta || null;
}