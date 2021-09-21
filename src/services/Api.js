import axios from "axios";
let domain = "http://localhost:3000";
let endpoint = `${domain}/api/user/`;

export default class Request {
  constructor() {}

  getParsedUrl(path) {
    return domain + path;
  }

  callServer(data) {
    return new Promise((resolve, reject) => {
      try {
        let res = axios.post(endpoint, data);
        resolve(res);
      } catch (err) {
        console.log(err);
        // notification.notify(
        //   "error",
        //   "Server Error",
        //   err.response.data.err_msg || err.response.data.err_code
        // );
        reject(err.response);
      }
    });
  }

  callServerSecure(data) {
    return new Promise((resolve, reject) => {
      try {
        let token = sessionStorage.getItem("basil-token");
        if (token !== null) {
          // axios.defaults.headers.common["token"] = token;
          let res = axios.post(endpoint, data);
          resolve(res);
        } else {
          Event.$emit("token:not-found", true);
        }
        resolve(undefined);
      } catch (err) {
        console.log(err);
        // notification.notify(
        //   "error",
        //   "Server Error",
        //   err.response.data.err_msg || err.response.data.err_code
        // );
        reject(err.response);
      }
    });
  }

  callServerMultipart(url, data) {
    return new Promise((resolve, reject) => {
      try {
        let token = sessionStorage.getItem("token");
        if (token !== null) {
          let res = axios.post(domain + url, data, {
            headers: {
              token,
              "Content-Type": "multipart/form-data",
            },
          });
          resolve(res);
        } else {
          Event.$emit("token:not-found", true);
        }
        resolve(undefined);
      } catch (err) {
        // notification.notify(
        //   "error",
        //   "Server Error",
        //   err.response.data.err_msg || err.response.data.err_code
        // );
        reject(err.response.data);
      }
    });
  }
}
