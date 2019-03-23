
require('whatwg-fetch');

const BASE_URL = 'http://mrkt.little.team/api/public';

export const authorize = (credentials) => {
  return fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  })
    .then(response => {
      return response.json();
    })
};