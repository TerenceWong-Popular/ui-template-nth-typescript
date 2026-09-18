"use strict";

class UiMain extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) return;

    this.innerHTML = `
      <main class="main" style="display: flex; align-items: center; justify-content: center; min-height: 480px;">
        <div class="empty">
          <div class="empty-icon">
            <span class="ui-icon icon-book icon-size-44" aria-hidden="true"></span>
          </div>
          <h2 class="empty-headline">
            <span data-lang-content="zh">e-Smart.AI <em>介面範本</em></span>
            <span data-lang-content="en" hidden>e-Smart.AI <em>UI Template</em></span>
          </h2>
          <p class="empty-sub">
            <span data-lang-content="zh">歡迎使用教育出版社 e-Smart.AI 介面範本。此範本包含標準頂欄、用戶資訊、點數展示、語言切換與頁尾免責聲明。</span>
            <span data-lang-content="en" hidden>Welcome to the Educational Publishing House e-Smart.AI interface template. This template includes the standard top bar, user profile chip, AI points, language toggle, and footer disclaimer.</span>
          </p>
        </div>
      </main>
    `;
  }
}

if (!customElements.get("ui-main")) {
  customElements.define("ui-main", UiMain);
}
