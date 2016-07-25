import React from 'react'

class User extends React.Component {
  render() {
    return (
      <div className="row user">
        <div className="col-xs-2">
          <img src={this.props.bio_image} />
        </div>
        <div className="col-xs-7">
          <h1>{this.props.name}</h1>
          <h2>@{this.props.username}</h2>
        </div>
        <div className="col-xs-3">
          <button onClick={this.props.onClick} data-user-key={this.props.i}>{this.props.user_following ? 'Unfollow' : 'Follow'}</button>
        </div>
      </div>
    )
  }

}

export default User
