import axios from "axios";
import { BASE_URL_API } from "./URL";

class AuthService {
  login(email, password)  {
    return axios.post(BASE_URL_API+"Account/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, email, password, confirmPassword) {
    return axios.post(BASE_URL_API+"Account/register", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
  }
}

export default new AuthService();