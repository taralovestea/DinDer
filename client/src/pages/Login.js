import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import React, { useState, useEffect } from "react";
function Login() {
    // setting initial state 
    const [formObject, setFormObject] = useState({})
    // 
    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("you got here")
        //if (formObject.title && formObject.author) {
        //  API.saveBook({
          //  title: formObject.title,
          //  author: formObject.author,
          //  synopsis: formObject.synopsis
        //  })
          //  .then(res => loadBooks())
           // .catch(err => console.log(err));
       // }
      };
      function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };
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
                <form>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input onChange= {handleInputChange} id="email_input" className="input" type="email" placeholder="Email">
                            </input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input onChange= {handleInputChange} id="password-Input" className="input" type="password" placeholder="Password">
                            </input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <FormBtn id="form_login" onClick={handleFormSubmit}>
                                Login
                    </FormBtn>
                        </p>
                    </div>
                    </form>
                    <p>Don't have an account? Sign up <a href="/signup">HERE</a></p>
                </div>
            </section>

        </Container>
    )
}

export default Login;