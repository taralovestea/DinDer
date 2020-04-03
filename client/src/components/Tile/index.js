import React from 'react';

function UserTile(props) {
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification has-background-grey-lighter">
        <figure className="image is-128x128">
          <img className="is-rounded" id="user_icon" src={props.user.profilePic}></img>
        </figure>
<<<<<<< Updated upstream
        <p className="title">{props.user.userName}</p>
        <p className="subtitle">{props.user.header}</p>
        <p> <b>Stats:</b></p>
        <p>Dedication Level: <i className="fas fa-award"></i>{props.user.dedication}</p>
        Dungeon Master: {props.user.isMaster} <br />
        Campaign(s): {props.user.campaigns} <br />
        Experience: {props.user.experience} <br />
=======
        <p className="title"><i class="fas fa-user"></i> : {props.userName}</p>
        <p className="subtitle">Bio: {props.header}</p>
        <p>Dedication Level: <i className="fas fa-award"></i>{props.dedication}</p>
        Dungeon Master: {props.isMaster} <br />
        Campaign(s): {props.campaigns} <br />
        Experience: {props.experience} <br />

>>>>>>> Stashed changes
      </article>
    </div>
  );
}

export default UserTile;