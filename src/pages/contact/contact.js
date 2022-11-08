import "./contact.css";
import contactData from "./contact-data.json";
import generateMap from "../../components/googleMap/map.js";

export default function contact() {
  const contactPage = document.createElement("div");
  contactPage.id = "contact-page";
  contactPage.classList.add("hide");

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contact-details");
  contactPage.appendChild(contactDetails);

  for (let i = 0; i < contactData.length; i++) {
    const contact = document.createElement("div");
    contact.classList.add("contact-detail");

    const contactIcon = document.createElement("img");
    contactIcon.src = contactData[i].imgSrc;
    contactIcon.alt = contactData[i].imgAlt;
    contact.appendChild(contactIcon);

    const span = document.createElement("span");
    span.textContent = contactData[i].contact;

    contact.appendChild(span);

    contactDetails.appendChild(contact);
  }

  //   google map integration
  const map = document.createElement("div");
  map.classList.add("location-map");

  //   add map generator
  const mapOuter = generateMap();
  map.appendChild(mapOuter);

  contactPage.appendChild(map);

  return contactPage;
}
