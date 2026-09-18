"use strict";

(() => {
  const toggle = document.querySelector("[data-language-toggle]");
  if (!toggle) return;

  let language = document.documentElement.lang === "en" ? "en" : "zh";

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language === "en" ? "en" : "zh-Hant";

    document.querySelectorAll("[data-lang-content]").forEach((element) => {
      element.hidden = element.dataset.langContent !== language;
    });
  }

  toggle.addEventListener("click", () => {
    applyLanguage(language === "zh" ? "en" : "zh");
  });

  applyLanguage(language);
})();
