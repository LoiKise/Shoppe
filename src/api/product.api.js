import http from "../utils/http";

const URL = "products";

export const productApi = {
  getProduct(config) {
    return http.get(URL, config);
  },
  getProductDetail(id) {
    return http.get(`${URL}/${id}`);
  },
};

export default productApi;
