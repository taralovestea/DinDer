import React from "react";
function navBarHome(props) {
return <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
      data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Welcome <h1>{props.user.userName}</h1>
            </a>
        <a className="navbar-item">
        {/* <Link to ='/profile' >Profile</Link>  */}
            </a>

        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-light">
              Log Out
                    </a>
          </div>
        </div>
      </div>
  </nav>

}

export default navBarHome;