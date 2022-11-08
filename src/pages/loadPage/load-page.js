import "./load-page.css";
import header from "../../components/header/header.js";
import loadHome from "../home/home.js";
import loadContact from "../contact/contact.js";
import loadMenu from "../menu/menu.js";
import footer from "../../components/footer/footer";

export default function pageLoad(mainElement) {
  const contentPage = document.getElementById(mainElement);
  contentPage.classList.add("content");

  // Header
  const headerComponent = header({
    brandtitle: "YamiYam",
    navList: ["Home", "Menu", "Contact"],
  });
  contentPage.appendChild(headerComponent);

  // navlist items
  const homeLink = document.getElementById("home");
  const menuLink = document.getElementById("menu");
  const contactLink = document.getElementById("contact");
  const brandName = document.getElementById("brandname");

  // Body
  const homePage = loadHome();
  contentPage.appendChild(homePage);

  const menuPage = loadMenu();
  contentPage.appendChild(menuPage);

  const contactPage = loadContact();
  contentPage.appendChild(contactPage);

  // Body section access
  const homePageSectoin = document.getElementById("home-page");
  const contactPageSection = document.getElementById("contact-page");
  const menuPageSection = document.getElementById("menu-page");

  brandName.addEventListener("click", () => {
    menuLink.classList.remove("selected");
    contactLink.classList.remove("selected");
    homeLink.classList.remove("selected");
    homePageSectoin.className = "home";
    contactPageSection.className = "hide";
    menuPage.className = "hide";
  });

  homeLink.addEventListener("click", () => {
    menuLink.classList.remove("selected");
    contactLink.classList.remove("selected");
    homeLink.classList.add("selected");

    homePageSectoin.className = "home";
    contactPageSection.className = "hide";
    menuPage.className = "hide";
  });

  contactLink.addEventListener("click", () => {
    homeLink.classList.remove("selected");
    menuLink.classList.remove("selected");
    contactLink.classList.add("selected");

    homePageSectoin.className = "hide";
    contactPageSection.className = "contact";
    menuPage.className = "hide";
  });

  menuLink.addEventListener("click", () => {
    homeLink.classList.remove("selected");
    contactLink.classList.remove("selected");
    menuLink.classList.add("selected");

    homePageSectoin.className = "hide";
    contactPageSection.className = "hide";
    menuPageSection.className = "menu";
  });

  // Footer
  const footerComponent = footer();
  contentPage.appendChild(footerComponent);
}
