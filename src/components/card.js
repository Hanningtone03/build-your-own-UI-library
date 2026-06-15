export function createCard({ header = "", body = "", footer = "" } = {}) {
  const card = document.createElement("div");
  card.className = "ui-card";

  if (header) {
    const h = document.createElement("div");
    h.className = "ui-card__header";
    h.textContent = header;
    card.appendChild(h);
  }

  const b = document.createElement("div");
  b.className = "ui-card__body";
  if (body instanceof HTMLElement) {
    b.appendChild(body);
  } else {
    b.textContent = body;
  }
  card.appendChild(b);

  if (footer) {
    const f = document.createElement("div");
    f.className = "ui-card__footer";
    f.textContent = footer;
    card.appendChild(f);
  }

  return card;
}