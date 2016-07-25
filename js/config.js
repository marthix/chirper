// API Host
var api = 'https://gentle-basin-30331.herokuapp.com/'
// var api = 'https://7990d19b.ngrok.io'
var tokenId = 'auth_token'
var userId = 'id'
var token = sessionStorage.getItem(tokenId)

// Utilities
// endpoint ... /users
// formFields ... {name: 'Joe'}
function fetchApi(method, endpoint, formFields, callback) {
  var statusCode,
      payload

  if (method === undefined) {
    method = 'POST'
  }

  if (formFields === undefined || formFields === null || formFields === '') {
    formFields = {}
  }

  payload = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  if (method.toUpperCase() === 'POST') {
    formFields[tokenId] = token
	  payload.body = JSON.stringify(formFields)
  }
  else {
    endpoint += '?' + tokenId + '=' + encodeURIComponent(token)
  }

  fetch(api + endpoint, payload)
    .then(function(response) {
	     statusCode = response.status
      return response.json()
    })
    .then(function(data) {
      callback(data, statusCode)
    })
}

function saveUserInfo(token, user) {
  sessionStorage.setItem(tokenId, token)
  sessionStorage.setItem(userId, user)
}

function getUserId() {
  return sessionStorage.getItem(userId)
}

function getToken() {
  return sessionStorage.getItem(tokenId)
}

function destroyUserInfo() {
  sessionStorage.removeItem(tokenId)
  sessionStorage.removeItem(userId)
}

function redirect(url) {
  window.location.href = url
}
