import React from 'react'
import { Link, browserHistory } from 'react-router'

var SigninButton = React.createClass({
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
      border: '2px solid #e8fbf7',
      backgroundColor: 'transparent',
      color: '#e8fbf7',
      marginTop: '10px',
      outline: 'none',
      transition: '0.2s ease all'
    },
    linkStyle = {
      color: '#e8fbf7',
      textDecoration: 'none',
      transition: '0.2s ease all'
    }

    if (this.state.hover) {
      btnStyle.backgroundColor = 'rgba(232, 251, 247, 0.3)',
      linkStyle.color = '#2274A5'
    }

    return (
      <div className="col-sm-2">
        <button style={btnStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} onClick={() => browserHistory.push('/signin')}><Link to="/signin" style={linkStyle}>Sign In</Link></button>
      </div>
    )
  }
})

export default SigninButton
