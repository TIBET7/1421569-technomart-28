if (document.querySelector('.main-index')) {
  let slides = document.querySelectorAll('.slide');
  let buttonRight = document.querySelector('.slider__arrow--right');
  let buttonLeft = document.querySelector('.slider__arrow--left');
  let sliderControls = document.querySelectorAll('.slider__controls-item');
  let count = 0;

  buttonLeft.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (count > 0) {
      count = count - 1;
      for (let slide of slides) {
        slide.classList.remove('slide--current');
      }
      for (let sliderControl of sliderControls) {
        sliderControl.classList.remove('slider__controls-item--current');
      }
      slides[count].classList.add('slide--current');
      sliderControls[count].classList.add('slider__controls-item--current');
    }
  });

  buttonRight.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (count < slides.length - 1) {
      count = count + 1;
      for (let slide of slides) {
        slide.classList.remove('slide--current');
      }
      for (let sliderControl of sliderControls) {
        sliderControl.classList.remove('slider__controls-item--current');
      }
      slides[count].classList.add('slide--current');
      sliderControls[count].classList.add('slider__controls-item--current');
    }
  });

  let services = document.querySelector('.services');
  let servicesLink = services.querySelectorAll('.services__item-description');
  let serviceDescription = services.querySelectorAll('.service-description__item ');
  let delivery = services.querySelector('.service--delivery');
  let guarantee = services.querySelector('.service--guarantee');
  let credit = services.querySelector('.service--credit');

  delivery.addEventListener('click', (evt) => {
    evt.preventDefault();
    for (let i = 0; i < servicesLink.length; i += 1) {
      servicesLink[i].classList.remove('services__item-description--current');
    }
    for (let i = 0; i < serviceDescription.length; i += 1) {
      serviceDescription[i].classList.remove('service-description__item--current');
    }
    servicesLink[0].classList.add('services__item-description--current');
    serviceDescription[0].classList.add('service-description__item--current');
  });

  guarantee.addEventListener('click', (evt) => {
    evt.preventDefault();
    for (let i = 0; i < servicesLink.length; i += 1) {
      servicesLink[i].classList.remove('services__item-description--current');
    }
    for (let i = 0; i < serviceDescription.length; i += 1) {
      serviceDescription[i].classList.remove('service-description__item--current');
    }
    servicesLink[1].classList.add('services__item-description--current');
    serviceDescription[1].classList.add('service-description__item--current');
  });
  credit.addEventListener('click', (evt) => {
    evt.preventDefault();
    for (let i = 0; i < servicesLink.length; i += 1) {
      servicesLink[i].classList.remove('services__item-description--current');
    }
    for (let i = 0; i < serviceDescription.length; i += 1) {
      serviceDescription[i].classList.remove('service-description__item--current');
    }
    servicesLink[2].classList.add('services__item-description--current');
    serviceDescription[2].classList.add('service-description__item--current');
  });

  let button = document.querySelector('.button--feedback');
  let popup = document.querySelector('.modal-feedback');
  let close = document.querySelector('.modal-close');
  let form = popup.querySelector('form');
  let username = popup.querySelector('[name=username]');
  let userEmail = popup.querySelector('[name=user-email]');
  let userMessage = popup.querySelector('[name=user-message');
  let isStorageSupport = true;
  let storage = '';

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