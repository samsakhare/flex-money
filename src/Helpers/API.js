import axios from "axios";

class API {
  constructor() {
    this.request = axios.create({
      baseURL: "https://run.mocky.io/",
    });
  }
}

export default API;
