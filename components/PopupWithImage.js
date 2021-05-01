import {Popup} from "./Popup.js"

export class PopupWithImage extends  Popup{
    constructor(popupsSelector,hendlePopupPhoto){
        super(popupsSelector);
        this._hendlePopupPhoto = hendlePopupPhoto
    }

    open(name,link){
        super.open();
        const fullFotoPopup = document.querySelector(".popup__image");
        const fullTitlePopup = document.querySelector(".popup__figcaption");

        fullFotoPopup.alt = name;
        fullFotoPopup.src = link
        fullTitlePopup.textContent = name;
    }
}