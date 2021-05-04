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
    formEditProfile,
    profileUserName,
    profileUserHobby,
    profileUserNameInput,
    profileUserHobbyInput,
    popupCardImage,
    formAddCard,
    cardsContainer,
    popupImageFull,
    validationConfig,
    templateCard,
    } from "../utils/initialCards.js";


const createCard = (item) => {
    const card = new Card(item,templateCard, ()=> {
        popupWithImage.open(item.name,item.link);
        }
    );
    return card.generateCard();
}

//Класс Section====================================
const cardList = new Section({
    data: initialCards,
    renderer: (item)=>{
        cardList.addItem(createCard(item));
    }},
    cardsContainer,);

    cardList.renderItems();

    
const popupAddCardWithForm = new PopupWithForm(popupCardImage,
    {handleFormSubmit:(item)=>{
        cardList.addItem(createCard(item));
    }
});
popupAddCardWithForm.setEventListeners();
    
    
buttonImageAdd.addEventListener('click', () => {
    popupAddCardWithForm.open();
    formAddCardValidation.hideAllErrors();
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
    formProfileValidation.hideAllErrors();
});


const popupWithImage = new PopupWithImage(popupImageFull);
popupWithImage.setEventListeners();
   
const formProfileValidation = new FormValidator(validationConfig,formEditProfile);
formProfileValidation.enableValidation();
    
const formAddCardValidation = new FormValidator(validationConfig,formAddCard);
formAddCardValidation.enableValidation();

