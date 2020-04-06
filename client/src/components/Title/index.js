import React from "react";

function homeTitle(props) {
    return <section className="section">
        <div className="container">
            <h1 className="title">
                Match & Game
      </h1>
            <p className="subtitle">
                Find users to game with <strong>now</strong>!
      </p>
        </div>
        <div>
<h1>Spell of the Day! {props.spell.name}</h1>

        </div>
    </section>
}

export default homeTitle;