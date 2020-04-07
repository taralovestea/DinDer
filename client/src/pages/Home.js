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
import Axios from "axios";
import { useHistory } from "react-router-dom";

function Home() {
  const [randUser, setRandUser] = useState({})
  const [user, setUser] = useState({})
  const [spell, setSpell] = useState({})
  const history = useHistory();

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const { id } = useParams()
  useEffect(() => {

    API.checkUserLogged()
      .then((user) => {
        if (user.data.id)
          setUser(user.data);
        else
          history.push("/")
      })

    Axios.get("https://api.open5e.com/spells/")
      .then((res) => { setSpell(res.data.results[Math.floor(Math.random() * 50)]) })

      .catch(err => console.log(err));
    API.checkUserLogged()
      .then((user) => {
        setUser(user.data);
      })
    API.getAllUsers()
      .then((dbusers) => {
        let length = dbusers.data.dbUsers.length
        setRandUser(dbusers.data.dbUsers[Math.floor(Math.random() * length)])
      })
  }, [])

  return (
    <Container>

      {/* NAV BAR */}
      <NavBarHome user={user} />

      {/* NAV BAR ENDS */}

      {/* HERO -- REPLACES JUMBOTRON */}

      <UserInfo />

      {/* HERO -- REPLACES JUMBOTRON ENDS */}

      {/* MATCHING */}

      <HomeTitle spell={spell} >
      </HomeTitle>
      <br /><br />
      <section class="section">
        <div className="tile is-ancestor">


          <UserTile profilePic={user.profilePic} userName={user.userName} header={user.header} dedication={user.dedication} isMaster={user.isMaster} campaign={user.campaign} experience={user.experience}>


          </UserTile>

          <div className="tile is-parent">
            <article className="tile is-child has-text-centered">
              <br /><br />
              <br /><br />
              <p className="title is-center">
                <span className="icon is-medium has-text-warning">
                  <i className="hvr-grow fas fa-headset fa-5x"></i></span></p>
              <br /><br />
              <br /><br />
              <p className="title is-center">
                <span className="icon is-medium has-text-warning">
                  <i className="hvr-grow fas fa-times-circle fa-5x"></i></span></p>
            </article>
          </div>
          {
            (user.id == randUser.id) ?
              (<p>Match with yourself!</p>) : (<p></p>)
          }
          <UserTile profilePic={randUser.profilePic} userName={randUser.userName} header={randUser.header} dedication={randUser.dedication} isMaster={randUser.isMaster} campaign={randUser.campaign} experience={randUser.experience}>

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
