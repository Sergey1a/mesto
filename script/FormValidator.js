
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

    // disable button
    _disableSubmitButton() {
        this._button.setAttribute("disabled", true);
        this._button.classList.add("popup__button_invalid");
    }

    // Переключение состояния кнопки
    _toggleSubmit() {
        if (this._hasInvalidInput()) {
        this._disableSubmitButton();
        } else {
        this._button.removeAttribute("disabled", true);
        this._button.classList.remove("popup__button_invalid");
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
        this._errorElement = this._forms.querySelector(`#${this._element.id}-error`);
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

    //* Скрытие ошибок и очистка полей
    // hideAllErrors() {
    //     this._errors.forEach((error) => {
    //     error.classList.remove(this._errorClass);
    //     error.textContent = "";
    //     });
    //     this._inputs.forEach((input) => {
    //     input.classList.remove(this._inputErrorClass);
    //     });
    //     this._disableSubmitButton();
    // }

    // Установка слушателей
    _setEventListeners() {
        this._button = this._forms.querySelector(this._submitButtonSelector);
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
        this._forms.addEventListener(
        "submit",
        (evt) => evt.preventDefault(),
        this._toggleSubmit()
        );
    }

    }