import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import React, { useState, useEffect, Component } from "react";
import Tile from "../components/Tile";
import ImageUpload from "../components/ImageUpload"
import NavBarHome from "../components/navbarhome"
import userInfo from "../components/userInfo"
import Footer from "../components/footer"

function updateUser() {
    const [user, setUser] = useState({})



    // need utils/api to be done, then change
    function loadUser() {
        API.getUser()
            .then(res =>
                setUser(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    };

    function handleFormSubmit(event) {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log("USER", user)
        API.updateUser(
            user
        ).then(res => {
            console.log("RESPONSE", res)
        })
    };

    return (
        <Container fluid>
            <NavBarHome user={user} />
            <userInfo user={user} />

            <Tile id="profileTile"
                userName={user.userName}
                header={user.header}
                dedication={user.dedication}
                isMaster={user.isMaster}
                campaign={user.campaign}
                experience={user.experience}
            />
            <section class="section">
                <div className="field">
                    <div className="label update-input">
                        Username
                <input onChange={handleInputChange} name="userName" type="userName" className="input">
                        </input>
                    </div>
                    <div className="update-input">
                        Header
                <input onChange={handleInputChange} name="header" type="header" className="input">
                        </input>
                    </div>
                    <div className="update-input">
                        Dedication level
                <input onChange={handleInputChange} name="dedication" type="dedication" className="input">
                        </input>
                    </div>
                    <div className="update-input">
                        Dungeon Master
                <input onChange={handleInputChange} name="isMaster" type="isMaster" className="input">
                        </input>
                    </div>
                    <div className="update-input">
                        Campaigns
                <input onChange={handleInputChange} name="campaign" type="campaign" className="input">
                        </input>
                    </div>
                    <div className="update-input">
                        Experience
                <input onChange={handleInputChange} name="experience" type="experience" className="input">
                        </input>
                    </div>
                    <div>
                        <ImageUpload onChange={handleInputChange} name="profilePic"></ImageUpload>
                    </div>
                    <button class="button is-warning" onClick={handleFormSubmit}>Submit</button>
                </div>
            </section>
            <Footer></Footer>
        </Container>
    )
}



export default updateUser;