let cartLink = document.querySelectorAll('.product-card__actions--buy');
let cartPopup = document.querySelector('.modal-add-to-cart');
let cartClose = cartPopup.querySelector('.modal-close');

cartLink.forEach((button) => {
button.addEventListener('click', (evt) => {
  evt.preventDefault();
  cartPopup.classList.add('modal-show');
});
});
cartClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  cartPopup.classList.remove('modal-show');
});
window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains('modal-show')) {
      evt.preventDefault();
      cartPopup.classList.remove('modal-show');
    }
  }
});