import React from 'react';

function UserTile(props) {
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification has-background-grey-lighter">

        <figure className="image is-128x128">
          <img className="is-rounded" id="user_icon" src="images/taralovestea.png"></img>
        </figure>

uploadImg
          <p className="title">{props.name}</p>
          <p className="subtitle">{props.header}</p>
          <p> <b>Stats:</b></p>
        <p>Dedication Level: <i className="fas fa-award"></i>{props.dedication}</p>
        Dungeon Master: {props.isMaster} <br/>
        Campaign(s): {props.campaigns} <br/>
        Experience: {props.experience} <br/>

      </article>
    </div>
  );
}

export default UserTile;