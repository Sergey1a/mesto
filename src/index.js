import "./index.css"
import {Card} from "./Card.js";
import {FormValidator} from "./FormValidator.js";
import {initialCards} from "./initialCards.js";
import {Section} from "./Section.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {UserInfo} from "./UserInfo.js"

const profileButtonNode = document.querySelector('.profile__name-edit');
const buttonImageAdd = document.querySelector('.profile__image-edit');

const profilePopup = document.querySelector('.popup-profile');
const popupFormNode = profilePopup.querySelector('.popup__form');

const profileUserName = document.querySelector(".profile__user-name");
const profileUserHobby = document.querySelector(".profile__hobby");

const profileUserNameInput = document.querySelector(".popup__input_type_name");
const profileUserHobbyInput = document.querySelector('.popup__input_type_hobby')

const popupCardImage = document.querySelector('.popup-image');
const popupFormNodeImage = popupCardImage.querySelector('.popup__form_type_submit');

const cardsContainer = document.querySelector('.element');

const popupImageFull = document.querySelector('.popup-full');



//Класс Section====================================
const cardList = new Section({
    data: initialCards,
    renderer: (item)=>{
        const card = new Card(item,"#template-element",handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement,'prepend');
    }},
    cardsContainer,);

    cardList.renderItems();

const popupAddCardWithForm = new PopupWithForm(popupCardImage,
    {handleFormSubmit:(item)=>{
         const card = new Card(item,"#template-element",handleCardClick);
        const cardElement = card.generateCard();
        cardList.addItem(cardElement);
    }
});
popupAddCardWithForm.setEventListeners();
    
    
buttonImageAdd.addEventListener('click', () => {
    popupAddCardWithForm.open();
    formAddCardValidation.disableSubmitButton() 
});

const userInfo = new UserInfo({profileUserName,profileUserHobby});

       
const popupProfileWithForm = new PopupWithForm(profilePopup,
    {handleFormSubmit:(data)=>{
        userInfo.setUserInfo(data);
    }
});
popupProfileWithForm.setEventListeners();
    
profileButtonNode.addEventListener('click', () => {
    popupProfileWithForm.open();
    const data = userInfo.getUserInfo();
    profileUserNameInput.value = data.name;
    profileUserHobbyInput.value = data.hobby;
    formProfileValidation.disableSubmitButton();
});



const popupWithImage = new PopupWithImage(popupImageFull);
popupWithImage.setEventListeners();


function handleCardClick(name,link) {
    popupWithImage.open(name,link);
}




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

