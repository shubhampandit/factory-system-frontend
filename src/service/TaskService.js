import axios from "axios";
import AuthHeader from "./AuthHeader";

const TASK_API_BASE_URL = "http://localhost:8080/task/";

class TaskService {
  getAssignedTasks(user) {
    return axios.get(TASK_API_BASE_URL + user, { headers: AuthHeader() });
  }

  updateTaskStatus(orderId, taskStatusRequest) {
    return axios.patch(
      TASK_API_BASE_URL + `updateStatus/${orderId}`,
      taskStatusRequest,
      { headers: AuthHeader() }
    );
  }
}

export default new TaskService();
