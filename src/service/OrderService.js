import axios from "axios";
import AuthHeader from "./AuthHeader";

const ORDER_API_BASE_URL = "http://localhost:8080/order/";

class OrderService {
  getLatestOrders() {
    return axios.get(ORDER_API_BASE_URL, { headers: AuthHeader() });
  }

  getOrder(orderId) {
    return axios.get(ORDER_API_BASE_URL + orderId, { headers: AuthHeader() });
  }

  postOrder(order) {
    return axios.post(ORDER_API_BASE_URL, order, { headers: AuthHeader() });
  }
}

export default new OrderService();
