import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


function Users() {
  // Setting our component's initial state
  const [Users, setUsers] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Users and store them with setUsers
  useEffect(() => {
    loadUsers()
  }, [])

  // Loads all Users and sets them to Users
  function loadUsers() {
    API.getUsers()
      .then(res => 
        setUsers(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a User from the database with a given id, then reloads Users from the db
  function deleteUser(id) {
    API.deleteUser(id)
      .then(res => loadUsers())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveUser method to save the User data
  // Then reload Users from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveUser({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadUsers())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Users Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit User
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Users On My List</h1>
            </Jumbotron>
            {Users.length ? (
              <List>
                {Users.map(User => (
                  <ListItem key={User._id}>
                    <Link to={"/Users/" + User._id}>
                      <strong>
                        {User.title} by {User.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteUser(User._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Users;
