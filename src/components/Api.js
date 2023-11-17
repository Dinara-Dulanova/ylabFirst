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
    
  authentication (email, password) {
    return fetch(`${this._url}/${email}/${password}/`, {
      headers: this._headers,
      method: 'GET',
    })
    .then((response) => this._getResponse(response))
  }
}
  