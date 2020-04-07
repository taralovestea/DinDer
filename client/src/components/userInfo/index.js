import React from "react";
import { Link } from "react-router-dom";
function userInfo() {
  return <section className="hero is-warning is-bold">
    <div className="hero-body">
      <div className="columns is-mobile ">
        <div className="column is-one-fifth">
          <Link className="button is-warning" to="/profile">Edit Profile</Link>
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