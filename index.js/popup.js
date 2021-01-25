const profileButtonNode = document.querySelector('.profile__name-edit');
const popupNode = document.querySelector('.popup');
const popupCloseNode = document.querySelector('.popup__close');
const popupCloseNodeCardsImg = document.querySelector('.popup__close_type_cards');
const closeImgPopup = document.querySelector('.popup__close_type_full-img');

const profileUserNameNode = document.querySelector('.profile__user-name');
const profileHobbyNode = document.querySelector('.profile__hobby');
const popupFormNode = document.querySelector('.popup__form');
const popupFormNodeImage = document.querySelector('.popup__form_type_submit');
const popupInputNameNode = document.querySelector('.popup__input_type_name');
const popupInputHobbyNode = document.querySelector('.popup__input_type_hobby');

const buttonImageAdd = document.querySelector('.profile__image-edit');
const popupCardImage = document.querySelector('.popup-image');
const buttonImageSave = document.querySelector('.popup__button_add_image');

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
    popupImageFull.classList.remove('popup_visible');
};

function hendleFormSubmit(event) {
    event.preventDefault();
    profileHobbyNode.textContent = popupInputHobbyNode.value;
    profileUserNameNode.textContent = popupInputNameNode.value;
    handlePopupCloseClick();

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

//Закрыть попап фото
closeImgPopup.addEventListener('click', function () {
    handlePopupCloseClick(popupImageFull);
});


//Сабмит событие
popupFormNode.addEventListener('submit',hendleFormSubmit);
popupFormNodeImage.addEventListener('submit', hendleFormSubmit);

buttonImageSave.addEventListener('click',addFormImage);

function addFormImage () {
    const newPopupAddTitle = popupAddTitle.value;
    const newPopupAddImage = popupAddImage.value;
    const newItemHtml = composeItem ({name:newPopupAddTitle, link:newPopupAddImage});

    cardsConteiner.prepend(newItemHtml);
    popupAddTitle.value = '';
    popupAddImage.value = '';

};