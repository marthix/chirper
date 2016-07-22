import React from 'react'
import { Link, browserHistory } from 'react-router'

var SignupButton = React.createClass({
  getInitialState: function(){
    return {hover: false}
  },
  toggleHover: function(){
    this.setState({hover: !this.state.hover})
  },
  render: function() {
    var btnStyle = {
      width: '100%',
      maxWidth: '260px',
      minWidth: '75px',
      padding: '10px',
      border: '2px solid #2274A5',
      backgroundColor: 'transparent',
      color: '#2274A5',
      marginTop: '10px',
      outline: 'none',
      transition: '0.2s ease all'
    },
    linkStyle = {
      color: '#2274A5',
      textDecoration: 'none',
      transition: '0.2s ease all'
    }

    if (this.state.hover) {
      btnStyle.backgroundColor = 'rgba(34, 116, 164, 0.3)',
      btnStyle.color = '#e8fbf7',
      linkStyle.color = '#e8fbf7'
    }

    return(
      <div className="col-sm-2 col-sm-offset-4">
        <button style={btnStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={() => browserHistory.push('/signup')}><Link to="/signup" style={linkStyle}>Sign Up</Link></button>
      </div>
    )
  }
})

export default SignupButton
