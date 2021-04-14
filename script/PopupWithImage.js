import {Popup} from "./Popup.js"

export class PopupWithImage extends  Popup{
    constructor(popupsSelector,hendlePopupPhoto){
        super(popupsSelector);
        this._hendlePopupPhoto = hendlePopupPhoto
    }

    open(data){
        super.open();
        const fullFotoPopup = this._element.querySelector(".popup__image");
        const fullTitlePopup = this._element.querySelector(".popup__figcaption");
        fullFotoPopup.alt = data.name;
        fullFotoPopup.src = data.link
        fullTitlePopup.textContent = data.name;

    }
}