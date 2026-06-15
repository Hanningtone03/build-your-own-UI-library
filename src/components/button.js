export function createButton({ label = "Button", variant = "primary", size = "", disabled = false, onClick = null } = {}) {
  const btn = document.createElement("button");
  btn.className = `ui-btn ui-btn--${variant}${size ? ` ui-btn--${size}` : ""}`;
  btn.textContent = label;
  btn.disabled = disabled;
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}