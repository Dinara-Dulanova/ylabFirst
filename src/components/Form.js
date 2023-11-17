export class Form {
  constructor(submitFormFunction) {
    this._submitFormFunction = submitFormFunction;
    this._form = document.querySelector('.auth__form');
    this._inputList = this._form.querySelectorAll('.auth__input');
    this._submitButton = this._form.querySelector('.auth__button');
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => formValues[input.name] = input.value);
    return formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormFunction(this._getInputValues());
    });
  }

  renderLoading(text) {
    this._submitButton.textContent = text;
  }
}