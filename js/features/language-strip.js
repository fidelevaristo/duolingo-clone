import { $, on } from "../utils/dom.js";

const languageMenu = $("#languageStripMenu");
const prevButton = $("#languageStripPrev");
const nextButton = $("#languageStripNext");

if (languageMenu && prevButton && nextButton) {
  const getScrollAmount = () => languageMenu.clientWidth * 0.8;

  on(prevButton, "click", () => {
    languageMenu.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  });

  on(nextButton, "click", () => {
    languageMenu.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  });
}