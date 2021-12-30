import axios from "axios";
import AuthHeader from "./AuthHeader";

const ANALYSIS_API_URL = "http://localhost:8080/analysis";

class AnalysisService {
  getAnalysis(link) {
    return axios.get(`${ANALYSIS_API_URL}${link}`, { headers: AuthHeader() });
  }
}

export default new AnalysisService();
