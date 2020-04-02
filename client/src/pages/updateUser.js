import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import React, { useState, useEffect } from "react";
import Tile from "../components/Tile";

function updateUser() {
    
    
    state = {
        userName: loadUser(),
        header: "",
        dedication: "",
        isMaster: false,
        campaign: "",
        experience: ""
    };

    useEffect(() => {
        loadUsers()
    }, [])

    // need utils/api to be done, then change
    function loadUser() {
        API.getUser()
            .then(res =>
                setUsers(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        if (!this.state.name) {
            alert("Fill out your name please!");
        }
         else {
            // code to update user
            alert("we need to update the db")
        }

    };
    return (
        <Container fluid>
            <Tile id=""
                userName={this.state.name}
                header={this.state.header}
                dedication={this.state.dedication}
                isMaster={this.state.isMaster}
                campaign={this.state.campaign}
                experience={this.state.experience}
            />
            
            <div className="update-input">
                <input onChange={handleInputChange} name="userName" type="name" className="input">
                </input>
            </div>
            <div className="update-input">
                <input onChange={handleInputChange} name="header" type="name" className="input">
                </input>
            </div>
            <div className="update-input">
                <input onChange={handleInputChange} name="dedication" type="name" className="input">
                </input>
            </div>
            <div className="update-input">
                <input onChange={handleInputChange} name="isMaster" type="name" className="input">
                </input>
            </div>
            <div className="update-input">
                <input onChange={handleInputChange} name="campaign" type="name" className="input">
                </input>
            </div>
            <div className="update-input">
                <input onChange={handleInputChange} name="experience" type="name" className="input">
                </input>
            </div>

        </Container>
    )

}