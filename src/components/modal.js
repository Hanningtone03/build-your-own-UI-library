export function createModal({ title = "Modal", content = "", onConfirm = null, onCancel = null } = {}) {
  const overlay = document.createElement("div");
  overlay.className = "ui-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "ui-modal";

  const header = document.createElement("div");
  header.className = "ui-modal__header";
  header.innerHTML = `<span>${title}</span><button class="ui-modal__close">✕</button>`;

  const body = document.createElement("div");
  body.className = "ui-modal__body";
  if (content instanceof HTMLElement) {
    body.appendChild(content);
  } else {
    body.textContent = content;
  }

  const footer = document.createElement("div");
  footer.className = "ui-modal__footer";

  if (onCancel) {
    const cancelBtn = document.createElement("button");
    cancelBtn.className = "ui-btn ui-btn--neutral";
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", () => { close(); onCancel(); });
    footer.appendChild(cancelBtn);
  }

  if (onConfirm) {
    const confirmBtn = document.createElement("button");
    confirmBtn.className = "ui-btn ui-btn--primary";
    confirmBtn.textContent = "Confirm";
    confirmBtn.addEventListener("click", () => { close(); onConfirm(); });
    footer.appendChild(confirmBtn);
  }

  modal.appendChild(header);
  modal.appendChild(body);
  modal.appendChild(footer);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  function open() { overlay.classList.add("open"); }
  function close() { overlay.classList.remove("open"); }

  header.querySelector(".ui-modal__close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

  return { open, close, element: overlay };
}