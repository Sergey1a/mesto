import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {initialCards} from "./initialCards.js";
import {Section} from "./Section.js";
//import {PopupWithImage} from "./PopupWithImage.js";
import {PopupWithForm} from "./PopupWithForm.js";

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
// const popupAddTitle = popupCardImage.querySelector('.popup__input_type_title');
// const popupAddImage = popupCardImage.querySelector('.popup__input_type_image');

const cardsContainer = document.querySelector('.element');

const popupImageFull = document.querySelector('.popup-full');
const hendlePopupPhoto = popupImageFull.querySelector('.popup__image');
const fullFotoTitle = popupImageFull.querySelector('.popup__figcaption');

const popups = document.querySelectorAll('.popup');

const escape = "Escape"



const cardList = new Section(
    {
    data: initialCards,
    renderer: (item)=>{
        const card = new Card(item,"#template-element",handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }},
    cardsContainer,);

    cardList.renderItems();

    const popupAddCardWithForm = new PopupWithForm(popupCardImage,
        {handleFormSubmit:(item)=>{
            const card = new Card(item,"#template-element");
            const cardElement = card.generateCard();
            cardList.addItem(cardElement);
        }
    });
    
    buttonImageAdd.addEventListener('click', () => {
        popupAddCardWithForm.open();
    });
    
    
    const popupProfileWithForm = new PopupWithForm(profilePopup,
        {handleFormSubmit:(item)=>{
        }
    });
    
    profileButtonNode.addEventListener('click', () => {
        popupProfileWithForm.open();
    });




    const validationConfig = {
        formSelector: '.popup__form',
        inputSelector: '.popup__input',
        submitButtonSelector: '.popup__button',
        inactiveButtonClass: 'popup__button_invalid',
        inputErrorClass: 'popup__input_type_invalide',
        errorClass: ".popup_visible",
        popupSelector: '.popup',
      };
    
    const formProfileValidation = new FormValidator(validationConfig,popupFormNode);
    formProfileValidation.enableValidation();
    
    const formAddCardValidation = new FormValidator(validationConfig,popupFormNodeImage);
    formAddCardValidation.enableValidation();





//Закрытие попап на Esc================
// const  closeEscPopup = (evt) => {
//     if (evt.key === escape) {
//         closePopup(document.querySelector('.popup_visible'));
//     };
// };

//Overlay закрытие попап================
// popups.forEach((popup) => {
//     popup.addEventListener('click',(evt) => {
//         if(evt.target.classList.contains('popup_visible')){
//             closePopup(popup);
//         }
//         if (evt.target.classList.contains('popup__close')) {
//             closePopup(popup);
//         }
//     });
// });

//Вызов поп-ап   ============================
// function openPopup(popup) {
//     popup.classList.add('popup_visible');
//     document.addEventListener('keydown', closeEscPopup);
// };
// //закрыть поп-ап
// function closePopup(popup) {
//     popup.classList.remove('popup_visible');
//     document.removeEventListener('keydown', closeEscPopup);
// };

// // Функция сабмит  ====================================
// function submitProfileForm(event) {
//     event.preventDefault();
//     profileHobbyNode.textContent = popupInputHobbyNode.value;
//     profileUserNameNode.textContent = popupInputNameNode.value;
//     closePopup(profilePopup);
// };

// function submitAddCardForm(event) {
//     event.preventDefault();
//     const newItemHtml = ({name:popupAddTitle.value, link:popupAddImage.value});

//     cardsContainer.prepend(createCard(newItemHtml));
//     popupFormNodeImage.reset();
//     closePopup(popupCardImage);
//     formAddCardValidation.disableSubmitButton()
// };

function handleCardClick() {
    openPopup(popupImageFull);
}

//Создание карточки=============

//Класс Попап====================

//const popupWithImage = new PopupWithImage(hendlePopupPhoto);
//popupWithImage.open();


// profileButtonNode.addEventListener('click', () => {
//     popupInputHobbyNode.value = profileHobbyNode.textContent;
//     popupInputNameNode.value = profileUserNameNode.textContent;
//     openPopup(profilePopup);
// });

//popupFormNode.addEventListener('submit',submitProfileForm);


//popupFormNodeImage.addEventListener('submit', submitAddCardForm);


