class ArrayCreditLock extends HTMLElement {
    constructor() {
      super();
    }
    set tableEl(data) {
        if (!data) {
            console.error("no data is provided")
            return
        }
      this.innerHTML = `
            <li class="history-list">
                <span class="date">${data.date} </span>
                <div class="lock-wrapper">
                <span class="lock">${data.type === "enrollment" ? "Unlocked" : "Locked"}</span>
                </div>
            </li>`;
    }
  }
  
customElements.define('array-credit-lock', ArrayCreditLock);