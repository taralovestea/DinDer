import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import React, { useState, useEffect } from "react";

function Signup() {
    return (
        <Container fluid>
            <div className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container animation">
                        <div className="animate seven">
                        <span>D</span><span>i</span><span>n</span><span>D</span><span>e</span><span>r</span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section wrapper">
                <div className="container">
                    <h1 className="title">
                        Sign Up Form
                </h1>
                    <p className="subtitle">
                        Enter email and password below to access <strong>DinDer</strong>.
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
                            <button id="form_signup" className="button is-success">
                                Sign Up
                    </button>
                        </p>
                    </div>
                    <p>Already have an account? Login <a href="/">HERE</a></p>
                </div>
            </section>

        </Container>
    )
}

export default Signup;