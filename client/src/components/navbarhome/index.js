import React from "react";
import { Link } from "react-router-dom";
function navBarHome() {
  return <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

<<<<<<< Updated upstream
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Welcome <h1>{user.userName}</h1>
            </a>
=======
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item">
          Home
            </a>

        <a className="navbar-item">
          Matches
            </a>
        <a className="navbar-item">
        <Link to ='/profile' >Profile</Link> 
            </a>

        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link">
            More
                </a>

          <div className="navbar-dropdown">
            <a className="navbar-item">
              About
                    </a>
            <a className="navbar-item">
              Jobs
                    </a>
            <a className="navbar-item">
              Contact
                    </a>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>

<<<<<<< Updated upstream
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-light">
            Log out
=======
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-warning">
              <strong>Sign up</strong>
            </a>
            <a className="button is-light">
              Log in
>>>>>>> Stashed changes
                    </a>
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
  </div>
</nav>
=======
    </div>
  </nav>

>>>>>>> Stashed changes
}

export default navBarHome;