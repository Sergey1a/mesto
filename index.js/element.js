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

const cardsConteiner = document.querySelector('.element');
const templateElement = document.querySelector('#template-element');

const popupAddTitle = document.querySelector('.popup__input_type_title');
const popupAddImage = document.querySelector('.popup__input_type_image');

const hendlePopupFoto = document.querySelector('.popup__image');
const cardsImg = document.querySelector('.element__foto');
let fullFotoTitle = document.querySelector('.popup__figcaption');

const popupImageFull = document.querySelector('.popup-full');

function renderList () {
    const itemList = initialCards.map(composeItem);
    cardsConteiner.append(...itemList);
}
// Темплей
function composeItem (item){
    const newItem = templateElement.content.cloneNode(true);
    const titleElement = newItem.querySelector('.element__title');
    const cardsImg = newItem.querySelector('.element__foto');

    newItem.querySelector('.element__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active')});

    const buttonRemove = newItem.querySelector('.element__remove');
      buttonRemove.addEventListener('click',removeItem);
      titleElement.textContent = item.name;
      cardsImg.src = item.link;
    
    // Удаление карточек
function removeItem (event){
    const targetElement = event.target;
    const targetItem = targetElement.closest('.element__card');
      targetItem.remove();
}
   //поп-ап фото
cardsImg.addEventListener('click', function (event){
    event.preventDefault();
    popupImageFull.classList.add('popup_visible');

    hendlePopupFoto.src = item.link;
    hendlePopupFoto.alt = item.name;
    fullFotoTitle.textContent = item.name;

});

    return newItem;
};

renderList();