import React from 'react';

function UserTile(props) {
  const boolMaster = (props.isMaster === "true").toString()
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification has-background-grey-lighter">
        <figure className="image is-128x128">
          <img className="is-rounded" id="user_icon" src={props.profilePic}></img>
        </figure>
        <p className="title"><i class="fas fa-user"></i> : {props.userName}</p>
        <p className="subtitle">Bio: {props.header}</p>
        <p>Dedication Level: <i className="fas fa-award"></i>{props.dedication}</p>
        Dungeon Master: {boolMaster} <br />
        Campaign(s): {props.campaign} <br />
        Experience: {props.experience} <br />

      </article>
    </div>
  );
}

export default UserTile;