import {FormValidator} from './src/components/FormValidator.js'
import {Form} from './src/components/Form.js'
import {Api} from './src/components/Api.js'
import {configForm, authForm} from './utils/constants.js'

import 'ylabFirst/index.css';

function showAuthError() {
  const errorMessage = document.querySelector('.auth__error');
  errorMessage.classList.add('show');
}

function hideAuthError() {
  const errorMessage = document.querySelector('.auth__error');
  errorMessage.classList.remove('show');
}

const api = new Api(
  'https://example.com', //сервер
  {
    authorization: 'bybjygvbjgj', //токен
    'Content-Type': 'application/json'
  }
);

//включаем валидацию формы
const formEditValidator = new FormValidator(configForm, authForm);
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