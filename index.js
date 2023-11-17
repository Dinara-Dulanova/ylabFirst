import {FormValidator} from './src/components/FormValidator.js'
import {Form} from './src/components/Form.js'
import {Api} from './src/components/Api.js'

function showAuthError() {
  const errorMessage = document.querySelector('.auth__error');
  errorMessage.classList.add('show');
}

function hideAuthError() {
  const errorMessage = document.querySelector('.auth__error');
  errorMessage.classList.remove('show');
}

const configForm = {
    inputSelector: '.auth__input',
    submitButtonSelector: '.auth__button',
    inactiveButtonClass: 'auth__button_disabled',
    inputErrorClass: 'auth__input_type_error',
  };

  const api = new Api(
    'https://example.com', //сервер
    {
      authorization: 'bybjygvbjgj', //токен
      'Content-Type': 'application/json'
    }
  );

const authForm = document.querySelector('.auth__form');
//console.log(authForm);
const formEditValidator = new FormValidator(configForm, authForm, ()=> {console.log('hi')});
formEditValidator.enableValidation();

const formData = new Form((data) => {
  formData .renderLoading('Загрузка...');
  api.authentication(data.email, data.password)
    .then(() => {
      alert('succes');
      hideAuthError();
      authForm.reset();
    })
    .catch (() => {
      showAuthError();
    })
    .finally(() => {
      formData .renderLoading('Войти');
    });
  });
formData.setEventListeners();