export function createDropdown({ trigger = "Options", items = [] } = {}) {
  const container = document.createElement("div");
  container.className = "ui-dropdown";

  const triggerBtn = document.createElement("button");
  triggerBtn.className = "ui-btn ui-btn--outline ui-dropdown__trigger";
  triggerBtn.textContent = trigger + " ▾";

  const menu = document.createElement("div");
  menu.className = "ui-dropdown__menu";

  items.forEach(({ label, onClick }) => {
    const item = document.createElement("div");
    item.className = "ui-dropdown__item";
    item.textContent = label;
    item.addEventListener("click", () => {
      container.classList.remove("open");
      if (onClick) onClick();
    });
    menu.appendChild(item);
  });

  triggerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    container.classList.toggle("open");
  });

  document.addEventListener("click", () => container.classList.remove("open"));

  container.appendChild(triggerBtn);
  container.appendChild(menu);
  return container;
}