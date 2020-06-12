if (document.querySelector('.main-index')) {
  let button = document.querySelector('.button--feedback');
  let popup = document.querySelector('.modal-feedback');
  let close = document.querySelector('.modal-close');
  let form = popup.querySelector('form');
  let username = popup.querySelector('[name=username]');
  let userEmail = popup.querySelector('[name=user-email]');
  let userMessage = popup.querySelector('[name=user-message');
  let isStorageSupport = true;
  let storage = "";

  try{
    storage = localStorage.getItem('username');
  } catch (err) {
    isStorageSupport = false;
  }

  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.add('modal-show');
    if (storage) {
      username.value = storage;
      userEmail.focus();
    } else {
      username.focus();
    }
  });

  close.addEventListener('click', (evt) => {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    popup.classList.remove('modal-error');
  });

  form.addEventListener('submit', (evt) => {
    if (!username.value || !userEmail.value || !userMessage.value) {
      evt.preventDefault();
      popup.classList.remove('modal-error');
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add('modal-error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('username', username.value)
      }  
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      if(popup.classList.contains('modal-show')) {
        evt.preventDefault();
        popup.classList.remove('modal-show');
        popup.classList.remove('modal-error');
      }
    }
  });

  let mapLink = document.querySelector('.contacts__map');
  let mapPopup = document.querySelector('.modal-map');
  let mapClose = mapPopup.querySelector('.modal-close');

  mapLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    mapPopup.classList.add('modal-show');
  });
  mapClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
  });
  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains('modal-show')) {
        evt.preventDefault();
        mapPopup.classList.remove('modal-show');
      }
    }
  });

  let cartLink = document.querySelectorAll('.product-card__actions--buy');

  if (cartLink) {
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
  }
}

if (document.querySelector('.main-catalog')) {
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
}