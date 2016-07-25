import React from 'react'
import ReactDOM from 'react-dom'

var Profile = (props) => <div className="row">
  <div className="col-xs-12 profile-container">
    <div className="row profile-bkg">
    </div>
    <div className="row avatar-container">
      <div className="col-xs-12">
        <div className="row">
          <div className="col-xs-3">
            <img id="profile-img" className="avatar" src={props.user.bio_image}  />
          </div>
          <div className="col-xs-9 user-info">
            <h1 id="profile-name">{props.user.name}</h1>
            <h2 id="profile-username">@{props.user.username}</h2>
          </div>
        </div>
        <div className="row user-stats">
          <div className="col-xs-4">
            <h3>Chirps</h3>
            <h4 id="stats-chirps">{props.user.post_count}</h4>
          </div>
          <div className="col-xs-4">
            <h3>Following</h3>
            <h4 id="stats-following">{props.user.followees_count}</h4>
          </div>
          <div className="col-xs-4">
            <h3>Followers</h3>
            <h4 id="stats-followers">{props.user.followers_count}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

export default Profile
