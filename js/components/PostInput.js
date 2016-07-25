import React from 'react'
import Post from './Post'

class PostInput extends React.Component {
  constructor(props) {
    super(props)
    this.getInput = this.getInput.bind(this)
    this.captureKey = this.captureKey.bind(this)
    this.state = {
      posts: [],
      value: ''
    }
  }

  captureKey(e) {
    if (e.key === 'Enter') {
      var formFields = {
        body: e.target.value,
        auth_token: getToken()
      }

      fetchApi('POST', '/posts', formFields, function(response, statusCode) {})
      this.setState({value: '', posts: posts})
    }
  }

  getInput(e) {
    this.setState({value: e.target.value})
  }

  render() {
    return <div>
      <input value={this.state.value} onKeyPress={this.captureKey} onChange={this.getInput}/>
    </div>
  }
}

export default PostInput
