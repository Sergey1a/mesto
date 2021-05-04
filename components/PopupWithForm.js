import {Popup} from "./Popup.js"

export class PopupWithForm extends Popup{
    constructor(popupsElement,{handleFormSubmit}){
        super(popupsElement)
        this._handleFormSubmit = handleFormSubmit;
        this._form = popupsElement.querySelector(".popup__form");
        this._submitEvtHandle = this._submitEvtHandle.bind(this);
    }

    _getInputValues(){
        const inputList = Array.from(this._form.querySelectorAll(".popup__input"));

        const dataList = {};
        inputList.forEach((data)=>{
            dataList[data.name] = data.value;
        });

        return dataList;
    }

    _submitEvtHandle(evt){
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close()
    }

    setEventListeners() {
        this._form.addEventListener("submit", this._submitEvtHandle);
        super.setEventListeners();
    }

    close(){
    super.close();
    this._form.reset();
    }
}