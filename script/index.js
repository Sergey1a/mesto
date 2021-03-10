import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";

const profileButtonNode = document.querySelector('.profile__name-edit');
const profileUserNameNode = document.querySelector('.profile__user-name');
const profileHobbyNode = document.querySelector('.profile__hobby');
const buttonImageAdd = document.querySelector('.profile__image-edit');

const profilePopup = document.querySelector('.popup-profile');
const popupFormNode = profilePopup.querySelector('.popup__form');
const popupInputNameNode = profilePopup.querySelector('.popup__input_type_name');
const popupInputHobbyNode = profilePopup.querySelector('.popup__input_type_hobby');

const popupCardImage = document.querySelector('.popup-image');
const popupFormNodeImage = popupCardImage.querySelector('.popup__form_type_submit');
const popupAddTitle = popupCardImage.querySelector('.popup__input_type_title');
const popupAddImage = popupCardImage.querySelector('.popup__input_type_image');

const cardsContainer = document.querySelector('.element');
const templateElement = document.querySelector('#template-element');

const popupImageFull = document.querySelector('.popup-full');
const hendlePopupPhoto = popupImageFull.querySelector('.popup__image');
const fullFotoTitle = popupImageFull.querySelector('.popup__figcaption');

const popups = document.querySelectorAll('.popup');
const cardsImg = document.querySelector(".element__foto")
const titleElement = document.querySelector('.element__title');

//Закрытие попап на Esc================
function closeEscPopup (evt) {
    if (evt.key === "Escape") {
      popupClose(document.querySelector('.popup_visible'));
    };
};

//Overlay закрытие попап================
popups.forEach((popup) => {
    popup.addEventListener('click',(evt) => {
        if(evt.target.classList.contains('popup_visible')){
            popupClose(popup);
        }
        if (evt.target.classList.contains('popup__close')) {
            popupClose(popup);
        }
    });
});

//Вызов поп-ап   ============================
function popupOpen(popup) {
    popup.classList.add('popup_visible');
    document.addEventListener('keydown', closeEscPopup);
};
//закрыть поп-ап
function popupClose(popup) {
    popup.classList.remove('popup_visible');
    document.removeEventListener('keydown', closeEscPopup);
};

// Функция сабмит  ====================================
function handleFormSubmit(event) {
    event.preventDefault();
    profileHobbyNode.textContent = popupInputHobbyNode.value;
    profileUserNameNode.textContent = popupInputNameNode.value;
    popupClose(profilePopup);
};

function handleFormAddCardsSubmit(event) {
    event.preventDefault();
    const newItemHtml = ({name:popupAddTitle.value, link:popupAddImage.value});

    cardsContainer.prepend(createCard(newItemHtml));
    popupFormNodeImage.reset();
    popupClose(popupCardImage);
};

//Попап фулл фото=====================
function handleCardClick(name,link) {
    hendlePopupPhoto.src = link;
    hendlePopupPhoto.alt = name;
    fullFotoTitle.textContent = name;
      popupOpen(popupImageFull);
}

//Создание карточки=============
function createCard  (item) {
    const card = new Card(
        item,
        "#template-element",
        handleCardClick
    );
    const cardElement = card.generateCard();
    return cardElement;
};


//ПОПАП редактирования профиля  ============================
profileButtonNode.addEventListener('click', () => {
    popupInputHobbyNode.value = profileHobbyNode.textContent;
    popupInputNameNode.value = profileUserNameNode.textContent;
    popupOpen(profilePopup);
});

popupFormNode.addEventListener('submit',handleFormSubmit);

// ПОПАП добавления карточек   ================================
buttonImageAdd.addEventListener('click', () => {
    popupOpen(popupCardImage);
});

popupFormNodeImage.addEventListener('submit', handleFormAddCardsSubmit);

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Перебор массива для карточек===============
initialCards.forEach((item) => {
    cardsContainer.prepend(createCard(item));
});

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_type_invalide',
    errorClass: ".popup_visible",
  };


  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((forms) => {
    const formValidation = new FormValidator(validationConfig,forms);
    formValidation.enableValidation();
  });

