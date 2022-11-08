export default function button({ id, styleClass, content }) {
  const button = document.createElement("button");
  button.id = id;
  button.classList.add(styleClass);
  button.textContent = content;

  return button;
}
