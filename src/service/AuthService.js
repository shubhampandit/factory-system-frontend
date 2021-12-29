import axios from "axios";

const API_URL = "http://localhost:8080/user/login";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL, { username: username, password: password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
