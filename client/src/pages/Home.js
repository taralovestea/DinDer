import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron"; CHANGE THIS TO HERO
import API from "../utils/API";

function Detail(props) {
  const [user, setUser] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {
    API.getUser(id)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>

      {/* NAV BAR */}

      <nav className="navbar" role="navigation" aria-label="main navigation">
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
              Home
                  </a>

            <a className="navbar-item">
              Documentation
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
                <hr className="navbar-divider">
                  <a className="navbar-item">
                    Report an issue
                          </a>
                      </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-warning">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                          </a>
                </div>
              </div>
            </div>
          </div>
      </nav>

        {/* NAV BAR ENDS */}

        {/* HERO -- REPLACES JUMBOTRON */}

        <section className="hero is-warning is-bold">
          <div className="hero-body">
            <div className="columns is-mobile ">
              <div className="column is-one-fifth">
                <figure className="image is-128x128">
                  <img className="is-rounded" id="user_icon" src="https://bulma.io/images/placeholders/128x128.png">
                      </figure>
                  </div>
                <div className="column is-four-fifths">
                  <div className="container">
                    <div className="container animation">
                      <div className="animate seven">
                        <span>D</span><span>i</span><span>n</span><span>D</span><span>r</span>
                      </div>
                    </div>
                  </div>
                </div>
      </section>

              {/* HERO -- REPLACES JUMBOTRON ENDS */}

              {/* MATCHING */}

              <section className="section">
                <div className="container">
                  <h1 className="title">
                    Match & Game
              </h1>
                  <p className="subtitle">
                    Find users to game with <strong>now</strong>!
              </p>
                </div>
                <br><br>
                  <div className="tile is-ancestor">
                    <div className="tile is-parent">
                      <article className="tile is-child notification has-background-grey-lighter">
                        <figure className="image is-128x128">
                          <img className="is-rounded" id="user_icon" src="https://bulma.io/images/placeholders/128x128.png">
                      </figure>

                          <p className="title">taralovestea</p>
                          <p className="subtitle">What is up?</p>
                          <p> <b>Stats:</b></p>
                  </article>
              </div>

                      <div className="tile is-parent">
                        <article className="tile is-child has-text-centered">
                          <p className="title"><a className="button is-warning is-outlined is-large">
                            <span style='font-size:50px;'>&#128377;</span>
                      </p></a>
                          <p className="subtitle">Lets play!</p>
                          <br><br>
                            <p className="title is-center"><a className="button is-warning is-outlined is-large">
                              <span style='font-size:50px;'>&#128581;</span>
                      </p></a>
                            <p className="subtitle">Hard pass!</p>
                  </article>
              </div>

                          <div className="tile is-parent">
                            <article className="tile is-child notification has-background-grey-lighter">
                              <figure className="image is-128x128">
                                <img className="is-rounded" id="user_icon" src="https://bulma.io/images/placeholders/128x128.png">
                      </figure>

                                <p className="title">taralovestea</p>
                                <p className="subtitle">What is up?</p>
                                <p> <b>Stats:</b></p>
                  </article>
              </div>
                          </div>
      </section>

                        {/* MATCHING ENDS */}

                        {/* DINDER STATS + USER MATCHES */}

                        <nav className="level">
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Gamers</p>
                              <p className="title">3,456</p>
                            </div>
                          </div>
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Matches</p>
                              <p className="title">123</p>
                            </div>
                          </div>
                          <div className="level-item has-text-centered">
                            <div>
                              <p className="heading">Likes</p>
                              <p className="title">789</p>
                            </div>
                          </div>
                        </nav>

                        {/* DINDER STATS + USER MATCHES ENDS */}

                        {/* FOOTER */}

                        <footer className="footer">
                          <div className="content has-text-centered">
                            <p>
                              <strong>name of app</strong> by <a href="https://github.com/kkitko808">Kalani</a>,
                  <a href="https://github.com/taralovestea">Tara</a>,
                  <a href="https://github.com/mascott75">Mason</a> &
                  <a href="https://github.com/brittnilighthizer">Brittni</a>.
              </p>
                          </div>
                        </footer>
      </Container>
    );
  }


export default Home;
