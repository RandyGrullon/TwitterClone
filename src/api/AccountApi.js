import axios from "../axios.config";
import { apiUrl } from "../shared/utils";

class AccountApi {
  async signIn(username, password) {
    
    let result = { data: null, error: null };
    try {
      const response = await axios.post(apiUrl("/auth/signin"), {
        username,
        password,
      });
      console.log("response", response);
      if (response.status === 200) {
        result.data = {
          token: response.data.token,
        };
        console.log("result", result);
      }
      return result;
    } catch (error) {
      // console.log("error", error );
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
