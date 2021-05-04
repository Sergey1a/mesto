export class Card{
    constructor(item,templateCard,handleCardClick){
        this._item = item;
        this._name = item.name
        this._link = item.link
        this._templateCard = templateCard
        this._handleCardClick = handleCardClick
    }

    _getTemplate = () => {
        this._cardElement = document
        .querySelector(this._templateCard)
        .content.querySelector('.element__card')
        .cloneNode(true)

        return this._cardElement;
    }

    generateCard = () => {
        this._element = this._getTemplate()
        this._cardFoto = this._element.querySelector(".element__foto");
        this._cardFoto.src = this._link;
        this._cardFoto.alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;
        this._elementLike = this._element.querySelector(".element__like");

        this._setEventListener()

        return this._element;
    }

    _setEventListener = () => {

        this._element.querySelector(".element__remove").addEventListener(
            "click",
            this._deleteCard
        )

        this._elementLike.addEventListener(
            "click",
            this._likeActive
        )

        this._cardFoto.addEventListener("click",()=>{
                this._handleCardClick(this._name,this._link)
            })
        
    }

    _likeActive = () => {
        this._elementLike.classList.toggle('element__like_active');
    }

    _deleteCard = () => {
        this._element.remove();
        this._element = null;
    }

}