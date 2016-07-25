import React from 'react'
import User from './User'

class UserList extends React.Component {
  constructor(props) {
    super(props)
    this.updateUserList = this.updateUserList.bind(this)
    this.followToggle = this.followToggle.bind(this)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    this.updateUserList()
  }

  updateUserList() {
    fetchApi('GET', '/users/', {}, (response) => {
      console.log(response.users)
      this.setState({users: response.users})
    })
  }

  followToggle(e) {
    var users = this.state.users,
      followingUser = !users[e.target.getAttribute('data-user-key')].user_following

    // Toggle state
    users[e.target.getAttribute('data-user-key')].user_following = followingUser
    this.setState({users:users})

    // Update API
    if (followingUser) {
      fetchApi('POST', '/followings', {
        id: users[e.target.getAttribute('data-user-key')].id
      })
    } else {
      fetchApi('DELETE', '/followings', {
        id: users[e.target.getAttribute('data-user-key')].id
      })
    }
  }

  render() {
    var users = this.state.users.map((user, i) => {
      return <User i={i} key={i} {...user} onClick={this.followToggle} />
    })

    return <div>
      {users}
    </div>
  }
}

export default UserList
