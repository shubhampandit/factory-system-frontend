import axios from "axios";
import AuthHeader from "./AuthHeader";

const COMPANY_API_BASE_URL = "http://localhost:8080/company/";

class CompanyMasterService {
  searchCompany(name) {
    return axios.get(COMPANY_API_BASE_URL + `search/${name}`, {
      headers: AuthHeader(),
    });
  }

  postCompanyDetails(company) {
    return axios.post(COMPANY_API_BASE_URL, company, { headers: AuthHeader() });
  }
}

export default new CompanyMasterService();
