import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import React, { useState, useEffect } from "react";
import Card from "../components/card";
function Login() {
    return (
        <Container fluid>
            <div className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container animation">
                        <div className="animate seven">
                            <span>m</span><span>y</span><span>N</span><span>o</span><span>t</span><span>e</span><span>s</span>

                            <h2 className="subtitle">
                                Your personalized private note-taker!
                        </h2>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section wrapper">
                <div className="container">
                    <h1 className="title">
                        Login Form
                </h1>
                    <p className="subtitle">
                        Enter email and password below to access <strong>myNotes</strong>.
                </p>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input id="email_input" className="input" type="email" placeholder="Email">
                            </input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input id="password-input" className="input" type="password" placeholder="Password">
                            </input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button id="form_login" className="button is-success">
                                Login
                    </button>
                        </p>
                    </div>
                    <p>Don't have an account? Sign up <a href="/signup">HERE</a></p>
                </div>
            </section>
            <div><Card/></div>

        </Container>
    )
}

export default Login;