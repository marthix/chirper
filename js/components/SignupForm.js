import React from 'react'
import LoginFormField from './LoginFormField'

class SignupForm extends React.Component {
  fetch() {
    var formFields = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    fetchApi('POST', '/users', formFields, function(response, statusCode) {
      if (statusCode >= 200 && statusCode < 300) {
        saveUserInfo(response.user.auth_token, response.user.id)
        window.location.href = '/details.html'
      } else {
        var keys = Object.keys(response)
        var errors = document.querySelectorAll('.error-message')

        for (var i = 0; i < errors.length; i++) {
        errors[i].parentNode.removeChild(errors[i])
        console.log(errors[i])
        }

        keys.forEach(function(key){
          var item = document.getElementById('' + key + '')
          var message = document.createElement('p')

          message.innerHTML = key + ' ' + response[key].toString()
          message.classList.add('error-message')

          item.style.borderColor = '#E4572E'
          item.parentNode.appendChild(message)
        })
      }
    })
  }
  render() {
    var formStyle = {
      display: 'inline-block'
    }

    return <form method="post" action="#" id="signup-form">
      <div className="row text-center">
        <LoginFormField type="text" placeholder="Name" id="name" />
        <LoginFormField type="text" placeholder="Email" id="email" />
        <LoginFormField type="text" placeholder="Username" id="username" />
        <LoginFormField type="text" placeholder="Password" id="password" />
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <button type="button" id="btnSignup" onClick={this.fetch}>Sign Up</button>
        </div>
      </div>
    </form>
  }
}

export default SignupForm
