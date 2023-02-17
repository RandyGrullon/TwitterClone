// import axios from "../axios.config";
import { apiUrl } from "../shared/utils";
import axios from "axios";

class AccountApi {
  async signIn(username, password) {
    
    let result = { data: null, error: null };
    try {
      // const response = await axios.post(apiUrl("/auth/signin"), {
      //   username,
      //   password,
      // });
      // console.log("response", response);
      // if (response.status === 200) {
      //   result.data = {
      //     token: response.data.token,
      //   };
      //   console.log("result", result);
      // }
      // return result;
      // const response = await fetch("https://swapi.dev/api/planets");
      // const data = await response.json();
      console.log("data", data);
      // const response = await axios.post(apiUrl("/auth/signin"), {username, password});
      // console.log(response.data);
    } catch (error) {
      console.log("error", error );
      // if (error.response.status === 401) {
      //   result.error = { type: "CREDS" };
      // } else {
      //   result.error = { type: "REQ" };
      // }
      // return result;
    }
  }
}

export default AccountApi;
