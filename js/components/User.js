import React from 'react'


class User extends React.Component {
  fetch(e) {
    var formFields = {
      auth_token: getToken(),
      id: e.target.parentNode.childNodes[2].innerHTML
    }

    fetchApi('POST', '/users/follow', formFields, function(response, statusCode) {
      console.log(response)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-3">
          <img src={this.props.src} />
        </div>
        <div className="col-xs-9">
          <h1>{this.props.name}</h1>
          <h2>{this.props.username}</h2>
          <h3>{this.props.userid}</h3>
          <button onClick={this.fetch}></button>
        </div>
      </div>
    )
  }

}

export default User
