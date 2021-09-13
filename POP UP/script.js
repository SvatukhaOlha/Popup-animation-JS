const btnOpen = document.getElementById('btn__open');
const successMessage = document.querySelector('.popup_success-message');
const popUp = document.getElementById('popup');
popUp.style.display = 'none';
const mainPage = document.getElementById('main-page');

// OPENS POPUP
btnOpen.addEventListener('click', function () {
  popUp.style.display = 'block';
  mainPage.style.opacity = 0.7;

  // reset for second click
  const pBody = document.querySelector('.popup__body');
  pBody.style.display = 'block';
  const successMessage = document.querySelector('.popup_success-message');
  successMessage.style.display = 'none';
});

// CLOSES POPUP
const btnCancel = document.querySelector('.btn__cancel');
btnCancel.addEventListener('click', function () {
  popUp.style.display = 'none';
  mainPage.style.opacity = 1;
});

// SHOWS SUCCES MESAGE AFTER CLICK ON THE BUTTON "unistall"
const messageContainer = document.querySelector('.popup_success-message');
const btnUnistall = document.getElementById('btn__unistall');
btnUnistall.addEventListener('click', function () {

  const pBody = document.querySelector('.popup__body');
  pBody.style.display = 'none';
  const successMessage = document.querySelector('.popup_success-message');
  successMessage.style.display = 'block';

  setTimeout(() => {
    popUp.style.display = 'none';
    mainPage.style.opacity = 1;
  }, 2000);
});
