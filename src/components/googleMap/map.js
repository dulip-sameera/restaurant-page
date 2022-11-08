import "./map.css";

export default function map() {
  const mapOuter = document.createElement("div");
  mapOuter.classList.add("mapouter");

  const gmapCanvas = document.createElement("div");
  gmapCanvas.classList.add("gmap_canvas");
  mapOuter.appendChild(gmapCanvas);

  const iFrame = document.createElement("iframe");
  iFrame.width = "600";
  iFrame.height = "500";
  iFrame.id = "gmap_canvas";
  iFrame.src =
    "https://maps.google.com/maps?q=The%20Fab,%20Galle%20Road,%20panadura%2012500&t=&z=17&ie=UTF8&iwloc=&output=embed";
  iFrame.frameBorder = "0";
  iFrame.scrolling = "no";
  iFrame.marginHeight = "0";
  iFrame.marginWidth = "0";

  gmapCanvas.appendChild(iFrame);

  return mapOuter;
}
