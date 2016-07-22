import React from 'react'
import LoginFormField from './LoginFormField'

class SigninForm extends React.Component {
  fetch() {
    var formFields = {
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }

    fetchApi('POST', '/users/login', formFields, function(response, statusCode) {
      console.log(statusCode)
      if (statusCode >= 200 && statusCode < 300) {
        console.log(response)
        saveToken(response.auth_token)
        window.location.href = '/timeline.html'
      } else if (statusCode === 419){
        // Throw an error for Incorrect Password
        document.getElementById('password').style.borderColor = '#E4572E'
      } else if (statusCode === 421){
        // Throw an error for User Not Found
        document.getElementById('username').style.borderColor = '#E4572E'
      }
    })
  }

  render() {
    var formStyle = {
      display: 'inline-block'
    }

    return <form method="get" action="#" id="signin-form">
      <div className="row text-center">
        <LoginFormField type="text" placeholder="Username" id="username" />
        <LoginFormField type="text" placeholder="Password" id="password" />
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <button type="button" id="btnSignin" onClick={this.fetch}>Sign In</button>
        </div>
      </div>
    </form>
  }
}

export default SigninForm
