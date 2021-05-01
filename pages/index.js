import './index.css';
import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import {UserInfo} from "../components/UserInfo.js";
import {initialCards,
    profileButtonNode,
    buttonImageAdd,
    profilePopup,
    popupFormNode,
    profileUserName,
    profileUserHobby,
    profileUserNameInput,
    profileUserHobbyInput,
    popupCardImage,
    popupFormNodeImage,
    cardsContainer,
    popupImageFull,
    validationConfig} from "../utils/initialCards.js";

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

    
const formProfileValidation = new FormValidator(validationConfig,popupFormNode);
formProfileValidation.enableValidation();
    
const formAddCardValidation = new FormValidator(validationConfig,popupFormNodeImage);
formAddCardValidation.enableValidation();

