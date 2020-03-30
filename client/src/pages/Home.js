import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron"; CHANGE THIS TO HERO
import API from "../utils/API";
import NavBarHome from "../components/navbarhome";
import UserInfo from "../components/userInfo";
import HomeTitle from "../components/Title";
import WebStats from "../components/webStats";
import Footer from "../components/footer";

function Home(props) {
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
    <Container>

      {/* NAV BAR */}
      <NavBarHome />

      {/* NAV BAR ENDS */}

      {/* HERO -- REPLACES JUMBOTRON */}

      <UserInfo />

      {/* HERO -- REPLACES JUMBOTRON ENDS */}

      {/* MATCHING */}

     <HomeTitle />
      <br/><br/>
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child notification has-background-grey-lighter">
                <figure className="image is-128x128">
                  <img className="is-rounded" id="user_icon" src="https://bulma.io/images/placeholders/128x128.png"></img>
                </figure>

                <p className="title">taralovestea</p>
                <p className="subtitle">What is up?</p>
                <p> <b>Stats:</b></p>
              </article>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child has-text-centered">
                <p className="title"><a className="button is-warning is-outlined is-large">
                  {/* <span style='font-size:50px;'>&#128377;</span> */}
                </a></p>
                <p className="subtitle">Lets play!</p>
                <br/><br/>
                <p className="title is-center"><a className="button is-warning is-outlined is-large">
                  {/* <span style='font-size:50px;'>&#128581;</span> */}
                </a></p>
                <p className="subtitle">Hard pass!</p>
              </article>
              <div className="tile is-parent">
                <article className="tile is-child notification has-background-grey-lighter">
                  <figure className="image is-128x128">
                    <img className="is-rounded" id="user_icon" src="https://bulma.io/images/placeholders/128x128.png"></img>
                  </figure>

                      <p className="title">taralovestea</p>
                      <p className="subtitle">What is up?</p>
                      <p> <b>Stats:</b></p>
                    </article>
                  </div>
        </div>
        </div>
      </section>

            {/* MATCHING ENDS */}

            {/* DINDER STATS + USER MATCHES */}

        <WebStats />

            {/* DINDER STATS + USER MATCHES ENDS */}

            {/* FOOTER */}

            <Footer />
      </ Container>
    )
  };


export default Home(props);
