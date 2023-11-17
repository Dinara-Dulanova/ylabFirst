//import fetchMock from 'jest-fetch-mock'

//fetchMock.enableMocks();

export class Api {
    constructor(url, headers) {
        this._url = url;
        this._headers = headers;
      }
    
    _getResponse (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Ошибка ${response.status} ${response.statusText}`);
      }
    }
    
    //Загрузка информации о пользователе с сервера
    authentication (email, password) {
      console.log(email, password);
      return fetch(`${this._url}/${email}/${password}/`, {
        headers: this._headers,
        method: 'GET',
      })
      .then((response) => this._getResponse(response))
    }
  }
  