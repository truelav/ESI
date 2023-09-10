import axios from "axios";

const axiosClient = axios.create({
  baseURL: "localhost:8888",
});

export default axiosClient;
