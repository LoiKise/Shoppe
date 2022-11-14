import { statusCart } from "../constants/status";
import http from "../utils/http";

const URL = "purchases";
const purchaseApi = {
  addToCart(data) {
    return http.post(`${URL}/add-to-cart`, data);
  },
  getCartPurchases() {
    return http.get(URL, {
      params: {
        status: statusCart.inCart,
      },
    });
  },
};

export default purchaseApi;
