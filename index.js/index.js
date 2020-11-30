const headerButtonNode = document.querySelector('.header__name-edit');
const popupNode = document.querySelector('.popup');
const popupCloseNode = document.querySelector('.popup__close')

const headerUserNameNode = document.querySelector('.header__user-name');
const headerHobbyNode = document.querySelector('.header__hobby');
const popupFormNode = document.querySelector('.popup__form')
const popupInputNameNode = document.querySelector('.popup__input-name');
const popupInputHobbyNode = document.querySelector('.popup__input-hobby');
const popupButtonNode = document.querySelector('.popup__button');

headerButtonNode.addEventListener('click',handleHeaderButtonClick);
popupCloseNode.addEventListener('click',handlePopupCloseClick);
popupButtonNode.addEventListener('click',handlePopupCloseClick);

function handleHeaderButtonClick() {
    popupNode.classList.add('popup_visible');
    popupInputHobbyNode.value = headerHobbyNode.textContent;
    popupInputNameNode.value = headerUserNameNode.textContent;
}

function handlePopupCloseClick() {
    popupNode.classList.remove('popup_visible');
    popupButtonNode.classList.remove('popup_visible');
}

popupFormNode.addEventListener('submit',hendleFormSubmit);
headerHobbyNode.addEventListener('submit',hendleFormSubmit);

function hendleFormSubmit(event) {
    event.preventDefault();
    const popupInputNameNode = event.currentTarget.querySelector('.popup__input-name');
    headerUserNameNode.textContent = popupInputNameNode.value;

    event.preventDefault();
    const popupInputHobbyNode = event.currentTarget.querySelector('.popup__input-hobby');
    headerHobbyNode.textContent = popupInputHobbyNode.value;
}
