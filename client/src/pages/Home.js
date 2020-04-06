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
import UserTile from "../components/Tile";

import { useHistory } from "react-router-dom";
function Home() {
  const [user, setUser] = useState({})
  const history = useHistory();
  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()

  // useEffect(() => {
  //   API.checkUserLogged()
  //     .then((user) => {
  //       if (user.data.id)
  //         setUser(user.data);
  //       else
  //         history.push("/")
  //     })
  // }, [])

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
      <br /><br />
      <section class="section">
        <div className="tile is-ancestor">

          <UserTile >

          </UserTile>
          <div className="tile is-parent">
            <article className="tile is-child has-text-centered">
              <br /><br />
              <br /><br />
              <p className="title"><a className="button is-warning is-outlined is-large">
                <span class="icon is-medium">
                  <i class="fas fa-headset fa-8x"></i></span></a></p>
              <br /><br />
              <br /><br />
              <br /><br />
              <p className="title is-center"><a className="button is-warning is-outlined is-large">
                <span class="icon is-medium">
                  <i class="fas fa-times-circle fa-8x"></i></span></a></p>
            </article>
          </div>

          <UserTile>

          </UserTile>
        </div>
      </section>


      {/* MATCHING ENDS */}

      {/* DINDER STATS + USER MATCHES */}

      <WebStats />

      {/* DINDER STATS + USER MATCHES ENDS */}

      {/* FOOTER */}

      <Footer />
    </ Container >
  )
};


export default Home;
