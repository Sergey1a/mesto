import {Popup} from "./Popup.js"

export class PopupWithImage extends  Popup{
    constructor(popupsElement){
        super(popupsElement);
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