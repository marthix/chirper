import React from 'react'
import SignupButton from './SignupButton'
import SigninButton from './SigninButton'

class LoginButtons extends React.Component {
  render() {
    return <div className="row text-center">
      <SignupButton/>
      <SigninButton/>
    </div>
  }
}

export default LoginButtons
