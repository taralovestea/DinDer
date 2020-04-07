import React from "react";

function userInfo() {
  return <section className="hero is-warning is-bold">
    <div className="hero-body">
      <div className="columns is-mobile ">
        <div className="column is-one-fifth">
          <a className="button is-warning" href="/profile">Edit Profile</a>
        </div>
        <div className="column is-four-fifths">
          <div className="container">
            <div className="container animation">
              <div className="animate seven">
                <span>D</span><span>i</span><span>n</span><span>D</span><span>e</span><span>r</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default userInfo; 