import React from 'react';

function UserTile(props) {
  return (
    <div className="tile is-parent">
      <article className="tile is-child notification has-background-grey-lighter">
        <figure className="image is-128x128">
          <img className="is-rounded" id="user_icon" src="../../../public/images/taralovestea"></img>
        </figure>

          <p className="title">taralovestea</p>
          <p className="subtitle">What is up?</p>
          <p> <b>Stats:</b></p>
        Dedication Level: <i className="fas fa-award"></i><br/>
        Dungeon Master: YES<br/>
        Campaign(s): Curse of Strahd, Dragon Heist, out of the abyss, Storm King's Thunder, Ghosts of Saltmarsh, Dungeon of the Mad Mage, Princes of the Apocalypse, Lost mine of Phandelver<br/>
        Experience: 5 years 2 months <br/>
      </article>
    </div>
  );
}

export default UserTile;