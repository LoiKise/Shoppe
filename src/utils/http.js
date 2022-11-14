import LocalStorage from "../constants/localStorage";
import axios from "axios";
import { toast } from "react-toastify";

/** cấu hình axios  */
class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // config kết quả trả về
    this.instance.interceptors.response.use(
      // giá trị trả về khi axios được call, ở đây chúng ta chỉ cần lấy hai giá trị là data, status
      (response) => {
        const result = { ...response.data, status: response.status };
        return result;
      },

      ({ response }) => {
        console.log(
          "🚀 ~ file: http.js ~ line 26 ~ Http ~ constructor ~ response",
          response
        );
        if (response.status === 401) {
          toast.error(response.data.message, {
            position: "top-center",
            autoClose: "3000",
          });
        }
        const result = { ...response.data, status: response.status };
        return Promise.reject(result);
      }
    );

    // config call api
    this.instance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem(LocalStorage.accessToken);
        if (accessToken) {
          config.headers.authorization = accessToken;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }

  // config get,post, put ,deleted

  get(url, config = null) {
    return this.instance.get(url, config);
  }

  post(url, data, config = null) {
    return this.instance.post(url, data, config);
  }

  put(url, data, config = null) {
    return this.instance.put(url, data, config);
  }

  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config,
    });
  }
}

const http = new Http();
export default http;
