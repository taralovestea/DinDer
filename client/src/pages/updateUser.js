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
                profilePic={user.profilePic}
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
                        dedication lvl
                <select onChange={handleInputChange} name="dedication" type="dedication">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="update-input">
                        isMaster
                <div className="select">
                            <select onChange={handleInputChange} name="isMaster" type="isMaster">
                                <option value="0">false</option>
                                <option value="1">true</option>
                            </select>
                        </div>
                    </div>
                    <div className="update-input">
                        campaign
                <input onChange={handleInputChange} name="campaign" type="campaign" className="input">
                        </input>
                    </div>
                    <div className="update-input">
                        experience
                <div className="select">
                            <select onChange={handleInputChange} name="experience" type="experience">
                                <option>> 1 year</option>
                                <option>1 year</option>
                                <option>2 years</option>
                                <option>3 years</option>
                                <option>4 years</option>
                                <option>5 years</option>
                                <option>6 years</option>
                                <option>7 years</option>
                                <option>8 years</option>
                                <option>9 + years</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <ImageUpload></ImageUpload>
                    </div>
                    <button class="button is-warning" onClick={handleFormSubmit}>Warning</button>
                </div>
            </section>
        </Container >
    )
}



export default updateUser;