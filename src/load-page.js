import loadHome from "./pages/home/home.js";

export default function pageLoad(mainElement) {
  const homePage = loadHome();

  document.getElementById(mainElement).appendChild(homePage);
}
