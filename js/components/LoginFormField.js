import React from 'react'

var LoginFormField = React.createClass({
  getInitialState: function() {
    return {value: ''}
  },
  handleChange: function(event) {
    this.setState({value: event.target.value})
  },
  render: function() {
    var inputStyle = {
      display: 'inline-block',
      width: '100%',
      height: '40px',
      padding: '10px',
      margin: '5px',
      backgroundColor: 'rgba(232, 251, 247, 0.3)',
      border: '1px solid #e8fbf7',
      color: '#2274A5',
      outline: 'none'
    }
    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
        <input style={inputStyle} type={this.props.type} value={this.state.value} onChange={this.handleChange} placeholder={this.props.placeholder} id={this.props.id} />
      </div>
    )
  }
})

export default LoginFormField
