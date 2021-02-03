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


function renderList () {
    const itemList = initialCards.map(composeItem);
    cardsContainer.append(...itemList);
}
// Темплей  =====================
function composeItem (item){
    const newItem = templateElement.content.cloneNode(true);
    const titleElement = newItem.querySelector('.element__title');
    const cardsImg = newItem.querySelector('.element__foto');

    newItem.querySelector('.element__like').addEventListener('click', toggleLike);

    const buttonRemove = newItem.querySelector('.element__remove');
      buttonRemove.addEventListener('click',handleDeleteCard);

      titleElement.textContent = item.name;
      cardsImg.src = item.link;
      cardsImg.alt = item.name;
    

   //поп-ап фото  =======================
cardsImg.addEventListener('click',() => {
    popupOpen(popupImageFull);
    hendlePopupPhoto.src = item.link;
    hendlePopupPhoto.alt = item.name;
    fullFotoTitle.textContent = item.name;
});

    return newItem;
};
// Удаление карточек  =========================
function handleDeleteCard (event){
    event.target.closest('.element__card').remove();
};
// Лайк функция ===================
function toggleLike (event){
    event.target.classList.toggle('element__like_active');
};

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
    const newItemHtml = composeItem ({name:popupAddTitle.value, link:popupAddImage.value});

    cardsContainer.prepend(newItemHtml);
    popupFormNodeImage.reset();
    popupClose(popupCardImage);
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

renderList();