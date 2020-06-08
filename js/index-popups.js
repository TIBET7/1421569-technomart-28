let link = document.querySelector('.contacts .button--feedback');
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

link.addEventListener('click', (evt) => {
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
});

form.addEventListener('submit', (evt) => {
  if (!username.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    console.log('Введите имя, e-mail и сообщение');
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
    }
  }
});