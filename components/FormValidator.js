
export class FormValidator{
    constructor(validationConfig,formElement){
        this._formSelector =  validationConfig.formSelector
        this._inputSelector =  validationConfig.inputSelector
        this._submitButtonSelector = validationConfig.submitButtonSelector
        this._buttonInvalid = validationConfig.buttonInvalid
        this._inactiveButtonClass = validationConfig.inactiveButtonClass
        this._inputErrorClass = validationConfig.inputErrorClass
        this._inputError = validationConfig.inputError
        this._errorClass = validationConfig.errorClass  
        this._formElement = formElement
        
        this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._errors = Array.from(this._formElement.querySelectorAll(this._inputError));
    }

    // disable button
    disableSubmitButton() {
        this._button.setAttribute("disabled", true);
        this._button.classList.add(this._buttonInvalid);
    }

    // Переключение состояния кнопки
    _toggleSubmit() {
        if (this._hasInvalidInput()) {
        this.disableSubmitButton();
        } else {
            this._button.removeAttribute("disabled", true);
            this._button.classList.remove(this._buttonInvalid);
        }
    }

    //Проверка массива инпутов на валидность
    _hasInvalidInput() {
        return this._inputs.some((inputElement) => {
        return !inputElement.validity.valid;
        });
    }

    // Проверка элемента формы на валидность
    _isValid(element) {
        this._element = element;
        this._errorElement = this._formElement.querySelector(`#${this._element.id}-error`);
        !this._element.validity.valid ? this._showError() : this._hideError();
    }

    // Отображение сообщения об ошибке
    _showError() {
        this._element.classList.add(this._inputErrorClass);
        this._errorElement.classList.add(this._errorClass);
        this._errorElement.textContent = this._element.validationMessage;
    }

    // Скрытие сообщения об ошибке
    _hideError() {
        this._element.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = "";
    }

    // Скрытие ошибок и очистка полей
    hideAllErrors() {
        this._errors.forEach((error) => {
        error.classList.remove(this._inputError);
        error.textContent = '';
        });
        this._inputs.forEach((input) => {
        input.classList.remove(this._inputErrorClass);
        });
        this.disableSubmitButton();
    }

    // Установка слушателей
    _setEventListeners() {
        this._button = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleSubmit();
        this._inputs.forEach((element) => {
        element.addEventListener("input", () => {
            this._isValid(element);
            this._toggleSubmit();
        });
        });
    }

    // Валидация форм
    enableValidation() {
        this._setEventListeners();
        this._formElement.addEventListener(
        "submit",
        (evt) => evt.preventDefault(),
        this._toggleSubmit()
        );
    }

}