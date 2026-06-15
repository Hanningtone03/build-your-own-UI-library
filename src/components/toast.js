let container = null;

function getContainer() {
  if (!container) {
    container = document.createElement("div");
    container.className = "ui-toast-container";
    document.body.appendChild(container);
  }
  return container;
}

export function toast(message, type = "info", duration = 3000) {
  const c = getContainer();
  const el = document.createElement("div");
  el.className = `ui-toast ui-toast--${type}`;
  el.textContent = message;
  c.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transition = "opacity 200ms";
    setTimeout(() => el.remove(), 200);
  }, duration);
}