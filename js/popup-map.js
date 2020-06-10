let mapLink = document.querySelector(".contacts__map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", (evt) => {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});
mapClose.addEventListener("click", (evt) => {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});