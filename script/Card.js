
class Card{
    constructor(item,handleCardClick,createCard){
        this._name = item.name
        this._link = item.link
        this._handleCardClick = handleCardClick
        this._createCard = createCard


    }
    _getTemplate = () => {
        this._cardElement = document
        .querySelector("#template-element")
        .content.querySelector('.element__card')
        .cloneNode(true)


        this._cardElement.querySelector(".element__remove").addEventListener(
            "click",
            this._deleteCard
        )

        this._cardElement.querySelector(".element__like").addEventListener(
            "click",
            this._likeActive
        )

        this._cardElement.querySelector(".element__foto").addEventListener(
            "click",
            this._handleOpenPopup
        )

        return this._cardElement;
    }

    generateCard = () => {
        this._element = this._getTemplate()
        this._cardFoto = this._cardElement.querySelector(".element__foto");
        this._elementLike = this._cardElement.querySelector(".element__like");
        this._cardDelete = this._cardElement.querySelector(".element__remove");
        this._cardFoto.src = this._link;
        this._cardFoto.alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;


        return this._element;
    }

    _likeActive = () => {
        this._cardElement.querySelector(".element__like").classList.toggle('element__like_active');
    }

    _deleteCard = () => {
        this._cardElement.remove();
    }

    _handleOpenPopup = () => {
        hendlePopupPhoto.src = this._link
        fullFotoTitle.textContent = this._name
        popupImageFull.classList.add('popup_visible');     
    }

    _setEventListeners() {
        this._cardElement.querySelector(".element__foto").addEventListener('click', () => {
            this._handleCardClick();
  });
    }

}

initialCards.forEach((item) => {
    const card = new Card(item);
    const cardElement = card.generateCard();

    document.querySelector('.element').append(cardElement);
});
