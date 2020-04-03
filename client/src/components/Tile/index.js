import React from 'react';

function UserTile(props) {
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification has-background-grey-lighter">
        <figure className="image is-128x128">
          <img className="is-rounded" id="user_icon" src={props.user.profilePic}></img>
        </figure>
        <p className="title">{props.user.userName}</p>
        <p className="subtitle">{props.user.header}</p>
        <p> <b>Stats:</b></p>
        <p>Dedication Level: <i className="fas fa-award"></i>{props.user.dedication}</p>
        Dungeon Master: {props.user.isMaster} <br />
        Campaign(s): {props.user.campaigns} <br />
        Experience: {props.user.experience} <br />
      </article>
    </div>
  );
}

export default UserTile;