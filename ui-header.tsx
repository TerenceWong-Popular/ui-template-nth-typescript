"use strict";

class UiHeader extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) return;

    const titleZh = this.getAttribute("title-zh") || "";
    const titleEn = this.getAttribute("title-en") || titleZh;
    const userName = this.getAttribute("user-name") || "";
    const aiPoints = this.getAttribute("ai-points") || "";

    this.innerHTML = `
      <header class="topbar">
        <div class="topbar-left">
          <div class="brand">
            <img src="assets/e-smart-logo.png" onerror="this.onerror=null; this.src='https://e-smartai.ephhk.com/portal/icons/e-smart-logo.png';" alt="e-Smart" class="brand-logo">
          </div>
        </div>
        <div class="topbar-center">
          <div class="app-title">
            <div class="name">
              <span data-header-title-zh data-lang-content="zh"></span>
              <span data-header-title-en data-lang-content="en" hidden></span>
            </div>
          </div>
        </div>
        <div class="topbar-right">
          <div class="chip">
            <span class="ui-icon icon-user icon-size-16" aria-hidden="true"></span>
            <span class="user-name" data-header-user-name></span>
          </div>
          <div class="credit-chip" title="AI Point">
            <div class="left">
              <span class="ui-icon icon-coins icon-size-16" aria-hidden="true"></span>
            </div>
            <div class="right">
              <span class="amount" data-header-ai-points></span>
            </div>
          </div>
          <button class="lang-toggle" type="button" data-language-toggle="true">
            <span class="ui-icon icon-globe icon-size-16" aria-hidden="true"></span>
            <span data-lang-content="zh">EN</span>
            <span data-lang-content="en" hidden>中文</span>
          </button>
        </div>
      </header>
    `;

    this.querySelector("[data-header-title-zh]").textContent = titleZh;
    this.querySelector("[data-header-title-en]").textContent = titleEn;
    this.querySelector("[data-header-user-name]").textContent = userName;
    this.querySelector("[data-header-ai-points]").textContent = aiPoints;
  }
}

if (!customElements.get("ui-header")) {
  customElements.define("ui-header", UiHeader);
}
