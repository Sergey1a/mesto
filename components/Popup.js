export class Popup{
  constructor(popupsElement){
      this._element = popupsElement;
      this._popupCloseButton = this._element.querySelector(".popup__close")
      this._handleEscClose = this._handleEscClose.bind(this)
  }

  open(){
    this.setEventListeners()
      this._element.classList.add('popup_visible');
      document.addEventListener("keydown", this._handleEscClose);
  }

  close(){
      this._element.classList.remove('popup_visible');
      document.removeEventListener("keydown",this._handleEscClose);
  }

  _handleEscClose(evt){
      if (evt.key === "Escape") {
          this.close();
      };
  }

  setEventListeners(){
    this._element.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
}