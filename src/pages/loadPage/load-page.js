import "./load-page.css";
import header from "../../components/header/header.js";
import loadHome from "../home/home.js";

export default function pageLoad(mainElement) {
  const contentPage = document.getElementById(mainElement);
  contentPage.classList.add("content");

  // Header
  const headerComponent = header({
    brandtitle: "YamiYam",
    navList: ["Home", "Menu", "Contact"],
  });
  contentPage.appendChild(headerComponent);

  // Body
  // Footer
}
