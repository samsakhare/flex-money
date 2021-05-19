import API from "./API";

class CardAPI extends API {
  processCard(url, data) {
    return this.request.post(url, data);
  }
}

export default CardAPI;
