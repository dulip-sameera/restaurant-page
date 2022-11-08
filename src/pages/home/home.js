import button from "../../components/button/button.js";
import "./home.css";

export default function loadHome() {
  // create Home Page
  const homePage = document.createElement("div");
  homePage.id = "home";
  homePage.classList.add("home");

  // create Call out Message Section
  const message = document.createElement("div");
  message.classList.add("message");
  homePage.appendChild(message);

  // create Display Message
  const ourMenuTitle = document.createElement("h3");
  ourMenuTitle.textContent = "OUR MENU";
  message.appendChild(ourMenuTitle);

  const motto = document.createElement("h1");
  const mottoMessage = ["Simple. ", "Classic. ", "Delicious."];

  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.textContent = mottoMessage[i];
    motto.appendChild(span);
  }
  message.appendChild(motto);

  // create Button
  const orderNowBtn = button({
    id: "order-now-btn",
    styleClass: "order-now-btn",
    content: "Order-Now",
  });
  homePage.appendChild(orderNowBtn);

  return homePage;
}
