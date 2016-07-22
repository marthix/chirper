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
      console.log(statusCode)
      if (statusCode >= 200 && statusCode < 300) {
        saveToken(response.auth_token)
        window.location.href = '/details.html'
      } else {
        // Throw an error
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
