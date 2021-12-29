import axios from "axios";
import AuthHeader from "./AuthHeader";

const COST_API_BASE_URL = "http://localhost:8080/extra-cost/";

class ExtraCostService {
  getExtraCost() {
    return axios.get(COST_API_BASE_URL, { headers: AuthHeader() });
  }
}

export default new ExtraCostService();
