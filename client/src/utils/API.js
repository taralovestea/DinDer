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
  // Gets user
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },

};
