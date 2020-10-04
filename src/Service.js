import axios from "axios";

const aptUrl = "/api/apartments/";
const roomUrl = "/api/rooms/";

class ApartmentService {
  getApartments() {
    return axios.get(aptUrl);
  }
  getRooms() {
    return axios.get(roomUrl);
  }
}

export default ApartmentService;
