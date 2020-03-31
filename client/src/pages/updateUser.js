import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import React, { useState, useEffect } from "react";
import Card from "../components/card";

function updateUser() {
    
    
    state = {
        name: loadUser(),
        src: "",
        bio: ""
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
            <Card
                bio={this.state.bio}
                name={this.state.name}
                src={this.state.src}

            >
            </Card>
            <div className="update-input">
                <input onChange={handleInputChange} name="name" type="name" className="input">
                </input>
            </div>

        </Container>
    )

}