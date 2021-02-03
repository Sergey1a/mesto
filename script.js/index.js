const profileButtonNode = document.querySelector('.profile__name-edit');
const profilePopup = document.querySelector('.popup-profile');
const profilePopupCloseBtn = profilePopup.querySelector('.popup__close');
const popupCloseNodeCardsImg = document.querySelector('.popup__close_type_cards');
const closeImgPopup = document.querySelector('.popup__close_type_full-img');

const profileUserNameNode = document.querySelector('.profile__user-name');
const profileHobbyNode = document.querySelector('.profile__hobby');
const popupFormNode = profilePopup.querySelector('.popup__form');
const popupFormNodeImage = document.querySelector('.popup__form_type_submit');
const popupInputNameNode = popupFormNode.querySelector('.popup__input_type_name');
const popupInputHobbyNode = document.querySelector('.popup__input_type_hobby');

const buttonImageAdd = document.querySelector('.profile__image-edit');
const popupCardImage = document.querySelector('.popup-image');

const cardsContainer = document.querySelector('.element');
const templateElement = document.querySelector('#template-element');

const popupAddTitle = document.querySelector('.popup__input_type_title');
const popupAddImage = document.querySelector('.popup__input_type_image');

const hendlePopupPhoto = document.querySelector('.popup__image');
const fullFotoTitle = document.querySelector('.popup__figcaption');

const popupImageFull = document.querySelector('.popup-full');


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
function clickOverlayClose (evt) {
    if(evt.target=== evt.currentTarget){
        popupClose(document.querySelector('.popup_visible'));
    };
};

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
    popupClose(popupCardImage);
    popupFormNodeImage.reset();
};

//ПОПАП редактирования профиля  ============================
profileButtonNode.addEventListener('click', () => {
    popupInputHobbyNode.value = profileHobbyNode.textContent;
    popupInputNameNode.value = profileUserNameNode.textContent;
    popupOpen(profilePopup);
});

profilePopupCloseBtn.addEventListener('click', () => {
    popupClose(profilePopup);
});

popupFormNode.addEventListener('submit',handleFormSubmit);
profilePopup.addEventListener('click',clickOverlayClose);


// ПОПАП добавления карточек   ================================
buttonImageAdd.addEventListener('click', () => {
    popupOpen(popupCardImage);
});

popupCloseNodeCardsImg.addEventListener('click', () => {
    popupClose(popupCardImage); 
});

popupFormNodeImage.addEventListener('submit', handleFormAddCardsSubmit);
popupCardImage.addEventListener('click',clickOverlayClose)


//Закрыть попап фото ==========================
closeImgPopup.addEventListener('click', () => {
    popupClose(popupImageFull);
});

popupImageFull.addEventListener('click',clickOverlayClose)

renderList();