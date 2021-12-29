import axios from "axios";
import AuthHeader from "./AuthHeader";

const PRODUCT_API_BASE_URL = "http://localhost:8080/product/";

class ProductService {
  searchProduct(searchTerm) {
    return axios.get(PRODUCT_API_BASE_URL + `search/${searchTerm}`, {
      headers: AuthHeader(),
    });
  }

  postProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL, product, { headers: AuthHeader() });
  }
}

export default new ProductService();
