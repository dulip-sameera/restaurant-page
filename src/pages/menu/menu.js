import "./menu.css";
import card from "../../components/menu-item-card/card.js";
import menuItems from "./menu-data.json";

export default function menu() {
  const menuPage = document.createElement("div");
  menuPage.id = "menu-page";
  menuPage.classList.add("hide");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";

  menuPage.appendChild(title);

  const items = document.createElement("div");
  items.classList.add("items");
  menuPage.appendChild(items);

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];

    const menuItemCard = card({
      menuItem: {
        title: item.menuItem.title,
        description: item.menuItem.description,
        price: item.menuItem.price,
      },
      menuItemImage: {
        src: item.menuItemImage.src,
        alt: item.menuItemImage.alt,
      },
    });

    items.appendChild(menuItemCard);
  }

  return menuPage;
}
