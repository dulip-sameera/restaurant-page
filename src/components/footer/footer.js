import "./footer.css";

export default function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const container = document.createElement("div");
  footer.appendChild(container);

  const reflink = document.createElement("a");
  reflink.href =
    "https://www.freepik.com/free-vector/sweet-pastries-chalkboard_1529234.htm#query=pastry%20background&position=0&from_view=keyword";
  reflink.target = "_blank";
  reflink.textContent = "Image by macrovector on Freepik";
  container.appendChild(reflink);

  return footer;
}
