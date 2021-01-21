const profileButtonNode = document.querySelector('.profile__name-edit');
const popupNode = document.querySelector('.popup');
const popupCloseNode = document.querySelector('.popup__close');
const popupCloseNodeCardsImg = document.querySelector('.popup__close_type_cards');

const profileUserNameNode = document.querySelector('.profile__user-name');
const profileHobbyNode = document.querySelector('.profile__hobby');
const popupFormNode = document.querySelector('.popup__form');
const popupFormNodeImage = document.querySelector('.popup__form_type_submit');
const popupInputNameNode = document.querySelector('.popup__input_type_name');
const popupInputHobbyNode = document.querySelector('.popup__input_type_hobby');

const buttonImageAdd = document.querySelector('.profile__image-edit');
const popupCardImage = document.querySelector('.popup-image');

//Вызов поп-ап
function popupOpen(transmitted) {
    transmitted.classList.add('popup_visible');
    popupInputHobbyNode.value = profileHobbyNode.textContent;
    popupInputNameNode.value = profileUserNameNode.textContent;
};
//закрыть поп-ап
function handlePopupCloseClick() {
    popupNode.classList.remove('popup_visible');
    popupCardImage.classList.remove('popup_visible');
};

function hendleFormSubmit(event) {
    event.preventDefault();
    profileHobbyNode.textContent = popupInputHobbyNode.value;
    profileUserNameNode.textContent = popupInputNameNode.value;
    handlePopupCloseClick();

};
//
function inputImageAdd () {
    debugger
    const popupAddTitle = popupAddTitle.value;
    const popupAddImage = popupAddImage.value;
    const newItemHtml = composeItem ({name:popupAddTitle, link:popupAddImage});
    cardsConteiner.prepend(newItemHtml);
    titleElement.value = '';
    cardsImg.value = '';
};

//ПОПАП редактирования профиля
profileButtonNode.addEventListener('click', () => {
    popupOpen(popupNode);
});
// ПОПАП добавления карточек
buttonImageAdd.addEventListener('click', () => {
    popupOpen(popupCardImage);
});

//Закрытие редактирования профиля
popupCloseNode.addEventListener('click', function () {
    handlePopupCloseClick(popupNode); 
});
//Закрытие добавления карточек
popupCloseNodeCardsImg.addEventListener('click', function () {
    handlePopupCloseClick(popupCardImage); 
});
//Сабмит событие
popupFormNode.addEventListener('submit',hendleFormSubmit);
popupFormNodeImage.addEventListener('submit', hendleFormSubmit,);