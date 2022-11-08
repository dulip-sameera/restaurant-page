import "./menu.css";

export default function menu() {
  const menuPage = document.createElement("div");
  menuPage.id = "menu-page";
  menuPage.classList.add("hide");

  const title = document.createElement("h1");
  title.textContent = "OUR MENU";
  menuPage.appendChild(title);

  return menuPage;
}
