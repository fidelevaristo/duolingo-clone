(function () {
  const openButton = document.getElementById("open-language-modal");
  const modal = document.getElementById("language-modal");

  if (!openButton || !modal) return;

  const modalContent = modal.querySelector(".modal__content");
  const closeElements = modal.querySelectorAll("[data-close-modal]");

  let lastFocusedElement = null;

  function openModal() {
    lastFocusedElement = document.activeElement;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");

    modalContent.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  openButton.addEventListener("click", openModal);

  closeElements.forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeModal();
    }
  });
})();
