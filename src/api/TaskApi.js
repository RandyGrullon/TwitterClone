import axios from "../axios.config";
import { apiUrl } from "../shared/utils";

class TaskApi {
  async getAllTask() {
    let result = { data: [], error: null };
    try {
      // const response = await axios.get(apiUrl("/task"));
    //   if (response.status === 200) {
    //     result.data = response;
    //   }
      // console.log("result2", response);
    //   return result;
    } catch (error) {
    //   result.error = { type: "REQ", error };
    //   return result;

        console.log("error", error );
    }
  }
}

export default TaskApi;
