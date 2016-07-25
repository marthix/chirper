import React from 'react'
import Post from './Post'

class PostList extends React.Component {
  constructor(props) {
    super(props)
    this.updateTimeline = this.updateTimeline.bind(this)
    this.post = this.post.bind(this)
    this.getInput = this.getInput.bind(this)
    this.state = {
      chirps: [],
      value: ''
    }
  }

  componentDidMount() {
    this.updateTimeline()
  }

  updateTimeline() {
    fetchApi('GET', '/posts/', {}, (response) => {
      this.setState({chirps: response.posts})
    })
  }

  post(e) {
    if (e.key ==='Enter') {
      fetchApi('POST', '/posts', {body: e.target.value}, (response, statusCode) => {
        if (statusCode >= 200 && statusCode < 300) {
          this.updateTimeline()
          this.setState({value: ''})
        } else {
          alert('Error with Chirp API')
        }
      })
    }
  }

  getInput(e) {
    this.setState({value: e.target.value})
  }

  render() {
    var chirps = this.state.chirps.map((chirp, i) => {
      return <Post key={i} src={chirp.user.bio_image} name={chirp.user.name} username={chirp.user.username} time={chirp.created_at} body={chirp.body} />
    })

    return <div>
      <input type="text" placeholder="What's on your mind?" value={this.state.value} onKeyPress={this.post} onChange={this.getInput}/>
      {chirps}
    </div>
  }
}

export default PostList
