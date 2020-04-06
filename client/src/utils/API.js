import axios from "axios";

export default {
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  // Gets the user with the given id
  loginUser: function (userData) {
    return axios.post("/api/login", userData);
  },
  // Gets user
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  signUpUser: function (userData) {
    return axios.post("/api/signup", userData);
  },
  checkUserLogged: function () {
    return axios.get("/api/user_data");
  },
  updateUser: function (userData) {
    return axios.put("/api/update_user", userData);
  }
};
