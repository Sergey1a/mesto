//Валидация формы инпут ============================
function showError (form,input,config){
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    input.classList.add(config.inputErrorClass);
}

function hideError (form,input,config){
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
}

//Проверка полей на валидность================

function checkInputValidity (form,input,config){
    if(input.validity.valid){
        hideError(form,input,config);
    }else{
        showError (form,input,config);
    }
};

//Активность кнопки сохранить=================

function setButtonState (button,active,config){
    if(active){
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    }else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = "disabled";
    }
};

function setEventListener(form,config){
    const inputList = form.querySelectorAll(config.inputSelector);
    const buttonDisableValid = form.querySelector(config.submitButtonSelector);

    inputList.forEach( input => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(form,input,config);
        setButtonState(buttonDisableValid, form.checkValidity(),config);
        });
    });
};

function enableValidation (config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        setEventListener(form,config);

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });

    const buttonDisableValid = form.querySelector(config.submitButtonSelector);
    setButtonState(buttonDisableValid, form.checkValidity(),config);
});
};
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_type_invalide',
};

enableValidation(validationConfig);

