import "./header.css";

export default function header({ brandtitle, navList }) {
  const header = document.createElement("div");
  header.classList.add("header");

  const brandName = document.createElement("div");
  brandName.textContent = brandtitle;
  brandName.id = "brandname";
  brandName.classList.add("brand-name");
  header.appendChild(brandName);

  const navBar = document.createElement("div");
  navBar.classList.add("nav");
  const ul = document.createElement("ul");
  for (let i = 0; i < navList.length; i++) {
    const li = document.createElement("li");
    li.textContent = navList[i];
    li.id = navList[i].toLowerCase();
    ul.appendChild(li);
  }
  navBar.appendChild(ul);
  header.appendChild(navBar);

  return header;
}
