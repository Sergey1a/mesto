export class Popup{
    constructor(popupsSelector){
        this._element = popupsSelector;
        // this._overlay = document.querySelector('.popup');
        this._popupCloseButton = this._element.querySelector(".popup__close")
    }

    open(){
      this.setEventListeners()
        this._element.classList.add('popup_visible');
        document.addEventListener("keydown",(evt) => this._handleEscClose(evt));
    }

    close(){
        this._element.classList.remove('popup_visible');
        document.removeEventListener("keydown",(evt) => this._handleEscClose(evt));
    }

    _handleEscClose(evt){
        if (evt.key === "Escape") {
            this.close();
        };
    }

    setEventListeners(){
      this._popupCloseButton.addEventListener("click", () => {
         this.close();
      });
      
      this._element.addEventListener("click", (evt) => {
        if (evt.target.classList.contains('popup_visible')) {
          this.close();
        }
      });
    }
}