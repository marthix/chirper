import React from 'react'

var Post = (props) => <div className="row post text-left">
  <div className="col-xs-2">
    <img src={props.src} />
  </div>
  <div className="col-xs-10">
    <h1>{props.name}</h1>
    <h2>@{props.username}</h2>
    <h3>{props.time}</h3>
    <p>{props.body}</p>
  </div>
</div>

export default Post
