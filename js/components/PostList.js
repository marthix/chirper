import React from 'react'
import Post from './Post'

class PostList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var posts = []

    fetchApi('GET', '/posts/', getToken(), function(response, statusCode){

      posts = response.posts.map((post, i) => {
        return <Post key={i} src={post.user.bio_image} name={post.user.name} username={post.user.username} time={post.created_at} body={post.body} />
        // console.log(post)
      })
      // console.log(posts)
    })

    console.log(posts)
    return <div>{posts}</div>
  }
}

export default PostList
