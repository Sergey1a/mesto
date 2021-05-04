export  const profileButtonNode = document.querySelector('.profile__name-edit');
export  const buttonImageAdd = document.querySelector('.profile__image-edit');

export  const profilePopup = document.querySelector('.popup-profile');
export  const formEditProfile = profilePopup.querySelector(".popup__form_type_profile");

export  const profileUserName = document.querySelector(".profile__user-name");
export  const profileUserHobby = document.querySelector(".profile__hobby");

export  const profileUserNameInput = document.querySelector(".popup__input_type_name");
export  const profileUserHobbyInput = document.querySelector('.popup__input_type_hobby')

export  const popupCardImage = document.querySelector('.popup-image');
export  const formAddCard = popupCardImage.querySelector('.popup__form_type_submit');

export  const templateCard = "#template-element";
export  const cardsContainer = document.querySelector('.element');

export  const popupImageFull = document.querySelector('.popup-full');

export  const initialCards = [
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

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    buttonInvalid: 'popup__button_invalid',
    inactiveButtonClass: '.popup__button_invalid',
    inputErrorClass: 'popup__input_type_invalide',
    inputError: ".popup__error",
    errorClass: ".popup_visible",
    popupSelector: '.popup',
};