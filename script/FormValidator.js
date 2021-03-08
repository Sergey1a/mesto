
export class FormValidator{
    constructor(validationConfig,forms){
        this._formSelector =  validationConfig.formSelector
        this._inputSelector =  validationConfig.inputSelector
        this._submitButtonSelector = validationConfig.submitButtonSelector
        this._inactiveButtonClass = validationConfig.inactiveButtonClass
        this._inputErrorClass = validationConfig.inputErrorClass
        this._errorClass = validationConfig.errorClass
        this._forms = forms  
        
        this._inputs = Array.from(this._forms.querySelectorAll(this._inputSelector));
        this._errors = Array.from(this._forms.querySelectorAll(`#${this._inputErrorClass.id}-error`));
    }

    _showError(){
        this._inputs.classList.add(this._inputErrorClass);
        this._errors.textContent = this._inputSelector.validationMessage;
        this._errors.classList.add(this._errorClass);
    }

    _hideError(){
        this._inputs.classList.remove(this._inputErrorClass);
        this._errors.classList.remove(this._errorClass);
        this._errors.textContent = "";
    }

    _enableValidation(){
        formList.forEach((formElement)=>{
        formElement.addEventListener("submit",(evt)=>{
            evt.preventDefoult()
            console.log(formElement);
        })
    });
    }
}