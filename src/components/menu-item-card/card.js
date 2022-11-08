import "./card.css";

export default function card(
  carddetails = {
    menuItem: { title, description, price },
    menuItemImage: { src, alt },
  }
) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productImage = document.createElement("div");
  productImage.classList.add("image");

  const image = document.createElement("img");
  image.src = carddetails.menuItemImage.src;
  image.alt = carddetails.menuItemImage.alt;
  productImage.appendChild(image);

  card.appendChild(productImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const container = document.createElement("div");
  cardContent.appendChild(container);

  const contentTitle = document.createElement("div");
  contentTitle.classList.add("title");
  contentTitle.textContent = carddetails.menuItem.title;
  container.appendChild(contentTitle);

  const contentDescription = document.createElement("div");
  contentDescription.classList.add("description");
  contentDescription.textContent = carddetails.menuItem.description;
  container.appendChild(contentDescription);

  const priceBtn = document.createElement("button");
  priceBtn.classList.add("price");
  priceBtn.textContent = carddetails.menuItem.price;
  cardContent.appendChild(priceBtn);

  card.appendChild(cardContent);

  priceBtn.addEventListener("mouseover", () => {
    priceBtn.textContent = "Buy";
  });

  priceBtn.addEventListener("mouseout", () => {
    priceBtn.textContent = carddetails.menuItem.price;
  });

  return card;
}
