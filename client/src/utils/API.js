import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  // Gets the user with the given id
  loginUser: function (id) {
    return axios.get("/api/home/" + id);
  },
  
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },

  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },

};
