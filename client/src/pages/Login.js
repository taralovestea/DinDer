import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import React, { useState, useEffect } from "react";
import HeroBody from "../components/heroBody";

import Card from "../components/card";

import { useHistory } from "react-router-dom";


function Login() {
    const [formObject, setFormObject] = useState({})
    const history = useHistory();


    function handleFormSubmit(event) {
        event.preventDefault();

        console.log("you got here")

        API.loginUser({
            email: formObject.email,
            password: formObject.password
        })
            .then(history.push("/home"))
            .catch(err => console.log(err));
    
};
function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
};
return (
    <Container fluid>
        <HeroBody />
        <section className="section wrapper">
            <div className="container">
                <h1 className="title">
                    Login Form
                </h1>
                <p className="subtitle">
                Enter email and password below to access <strong>DinDer</strong>.
                </p>
                <form>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input onChange={handleInputChange} id="email_input" className="input" type="email" placeholder="Email">
                            </input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input onChange={handleInputChange} id="password-Input" className="input" type="password" placeholder="Password">
                            </input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <FormBtn id="form_login" onClick={handleFormSubmit}><a href="/home">
                                Login
                                    </a>
                            </FormBtn>
                        </p>
                    </div>
                </form>
                <p>Don't have an account? Sign up <a href="/signup">HERE</a></p>
            </div>
        </section>
        <div><Card /></div>

    </Container>
)
}

export default Login;