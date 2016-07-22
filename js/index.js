import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import LoginButtons from './components/LoginButtons'
import SigninForm from './components/SigninForm'
import SignupForm from './components/SignupForm'
import NoMatch from './components/NoMatch'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={LoginButtons}/>
    <Route path="/signup" component={SignupForm}/>
    <Route path="/signin" component={SigninForm}/>
    <Route path="*" component={NoMatch}/>
  </Router>
  , document.getElementById('view'))
