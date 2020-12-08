const profileButtonNode = document.querySelector('.profile__name-edit');
const popupNode = document.querySelector('.popup');
const popupCloseNode = document.querySelector('.popup__close');

const profileUserNameNode = document.querySelector('.profile__user-name');
const profileHobbyNode = document.querySelector('.profile__hobby');
const popupFormNode = document.querySelector('.popup__form');
const popupInputNameNode = document.querySelector('.popup__input_type_name');
const popupInputHobbyNode = document.querySelector('.popup__input_type_hobby');


function handleProfileButtonClick() {
    popupNode.classList.add('popup_visible');
    popupInputHobbyNode.value = profileHobbyNode.textContent;
    popupInputNameNode.value = profileUserNameNode.textContent;
};


function hendleFormSubmit(event) {
    event.preventDefault();
    profileHobbyNode.textContent = popupInputHobbyNode.value;
    profileUserNameNode.textContent = popupInputNameNode.value;
    handlePopupCloseClick();          //Надеюсь правильно понял)
};
function handlePopupCloseClick() {
    popupNode.classList.remove('popup_visible');
};

popupCloseNode.addEventListener('click',handlePopupCloseClick);
profileButtonNode.addEventListener('click',handleProfileButtonClick);
popupFormNode.addEventListener('submit',hendleFormSubmit);
