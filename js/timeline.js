import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Profile from './components/Profile'
import Post from './components/Post'
import PostList from './components/PostList'
import User from './components/User'
import UserList from './components/UserList'


fetchApi('GET', '/users/me', {}, function(response){
  ReactDOM.render(<Profile {...response} />, document.getElementById('profile'))
})

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/timeline.html" component={PostList}/>
  </Router>
  , document.getElementById('posts'))

ReactDOM.render(<UserList />, document.getElementById('users'))


// Listen for document load to pull in logged in users

// document.addEventListener('load', fetchApi('GET', '/users/' + userId, getToken(), function(response, statusCode) {
//   if (statusCode >= 200 && statusCode < 300) {
//     var profileImg = document.getElementById('profile-img'),
//       profileUsername = document.getElementById('profile-username'),
//       profileName = document.getElementById('profile-name'),
//       statsChrips = document.getElementById('stats-chirps'),
//       statsFollowing = document.getElementById('stats-following'),
//       statsFollowers = document.getElementById('stats-followers')
//
//       if(response.user.bio_image === null) {
//         profileImg.src = 'https://unsplash.it/60/60?random'
//       } else {
//         profileImg.src = response.user.bio_image
//       }
//
//       profileUsername.innerHTML = '@' + response.user.username
//       profileName.innerHTML = response.user.name
//       statsChrips.innerHTML = response.user.post_count
//       statsFollowing.innerHTML = response.user.followees_count
//       statsFollowers.innerHTML = response.user.followers_count
//
//   } else {
//
//   }
// }))

document.body.addEventListener('click', function(e){
  if(e.target.id === 'btn-logout' || e.target.id === 'btn-logout-link') {
    destroyToken()
  }
})
